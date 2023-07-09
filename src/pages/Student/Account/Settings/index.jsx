import React, { useContext, useState } from 'react'
import { SettingsMobile } from './Mobile'
import { Wrapper } from '@/UI'
import { Button } from 'antd'
import { useMedia } from 'src/libs/hooks'
import { ModalContext } from '@/context'
import { AccountModal } from '@/components'

export const StudentSettings = () => {
  const { isMobile } = useMedia()
  const { show, close } = useContext(ModalContext)
  const [item, setItem] = useState('')
  function handleShow(item) {
    show()
    setItem(item)
  }
  const settings = [
    {
      title: 'First name',
      value: 'Saidalixan',
    },
    {
      title: 'Last name',
      value: 'Sobirov',
    },
    {
      title: 'Email',
      value: 'Saidalixon0101@gmail.com',
    },
    {
      title: 'Password',
      value: '*******',
    },
  ]
  return (
    <>
      {isMobile ? (
        <SettingsMobile show={show} settings={settings} handleShow={handleShow} />
      ) : (
        <>
          <h3 className="font-bold">Account settings</h3>
          {settings.map((item, key) => (
            <Wrapper className="my-5 !py-5 px-6 rounded-lg flex justify-between" key={key}>
              <h3>{item.title}</h3>
              <div className="w-9/12 flex justify-between">
                <h3 className="text-green">{item.value}</h3>
                <Button type="primary" className="bg-green pb-0" onClick={() => handleShow(item)}>
                  Edit
                </Button>
              </div>
            </Wrapper>
          ))}
        </>
      )}
      <AccountModal close={close} item={item} />
    </>
  )
}
