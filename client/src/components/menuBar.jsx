import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import 'rsuite/dist/styles/rsuite-default.css';
import './menuBar.scoped.scss'
import '../../public/LOGOFINAL.svg'
import SIDE from './sidebar.jsx'
import SearchBar from './searchbar.jsx'
import { useDispatch } from 'react-redux'
import { updateSearch } from '../actions/newsAPI'


const MenuBar = () => {

    const [hover, setHover] = useState("metascoop")
    const [sidebarOpen, onSetSidebarOpen] = useState(false)

    const collor = () => { setHover('metascoopHover') }
    const exit = () => { setHover('metascoop') }

    const MouseClick = (open) => { onSetSidebarOpen(true) }
    const MouseClick2 = (open) => { onSetSidebarOpen(true) }

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()



    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        dispatch(updateSearch(search))
        console.log(search)
    }


    return (
        <div>
            <SIDE sidebarOpen={sidebarOpen} onSetSidebarOpen={onSetSidebarOpen} />
            <div className="outerContainer">
                <div className="innerLeft">
                    <img src="LOGOFINAL.svg" alt="Kiwi standing on oval" className="logo" onMouseDown={MouseClick2} />
                    <h1 className={hover} onMouseEnter={collor} onMouseLeave={exit} onMouseDown={MouseClick}> METASCOOP</h1>
                </div>
                <div className="innerMiddle">
                    <div className="searchbar">
                        <SearchBar />
                    </div>
                    <form>
                        <div className="searchbar2">
                            <input type="text" placeholder="search" onChange={handleChange} />
                            <Link to={{ pathname: '/search' }} >
                                <span><button className="buttonSmall" type="submit"><FontAwesomeIcon icon={faSearch} size="1x" className="icons" /></button></span>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="innerRight">
                    <h1 className="item">login</h1>
                    <h1 className="item">Signup</h1>
                </div>
            </div>
        </div>
    )
}

export default MenuBar


