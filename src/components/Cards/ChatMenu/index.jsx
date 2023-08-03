import { Fragment, useEffect, useState } from 'react'
import { Card } from 'antd'
import Menu from './Menu'
import Text from './Text'
import axios from 'axios'
export default function Chat() {
  const [teacher, setTeacher] = useState([])
  useEffect(async () => {
    const { data } = await axios.get(`https://single.uz/api/user/success/tutor?page=1&limit=10`)
    setTeacher(data.data)
  }, [])

  const hendleClick = () => {}
  return (
    <Fragment>
      <div className="chat-menu">
        <Text />
        {teacher?.map((el, i) => (
          <Menu
            label={el.firstname}
            key={i}
            img={
              'https://fastly.picsum.photos/id/202/200/200.jpg?hmac=eGzhW5P2k0gzjc76Tk5T9lOfvn30h3YHuw5jGnBUY4Y'
            }
            change={hendleClick}
          />
        ))}
      </div>
    </Fragment>
  )
}
