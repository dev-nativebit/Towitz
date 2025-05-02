import {HttpPost, ResultCommonInterfaces} from '@/Interfaces';
import {http, Result} from '@/core';
import {DASHBOARD} from '@/api/EndPoint';

export interface DashboardApiParams {
  version_code: string;
}

class DashboardApi implements HttpPost<ResultCommonInterfaces>{
  post = async (params: DashboardApiParams): Promise<Result<ResultCommonInterfaces>> => {
    const formData = new FormData();
    const paramKeys = Object.keys(params);
    paramKeys.map(paramKey => {
      formData.append(
        paramKey,
        params[`${paramKey}` as keyof DashboardApiParams],
      );
    });
    return http.post(DASHBOARD(), formData);
  };
}

export const dashboardApi = new DashboardApi()
