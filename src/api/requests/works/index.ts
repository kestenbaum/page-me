import { api } from '../../instance';

export type GetWorksConfig = AxiosRequestConfig;
export const getWorks = async (requestConfig?: GetWorksConfig) =>
  api.get<GetCards>('/works', requestConfig?.config);
