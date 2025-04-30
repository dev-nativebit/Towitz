import {HttpPost} from '@/Interfaces';
import {http, Result} from '@/core';
import {SAVE_PRODUCT} from '@/api/EndPoint';

export interface SaveProductApiParams {
  id: string;
  item_code: string;
  item_name: string;
  category: string;
}

class SaveProductApi implements HttpPost<string>{
  post = async (params: SaveProductApiParams,formData:FormData): Promise<Result<string>> => {
    const paramKeys = Object.keys(params);
    paramKeys.map(paramKey => {
      formData.append(
        paramKey,
        params[`${paramKey}` as keyof SaveProductApiParams],
      );
    });
    return http.post(SAVE_PRODUCT(), formData);
  };
}
export const saveProductApi = new SaveProductApi()
