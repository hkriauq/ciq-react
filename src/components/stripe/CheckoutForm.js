import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './CheckoutForm.css';


function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentFlag, setPaymentFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //支払いステータス表示用
    setPaymentFlag(true);
    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // `paymentMethod`には決済に必要な情報が含まれています。
      // この情報をサーバーサイドに送信して、最終的な決済を行います。
      // 例えば：
      // fetch('/api/pay', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(paymentMethod),
      // });
    }
  };



  return (
    <form onSubmit={handleSubmit} className="form-container">
      <CardElement />
      <button className="form-container" type="submit" disabled={!stripe}>
        決済する
      </button>
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
      {
        paymentFlag && !errorMessage ? (
          <div>
            支払い完了
          </div>
        ) : null
      }
    </form>
  );
}

export default CheckoutForm;
