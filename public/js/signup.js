/* eslint-disable */
import '@babel/polyfill';
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'You have signed up successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    console.log(error);
    showAlert(error.response.data.message);
  }
};
