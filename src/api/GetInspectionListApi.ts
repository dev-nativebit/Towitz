import {HttpPost, ResultCommonInterfaces} from '@/Interfaces';
import {http, Result} from '@/core';
import {GET_INSPECTION_LIST} from '@/api/EndPoint';

export interface GetInspectionListApiParams {
  start: string;
  length: string;
  search: string;
}

class GetInspectionListApi implements HttpPost<ResultCommonInterfaces>{
  post = async (params: GetInspectionListApiParams): Promise<Result<ResultCommonInterfaces>> => {
    const formData = new FormData();
    const paramKeys = Object.keys(params);
    paramKeys.map(paramKey => {
      formData.append(
        paramKey,
        params[`${paramKey}` as keyof GetInspectionListApiParams],
      );
    });
    return http.post(GET_INSPECTION_LIST(), formData);
  };
}

export const getInspectionListApi = new GetInspectionListApi()
