import {dispatchable} from '@/redux/dispatchable';
import {
  addProductApi,
  approveRequestApi,
  ApproveRequestApiParams, getInspectionListApi, GetInspectionListApiParams, getProductListApi, GetProductListApiParams,
  getQrCodeDetailApi, GetQrCodeDetailApiParams,
  getRequestListApi,
  GetRequestListApiParams, saveInspectionApi, SaveInspectionApiParams,
} from '@/api';
import {Dispatch} from 'react';
import {Action} from 'redux-saga';
import {getDefaultError, Result} from '@/core';
import {AddProductList, GetProductList, InspectionList, QrCodeDetailModel, RequestList} from '@/model';
import {GetProductDto, InspectionDto, QrCodeDetailDto, RequestDto} from '@/dtos';
import {ToastAndroid} from 'react-native';
import {requestActions} from '@/redux/slice/RequestSlice';
import {productActions, productReducer} from '@/redux/slice/ProductSlice';


export const getProductListApiThunkCall = dispatchable((params: GetProductListApiParams) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        dispatch(productActions.productList(Result.waiting()));
        const response = await getProductListApi.post(params);

        if (response.isSuccess) {
          //Parse dto from api response top model
          const dataModel = new GetProductList(response.data.productList as GetProductDto[]);
          // await LoginAgainThunkCall();
          //Wrap with result class
          const resultDataModel = Result.ok(dataModel);
          //Dispatch to store in to redux
          dispatch(productActions.productList(resultDataModel));
          //Return the result, so it can be used where api triggered
          return response;
        } else {
          ToastAndroid.show(response?.error ?? '', ToastAndroid.LONG);
        }
        //Dispatch to fail the response
        dispatch(productActions.productList(Result.fail('getProductListApiThunkCall')));
        return getDefaultError(response.error, 'getProductListApiThunkCall');
      } catch (e) {
        //Dispatch to fail the response
        return getDefaultError(e, 'CATCH getProductListApiThunkCall');
      }
    };
  },
);

export const addProductApiThunkCall = dispatchable(() => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        dispatch(productActions.addProduct(Result.waiting()));
        const response = await addProductApi.post();

        if (response.isSuccess) {
          //Parse dto from api response top model
          const dataModel = new AddProductList(response.data.catList as GetProductDto[]);
          // await LoginAgainThunkCall();
          //Wrap with result class
          const resultDataModel = Result.ok(dataModel);
          //Dispatch to store in to redux
          dispatch(productActions.addProduct(resultDataModel));
          //Return the result, so it can be used where api triggered
          return response;
        } else {
          ToastAndroid.show(response?.error ?? '', ToastAndroid.LONG);
        }
        //Dispatch to fail the response
        dispatch(productActions.addProduct(Result.fail('addProductApiThunkCall')));
        return getDefaultError(response.error, 'addProductApiThunkCall');
      } catch (e) {
        //Dispatch to fail the response
        return getDefaultError(e, 'CATCH addProductApiThunkCall');
      }
    };
  },
);
