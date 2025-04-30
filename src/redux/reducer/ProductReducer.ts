import {Result} from '@/core';
import {PayloadAction} from '@reduxjs/toolkit';
import {AddProductList, GetProductList} from '@/model';
import {ProductSliceType} from '@/redux/slice/ProductSlice';

export default {
  productList: (
    state: ProductSliceType,
    action: PayloadAction<Result<GetProductList>>,
  ) => {
    state.productList = action.payload;
  },
  addProduct: (
    state: ProductSliceType,
    action: PayloadAction<Result<AddProductList>>,
  ) => {
    state.addProduct = action.payload;
  },
  saveProduct: (
    state: ProductSliceType,
    action: PayloadAction<Result<string>>,
  ) => {
    state.saveProduct = action.payload;
  },
};
