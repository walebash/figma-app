import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFigma, FaRegHandPaper, FaCaretDown } from 'react-icons/fa'
import Modal from './Modal'
import { menu } from './menuItems'

const Navbar2 = () => {
    const [dropDown, setDropDown] = useState(false);
    const openDropDown = () => setDropDown(!dropDown);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const onMenuClicked = value => () => {
        setSelectedMenu(value);
        setDropDown(false);
        console.log(selectedMenu)
    }
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='nav-background'>

            <nav className='nav-container'>
                <div className='div-container'>
                    <div onClick={openDropDown} className='icon-container'>
                        <FaFigma className='figma1' /><FaCaretDown className='caret' />
                        {dropDown && (
                            <ul className='dropdown' >
                                {menu.map((drop) => {
                                    const { id, item } = drop;
                                    return (
                                        <li className='menulist' key={drop.id} onClick={onMenuClicked(drop)}>
                                            {drop.item}</li>
                                    )
                                })}
                            </ul>
                        )}

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
