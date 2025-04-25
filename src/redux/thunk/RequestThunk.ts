import {dispatchable} from '@/redux/dispatchable';
import {
  approveRequestApi,
  ApproveRequestApiParams,
  getQrCodeDetailApi, GetQrCodeDetailApiParams,
  getRequestListApi,
  GetRequestListApiParams,
} from '@/api';
import {Dispatch} from 'react';
import {Action} from 'redux-saga';
import {getDefaultError, Result} from '@/core';
import {QrCodeDetailModel, RequestList} from '@/model';
import {QrCodeDetailDto, RequestDto} from '@/dtos';
import {ToastAndroid} from 'react-native';
import {requestActions} from '@/redux/slice/RequestSlice';


export const getRequestListApiThunkCall = dispatchable((params: GetRequestListApiParams) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        dispatch(requestActions.requestList(Result.waiting()));
        const response = await getRequestListApi.post(params);

        if (response.isSuccess) {
          //Parse dto from api response top model
          const dataModel = new RequestList(response.data as RequestDto[]);
          // await LoginAgainThunkCall();
          //Wrap with result class
          const resultDataModel = Result.ok(dataModel);
          //Dispatch to store in to redux
          dispatch(requestActions.requestList(resultDataModel));
          //Return the result, so it can be used where api triggered
          return response;
        } else {
          ToastAndroid.show(response?.error ?? '', ToastAndroid.LONG);
        }
        //Dispatch to fail the response
        dispatch(requestActions.requestList(Result.fail('getRequestListApiThunkCall')));
        return getDefaultError(response.error, 'getRequestListApiThunkCall');
      } catch (e) {
        //Dispatch to fail the response
        return getDefaultError(e, 'CATCH getRequestListApiThunkCall');
      }
    };
  },
);

export const approveRequestApiThunkCall = dispatchable((params: ApproveRequestApiParams) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        dispatch(requestActions.requestList(Result.waiting()));
        const response = await approveRequestApi.post(params);

        if (response.isSuccess) {
          //Parse dto from api response top model
          const dataModel = response.data
          // await LoginAgainThunkCall();
          //Wrap with result class
          const resultDataModel = Result.ok(dataModel);
          //Dispatch to store in to redux
          dispatch(requestActions.requestList(resultDataModel));
          ToastAndroid.show(response?.message ?? '', ToastAndroid.LONG);
          //Return the result, so it can be used where api triggered
          return response;
        } else {
          ToastAndroid.show(response?.error ?? '', ToastAndroid.LONG);
        }
        //Dispatch to fail the response
        dispatch(requestActions.requestList(Result.fail('approveRequestApiThunkCall')));
        return getDefaultError(response.error, 'approveRequestApiThunkCall');
      } catch (e) {
        //Dispatch to fail the response
        return getDefaultError(e, 'CATCH approveRequestApiThunkCall');
      }
    };
  },
);

export const qrCodeDetailApiThunkCall = dispatchable((params: GetQrCodeDetailApiParams) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        dispatch(requestActions.QrCodeDetail(Result.waiting()));
        const response = await getQrCodeDetailApi.post(params);

        if (response.isSuccess) {
          //Parse dto from api response top model
          const dataModel = new QrCodeDetailModel(response.data as QrCodeDetailDto)
          // await LoginAgainThunkCall();
          //Wrap with result class
          const resultDataModel = Result.ok(dataModel);
          //Dispatch to store in to redux
          dispatch(requestActions.QrCodeDetail(resultDataModel));
          ToastAndroid.show(response?.message ?? '', ToastAndroid.LONG);
          //Return the result, so it can be used where api triggered
          return response;
        } else {
          ToastAndroid.show(response?.error ?? '', ToastAndroid.LONG);
        }
        //Dispatch to fail the response
        dispatch(requestActions.QrCodeDetail(Result.fail('qrCodeDetailApiThunkCall')));
        return getDefaultError(response.error, 'qrCodeDetailApiThunkCall');
      } catch (e) {
        //Dispatch to fail the response
        return getDefaultError(e, 'CATCH qrCodeDetailApiThunkCall');
      }
    };
  },
);
