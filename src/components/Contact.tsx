import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";

import AdbIcon from '@mui/icons-material/HeadsetMic';

import './css/ContactCSS.css';

const ContactForm =()=> {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("")

  const clickSubmit = () =>{
    console.log("送信Done")
    //POST処理

  }

  return (
    <div>

      <div className="FormC">
        <div className="CF">
          Contact Form
        </div>
        <div className="FormI">
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          このサイトに関する要望・問い合わせをご記入下さい
        </div>

        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <textarea {...register("request", { required: true, maxLength: 500 })} placeholder="Request" />
          <p>{data}</p>
        <input type="submit" onClick={clickSubmit}/>
        </form>
      </div>

    </div>
  );
}


export default ContactForm

