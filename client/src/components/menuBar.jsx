import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'


// import { Nav, Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './menuBar.scooped.scss'
import '../../public/LOGOFINAL.svg'

const MenuBar = () => {
    return (
        <div className="outerContainer">
            <div className="innerLeft">
                <img src="LOGOFINAL.svg" alt="Kiwi standing on oval" className="logo" />
                <h1 className="metascoop">METASCOOP</h1>
            </div>
            <div className="innerRight">
                <h1 className="item">login</h1>
                <h1 className="item">Signup</h1>
                <span className="icon">
                    <FontAwesomeIcon icon={faUser} size="3x" className="icons" />
                </span>
                <span className="icon">
                    <FontAwesomeIcon icon={faSearch} size="3x" className="icons" />
                </span>
            </div>
        </div>
    )
}

export default MenuBar