import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { FaFigma, FaRegHandPaper } from 'react-icons/fa'
import Modal from './Modal'

const Navbar2 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='nav-background'>

            <nav className='nav-container'>
                <div className='div-container'>
                    <div className='icon-container'>
                        <FaFigma className='figma1' />
                    </div>
                    <div className='hand-div'><FaRegHandPaper className='hand' /></div>
                    <p className='preview'>3-column preview card component(community)</p>
                    <button className='question-mark'>?</button>
                    <button onClick={() => setOpenModal(true)} className='log-in'>log in</button>
                    {openModal && <Modal closeModal={setOpenModal} />}
                </div>
            </nav>

        </div>
    )
}

export default Navbar2
