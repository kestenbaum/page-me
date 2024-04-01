import axios from 'axios';
import { IGetData } from '../types';

class WorksServices {
  private URL = 'https://kestenbaum-page-me-api.onrender.com/api/works';

  getWorks = async () => {
    try {
      const response = await axios.get<IGetData>(this.URL);
      return response.data?.data;
    } catch (e) {
      console.error(e);
    }
  };
}

export const worksServices = new WorksServices();
