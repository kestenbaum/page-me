import { api } from '../../instance';

export type GetSkillsConfig = AxiosRequestConfig;
export const getSkills = async (requestConfig?: GetSkillsConfig) =>
  api.get<GetSkills>('/skills', requestConfig?.config);
