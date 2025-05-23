import {Result} from '@/core';
import {InspectionList, QrCodeDetailModel, RequestList} from '@/model';
import {createSlice} from '@reduxjs/toolkit';
import { REQUEST } from "@/redux/slice/Types";
import RequestReducer from "@/redux/reducer/RequestReducer";

export interface RequestSliceType {
  requestList?: Result<RequestList>;
  approveRequest?: Result<string>;
  saveInspection?: Result<string>;
  QrCodeDetail?: Result<QrCodeDetailModel>;
  getInspectionList?: Result<InspectionList>;
  // forceUpdate?:Result<ForceUpdateModel>
}

export const initialState: RequestSliceType = {
  requestList: undefined,
  approveRequest: undefined,
  QrCodeDetail: undefined,
  // forceUpdate:undefined,d,
};

const RequestSlice = createSlice({
  name: REQUEST,
  initialState: initialState,
  reducers: RequestReducer,
});

export const {actions: requestActions, reducer: requestReducer} = RequestSlice;
