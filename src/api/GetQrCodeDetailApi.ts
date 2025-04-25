import {HttpPost, ResultCommonInterfaces} from '@/Interfaces';
import {http, Result} from '@/core';
import {GET_QRCODE_DETAIL} from '@/api/EndPoint';

export interface GetQrCodeDetailApiParams{
  qr_value:string
}

class GetQrCodeDetailApi implements HttpPost<ResultCommonInterfaces>{
  post = async (params: GetQrCodeDetailApiParams): Promise<Result<ResultCommonInterfaces>> => {
    const formData = new FormData();
    const paramKeys = Object.keys(params);
    paramKeys.map(paramKey => {
      formData.append(
        paramKey,
        params[`${paramKey}` as keyof GetQrCodeDetailApiParams],
      );
    });
    return http.post(GET_QRCODE_DETAIL(), formData);
  };
}

export const getQrCodeDetailApi = new GetQrCodeDetailApi()
