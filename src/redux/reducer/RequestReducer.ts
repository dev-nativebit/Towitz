import {Result} from '@/core';
import {PayloadAction} from '@reduxjs/toolkit';
import {InspectionList, QrCodeDetailModel, RequestList} from '@/model';
import { RequestSliceType } from "@/redux/slice/RequestSlice";

export default {
  'requestList': (
    state: RequestSliceType,
    action: PayloadAction<Result<RequestList>>,
  ) => {
    state.requestList = action.payload;
  },
  'approveRequest': (
    state: RequestSliceType,
    action: PayloadAction<Result<string>>,
  ) => {
    state.approveRequest = action.payload;
  },
  'saveInspection': (
    state: RequestSliceType,
    action: PayloadAction<Result<string>>,
  ) => {
    state.saveInspection = action.payload;
  },
  'QrCodeDetail': (
    state: RequestSliceType,
    action: PayloadAction<Result<QrCodeDetailModel>>,
  ) => {
    state.QrCodeDetail = action.payload;
  },
  'getInspectionList': (
    state: RequestSliceType,
    action: PayloadAction<Result<InspectionList>>,
  ) => {
    state.getInspectionList = action.payload;
  },
  // 'forceUpdate': (state:LoginSliceType, action:PayloadAction<Result<ForceUpdateModel>>) =>{
  //   state.forceUpdate = action.payload;
  // },
};
