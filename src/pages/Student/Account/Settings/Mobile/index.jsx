import React from 'react'
import { arrowLeft, arrowRight } from "@/assets";
import { Wrapper } from "@/UI";
import { Button } from 'antd';

export const SettingsMobile = ({ show, settings, handleShow }) => {
    return (
        <>
            <div className='flex-between items-center'>
                <Button className='flex items-center justify-between h-10 pb-0 bg-white rounded-40'>
                    <img src={arrowLeft} alt="img" className='w-5 mr-2' />
                    <h3 className='font-bold'>Back</h3>
                </Button>
                <h3 className='font-bold'>Account settings</h3>
            </div>
            <div className='my-8 pb-16'>
                {settings.map((item, key) =>
                    <Wrapper className="my-3 !py-5 px-6 rounded-lg flex justify-between items-center" onClick={()=>handleShow(item)} key={key}>
                        <div>
                            <h3>{item.title}</h3>
                            <h3 className='text-gray-400'>{item.value}</h3>
                        </div>
                        <img src={arrowRight} alt="arrow-right" />
                    </Wrapper>
                )}
            </div>
        </>
    )
}
