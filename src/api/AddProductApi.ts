import {HttpPost, ResultCommonInterfaces} from '@/Interfaces';
import {http, Result} from '@/core';
import {ADD_PRODUCT} from '@/api/EndPoint';

class AddProductApi implements HttpPost<ResultCommonInterfaces>{
  post = async (): Promise<Result<ResultCommonInterfaces>> => {
    return http.post(ADD_PRODUCT());
  };
}
export const addProductApi = new AddProductApi()
