import React from 'react'
import {Button} from "antd";
import {BsArrowLeft} from "react-icons/bs";
import {finish} from "@/assets/index.js";
import { history } from "@/libs/utils/index.js";
export default function Finish({next}) {
    const onFinish=()=>{
        history.push("/");
    }
    return (
    <div className='flex flex-col items-center w-2/4 px-12 py-10'>
        <img src={finish} alt="Finish img" />
        <h2 className='text-center my-10 font-medium'>
        Your information has been sent! We check your information. 
        This may take several hours. 
        We will be answered you soon! Thank you for being with us
        </h2>
        <Button onClick={onFinish} className='bg-green h-14 w-2/4 flex items-center justify-center' type='primary'>
            <BsArrowLeft className='mr-2 text-lg'/>
            <p>Back to home page</p>
            </Button>
    </div>
    )
}
