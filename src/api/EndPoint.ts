export const BASE_URL = 'https://towitz.nbterp.com/api';

export const LOGIN = (): string => `${BASE_URL}/auth/check`;
export const LOGOUT = (): string => `${BASE_URL}/auth/logout`;
export const GET_REQUEST_LIST = (): string => `${BASE_URL}/request/getRequestList`;
export const REQUEST_APPROVE = (): string => `${BASE_URL}/request/approveRequest`;
export const GET_QRCODE_DETAIL = (): string => `${BASE_URL}/inspection/getQrCodeDetail`;
export const SAVE_INSPECTION = (): string => `${BASE_URL}/inspection/saveInspection`;
export const GET_INSPECTION_LIST = (): string => `${BASE_URL}/inspection/getInspectionList`;
