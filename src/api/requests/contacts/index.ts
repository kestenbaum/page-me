import { api } from '../../instance';

export type GetContactsConfig = AxiosRequestConfig;
export const getContacts = async (requestConfig?: GetContactsConfig) =>
  api.get<GetContacts>('/contacts', requestConfig?.config);
