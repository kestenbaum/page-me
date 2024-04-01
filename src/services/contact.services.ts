import axios from 'axios';
import { IGetData } from '../types';

class ContactServices {
  private URL = 'https://kestenbaum-page-me-api.onrender.com/api';

  getContact = async () => {
    try {
      const response = await axios.get<IGetData>(this.URL + '/contacts');
      return response.data?.data;
    } catch (e) {
      console.error(e);
    }
  };
}

export const contactServices = new ContactServices();
