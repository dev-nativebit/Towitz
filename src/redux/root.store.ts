import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {ClearReduxThunkCall, LoginAgainThunkCall, LoginThunkCall} from '@/redux/thunk/LoginThunk';
import {loginReducer} from '@/redux/slice/LoginSlice';
import {
  approveRequestApiThunkCall,
  getRequestListApiThunkCall,
  qrCodeDetailApiThunkCall, saveInspectionApiThunkCall,
} from '@/redux/thunk/RequestThunk';
import { requestReducer } from "@/redux/slice/RequestSlice";

export const actions = {
  LoginThunkCallActions: LoginThunkCall,
  LoginAgainThunkCallActions: LoginAgainThunkCall,
  getRequestListApiThunkCallActions: getRequestListApiThunkCall,
  approveRequestApiThunkCallActions: approveRequestApiThunkCall,
  ClearReduxThunkCallActions: ClearReduxThunkCall,
  qrCodeDetailApiThunkCallActions: qrCodeDetailApiThunkCall,
  saveInspectionApiThunkCallActions: saveInspectionApiThunkCall,

};

export const reducers = {
  loginDetail: loginReducer,
  requestDetail: requestReducer,
};

export const store = configureStore({
  reducer: reducers,
  enhancers: undefined,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
