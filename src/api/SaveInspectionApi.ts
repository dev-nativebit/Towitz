import {HttpPost} from '@/Interfaces';
import {http, Result} from '@/core';
import { SAVE_INSPECTION} from '@/api/EndPoint';

export interface SaveInspectionApiParams {
  remark: string;
  reason: string;
  id: string;
  r_item_id: string;
}

class SaveInspectionApi implements HttpPost<string>{
  post = async (params: SaveInspectionApiParams): Promise<Result<string>> => {
    const formData = new FormData();
    const paramKeys = Object.keys(params);
    paramKeys.map(paramKey => {
      formData.append(
        paramKey,
        params[`${paramKey}` as keyof SaveInspectionApiParams],
      );
    });
    return http.post(SAVE_INSPECTION(), formData);
  };
}

export const saveInspectionApi = new SaveInspectionApi()
