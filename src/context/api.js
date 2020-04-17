import axios from 'axios';
import queryString from 'query-string';

import { API_BASE_URL, API_TIMEOUT } from './constants';
import { buildPathParams } from './utils';

import ApiError from './ApiError';
import ApiTimeoutError from './ApiTimeoutError';

import {
  buildAnyRequest,
} from './requests';

const END_POINTS = {
  ENDPOINT: '/endpoint',
};

class Api {
  constructor(baseURL) {
    this.baseURL = baseURL || API_BASE_URL;
  }

  static handleError = error => {
    if (error.code === 'ERROR_TYPE') {
      throw new ApiTimeoutError(error.message);
    }

    throw new ApiError(error.message, error.response.status);
  };

  static get = url =>
    axios
      .get(url, { timeout: API_TIMEOUT })
      .then(res => res)
      .catch(error => Api.handleError(error));

  static post = (url, data) =>
    axios
      .post(url, data, { timeout: API_TIMEOUT })
      .then(res => res)
      .catch(error => Api.handleError(error));


  getFromApi(params) {
    const queryParams = buildAnyRequest(params);
    return Api.put(`${this.baseURL}${END_POINTS.ENDPOINT}${queryParams}`);
  }

}

export default Api;
