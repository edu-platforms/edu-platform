import { Fragment } from "react";
import { Card } from "antd";
import Menu from "./Menu";
import Text from "./Text";
export default function Chat() {
  const items = [
    { label: "darren", key: 1 },
    { label: "darren2", key: 2 },
    { label: "darren3", key: 3 },
    { label: "darren4", key: 4 },
    { label: "darren5", key: 5 },
    { label: "darren6", key: 6 },
  ];
  return (
    <Fragment>
      <Card className="chat-menu">
        <Text />
        {items?.map((el) => (
          <Menu
            label={el.label}
            key={el.key}
            img={
              "https://fastly.picsum.photos/id/202/200/200.jpg?hmac=eGzhW5P2k0gzjc76Tk5T9lOfvn30h3YHuw5jGnBUY4Y"
            }
          />
        ))}
      </Card>
    </Fragment>
  );
}
