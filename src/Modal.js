import React, { useState } from 'react'
import Axios from 'axios';
import google from './google.png'

const Modal = ({ closeModal }) => {
    const url = ""
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            email: data.email,
            password: data.password
        })
            .then(res => {
                console.log(res.data);
            })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (

        <div className="modalBackground">
            <div className="modalContainer">
                <form onSubmit={(e) => submit(e)}>
                    <div className="closeBtn"><button onClick={() => closeModal(false)}>
                        X </button></div>
                    <div className="title">
                        <h2>Create an account to collaborate on "3-column
                            preview card com..."
                        </h2>
                    </div>
                    <div className="body">
                        <a href="https://www.google.com" target='_blank' rel='noopener noreferrer'>
                            <button onClick={handleClick} className="email-btn1">
                                <img src={google} alt="" />
                                Continue with Google
                            </button>
                        </a>
                        <p>or</p>

                        <input onChange={(e) => handle(e)} id='email' value={data.email} placeholder="Email" type="email" className="email-btn"></input>
                        <div><input onChange={(e) => handle(e)} id='password' value={data.password} placeholder='password' type="password" className="email-btn"></input></div>
                    </div>
                    <div className="">
                        <button onSubmit={(e) => submit(e)} className="footer" type="submit">Create account</button>
                    </div>
                </form>
            </div>

        </div >
    )
}

export default Modal
