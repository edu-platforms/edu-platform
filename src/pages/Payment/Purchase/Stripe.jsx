import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLUIC_KEY = `pk_test_51NKzg3Iiw3li9RDFshxgdwk5lsc5fSX6Aj50aAcoxyu068TTQI997nHSYWkCOLqmbc7IrSc1qKAKXtHTSmQQKuBa00DGoEJGvp`;

const stripePromise = loadStripe(PUBLUIC_KEY);

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

export default Stripe;
