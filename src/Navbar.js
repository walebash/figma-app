import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFigma, FaGoogle } from 'react-icons/fa'
import Modal from './Modal'

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <nav className="nav-bar">
            <div className="container">
                <FaFigma className="figma" />
                <p><b>Welcome to Figma app!</b> Create an account to edit an collaborate on this file</p>
                <a href="https://www.google.com" target='_blank' rel='noopener noreferrer'>
                    <button onClick={handleClick} className="btn-google">
                        <FaGoogle className="google-icon" />
                        continue with google
                    </button>
                </a>
                <button type="button"
                    className="btn-form"
                    onClick={() => { setOpenModal(true); }}>
                    Sign up with email
                </button>

                {openModal && <Modal closeModal={setOpenModal} />}

            </div>
        </nav>

    )
}

export default Navbar
