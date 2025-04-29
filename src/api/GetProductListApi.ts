import {HttpPost, ResultCommonInterfaces} from '@/Interfaces';
import {http, Result} from '@/core';
import {GET_PRODUCT_LIST} from '@/api/EndPoint';

export interface GetProductListApiParams {}

class GetProductListApi implements HttpPost<ResultCommonInterfaces>{
  post = async (params: GetProductListApiParams): Promise<Result<ResultCommonInterfaces>> => {
    const formData = new FormData();
    const paramKeys = Object.keys(params);
    paramKeys.map(paramKey => {
      formData.append(
        paramKey,
        params[`${paramKey}` as keyof GetProductListApiParams],
      );
    });
    return http.post(GET_PRODUCT_LIST(), formData);
  };
}

export const getProductListApi = new GetProductListApi()
