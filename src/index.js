import jsonp from 'jsonp';
import { useState } from 'react';
import toQueryString from 'to-querystring';
import {
  STATUS_INITIAL,
  STATUS_SUCCESS,
  STATUS_ERROR,
  STATUS_LOADING
} from './constants.json';

const postFormData = data => {
  return 'TODO';
};

const BASE_URL = `https://<dc>.api.mailchimp.com/3.0`;

const getURL = url => url.replace('/post?', '/post-json?');

const isResponseIsError = response =>
  response.result !== 'success';

const getDefaultState = () => ({
  status: STATUS_INITIAL,
  message: null
});

export default function useMailchimp({ url }) {
  const [state, setState] = useState(getDefaultState);

  const reset = () => {
    setState(getDefaultState());
  };

  const subscribe = data => {
    const params = toQueryString(data);
    const requestURL = getURL(url) + '&' + params;
    setState({
      ...state,
      status: STATUS_LOADING
    });
    const requestOpts = {
      param: 'c'
    };
    const process = (err, response) => {
      if (err) {
        setState({
          status: STATUS_ERROR,
          message: err
        });
      } else if (isResponseIsError(response)) {
        setState({
          status: STATUS_ERROR,
          message: response.msg
        });
      } else {
        setState({
          status: STATUS_SUCCESS,
          message: response.msg
        });
      }
    };

    jsonp(requestURL, requestOpts, process);
  };

  return [state, subscribe, reset];
}
