/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
// const Stripe = require('stripe');

export const bookTour = async tourID => {
  // 1) Get checkout session from api
  try {
    const stripe = Stripe(
      'pk_test_51OfKNREnxUPnA9RSI2W6D8qZrDufc5wuLqf58iRhBz4yLuUVQFzkvSEobULntfuMK14FGgqcL28Wgf5Ib3xmsTn000JhNfE1Hk'
    );
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourID}`
    );
    window.location.assign(session.data.session.url);
    console.log(session);
    // 2) Create checkout form and charge credit card
    // await stripe.redirectToCheckout({
    //   session: session.data.session.id
    // });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
