import {Result} from '@/core';
import {GetProductList, InspectionList, QrCodeDetailModel, RequestList} from '@/model';
import {createSlice} from '@reduxjs/toolkit';
import {PRODUCT, REQUEST} from '@/redux/slice/Types';
import RequestReducer from "@/redux/reducer/RequestReducer";
import ProductReducer from '@/redux/reducer/ProductReducer';

export interface ProductSliceType {
  productList?: Result<GetProductList>;
}

export const initialState: ProductSliceType = {
  productList: undefined,
};

const RequestSlice = createSlice({
  name: PRODUCT,
  initialState: initialState,
  reducers: ProductReducer,
});

export const {actions: productActions, reducer: productReducer} = RequestSlice;
