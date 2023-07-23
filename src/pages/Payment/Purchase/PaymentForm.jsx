import React, { useState } from "react";

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "black" },
      "::placeholder": { color: "black" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "black",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardNumberElement,
        CardCvcElement,
        CardExpiryElement
      ),
    });

    const { id } = paymentMethod;
    const data = {
      amount: 1000,
      id,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("access-token")
        )}`,
      },
    };

    const url = "https://single.uz/api/payment";

    try {
      const response = await axios.post(url, data, config);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardNumberElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardExpiryElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardCvcElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          {/* <PaymentElement /> */}
          <button>Pay</button>
        </form>
      ) : (
        <div className="payment-success">
          <h2>Payment successful</h2>
          <h3 className="Thank-you">Thank you for your patronage</h3>
        </div>
      )}
    </>
  );
}
