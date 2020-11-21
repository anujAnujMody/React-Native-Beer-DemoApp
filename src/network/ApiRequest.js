import axios from 'axios';
import {utils} from '../utils/Utils';

const BASE_URL = 'https://api.punkapi.com/v2/';

const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
};
const RESPONSE = {
  status: STATUS,
  data: null,
  error: null,
};

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

callAPIs = async (apiMethodToCall) => {
  const response = {...(await apiMethodToCall)};
  if (response.status === 200) {
    RESPONSE.status = STATUS.SUCCESS;
    RESPONSE.data = response.data;
  } else {
    RESPONSE.status = STATUS.ERROR;
  }
  return RESPONSE;
};

getBeers = (page) => {
  return apiClient.get(`beers?page=${page}&per_page=20`);
};

export const apiRequest = {
  callAPIs,
  STATUS,
  getBeers,
};
