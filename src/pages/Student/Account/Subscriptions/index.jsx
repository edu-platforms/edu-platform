import React, { useState } from 'react'
import { Button } from 'antd';
import { useMedia } from "@/hooks";
import { arrowLeft } from "@/assets";
export const Subscriptions = () => {
    const [tab, setTab] = useState(1);
    const { isMobile } = useMedia();

    return (
        <div>
            {isMobile ? (
            <div className='flex-between'>
                <Button className='flex items-center justify-between h-10 pb-0 bg-white rounded-40'>
                    <img src={arrowLeft} alt="img" className='w-5 mr-2' />
                    <h3 className='font-bold'>Back</h3>
                </Button>
                <h3 className='font-bold'>Subscriptions</h3>
            </div>) : 
            (<h3 className='font-bold'>Subscriptions</h3>)}
            <div className='w-full border-b-2 border-gray-100 flex gap-x-6 my-5'>
                <div className={`cursor-pointer ${tab === 1 && "subs_active"}`} onClick={() => setTab(1)}>Previous</div>
                <div className={`cursor-pointer ${tab === 2 && "subs_active"}`} onClick={() => setTab(2)}>Current</div>
            </div>
            <div className='grid xl:grid-cols-3 md:grid-cols-1 gap-4 pb-16'>
                {tab == 1 ? (
                    <>
                        {[1, 2].map((item, key) => (
                            <div className='rounded-lg border bg-white text-center' key={key}>
                                <div className='flex-between p-4 bg-[#ECEEF1]'>
                                    <h3>Weekly</h3>
                                    <h3 className='text-green'>$29.00</h3>
                                </div>
                                <div className='px-3 pb-3'>
                                    <div className='flex-between border-b py-3'>
                                        <h3>Validity period</h3>
                                        <h3>March 17 to March 24</h3>
                                    </div>
                                    <div className='flex-between border-b py-3'>
                                        <h3>Debit / Credit card</h3>
                                        <h3>**** 7327</h3>
                                    </div>
                                    <div className='flex-between py-3'>
                                        <h3>Day left</h3>
                                        <h3>13 days</h3>
                                    </div>
                                    <Button type="primary" size="large" shape='round' className="bg-green w-full mt-2">Choose May 24 to May 31</Button>
                                </div>
                            </div>
                        )
                        )}
                    </>
                ) : (<>
                    <div className='rounded-lg border bg-white text-center'>
                        <div className='flex-between p-4 bg-[#ECEEF1]'>
                            <h3>Weekly</h3>
                            <h3 className='text-green'>$29.00</h3>
                        </div>
                        <div className='px-3 pb-3'>
                            <div className='flex-between border-b py-3'>
                                <h3>Validity period</h3>
                                <h3>March 17 to March 24</h3>
                            </div>
                            <div className='flex-between border-b py-3'>
                                <h3>Debit / Credit card</h3>
                                <h3>**** 7327</h3>
                            </div>
                            <div className='flex-between py-3'>
                                <h3>Day left</h3>
                                <h3>13 days</h3>
                            </div>
                            <Button type="primary" size="large" shape='round' className="bg-green w-full mt-2">Choose May 24 to May 31</Button>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    )
}
