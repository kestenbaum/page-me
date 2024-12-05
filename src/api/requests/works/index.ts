import { api } from "../../instance";
import { AxiosRequestConfig } from 'axios';

export type GetWorksConfig = {
    config?: AxiosRequestConfig;
};
export const getWorks = async (requestConfig?: GetWorksConfig) =>
    api.get<Card[]>('/works', requestConfig?.config);
