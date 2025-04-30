import {Result} from '@/core';
import {AddProductList, GetProductList} from '@/model';
import {createSlice} from '@reduxjs/toolkit';
import {PRODUCT} from '@/redux/slice/Types';
import ProductReducer from '@/redux/reducer/ProductReducer';

export interface ProductSliceType {
  productList?: Result<GetProductList>;
  addProduct?: Result<AddProductList>;
}

export const initialState: ProductSliceType = {
  productList: undefined,
  addProduct:undefined,
};

const RequestSlice = createSlice({
  name: PRODUCT,
  initialState: initialState,
  reducers: ProductReducer,
});

export const {actions: productActions, reducer: productReducer} = RequestSlice;
