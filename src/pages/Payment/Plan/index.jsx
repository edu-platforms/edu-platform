import React, { useState } from "react";
import { Wrapper, Primary } from "@/UI";
import { history } from "src/libs/utils";
import { Select, Form } from "antd";
import { plans, timeOptions, dayOptions } from "src/libs/constants";

export default function Plan() {
  const [level, setLevel] = useState(0);

  const onFinish = (values) => {
    localStorage.setItem("paymentType", plans[level].title);
    localStorage.setItem("paymentPrice", plans[level].price);
    console.log("Received values of form: ", values);
    history.push("/payment");
  };

  return (
    <>
      <div className="flex-center flex-col mb-10">
        <h2>Private 1:1 plan</h2>

        <p className="text-center">Start learning English with a private tutor today!</p>
      </div>

      <Form
        onFinish={onFinish}
        layout="vertical"
        className="grid xl:grid-cols-2 md:grid-cols-1 gap-5"
      >
        <Wrapper className="h-60">
          <h4 className="mb-5">Weekly agenta</h4>

          <Form.Item
            name="time"
            initialValue={0}
            rules={[{ required: true, message: "Please select minutes!" }]}
          >
            <Select options={timeOptions} />
          </Form.Item>

          <Form.Item
            name="days"
            initialValue={0}
            rules={[{ required: true, message: "Please select days!" }]}
          >
            <Select options={dayOptions} />
          </Form.Item>
        </Wrapper>

        <div>
          <Wrapper>
            <h4 className="mb-5">Pick a commitment level</h4>

            <ul>
              {plans.map(({ id, title, type, price, details }) => (
                <li
                  key={id}
                  className={`payment-label ${id === Number(level) ? "payment-label-active":null} flex-between`}
                  onClick={() => setLevel(id)}
                >
                  <div className="flex-col flex-start">
                    <h4>{title}</h4>
                    <p>{details}</p>
                  </div>
                  <p>
                    <span className="font-bold">${price}/</span>
                    {type}
                  </p>
                </li>
              ))}
            </ul>
          </Wrapper>

          <Primary submit className="w-full" style={{ marginTop: "1rem"}}>
            Select Plan
          </Primary>
        </div>
      </Form>
    </>
  );
}
