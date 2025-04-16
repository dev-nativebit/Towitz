import {HttpPost} from '@/Interfaces';
import {http, Result} from '@/core';
import {REQUEST_APPROVE} from '@/api/EndPoint';

export interface ApproveRequestApiParams {
  id: string;
  req_status: string;
  reason: string;
}

class ApproveRequestApi implements HttpPost<string>{
  post = async (params: ApproveRequestApiParams): Promise<Result<string>> => {
    const formData = new FormData();
    const paramKeys = Object.keys(params);
    paramKeys.map(paramKey => {
      formData.append(
        paramKey,
        params[`${paramKey}` as keyof ApproveRequestApiParams],
      );
    });
    return http.post(REQUEST_APPROVE(), formData);
  };
}

export const approveRequestApi = new ApproveRequestApi()
