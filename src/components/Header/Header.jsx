import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import YorHome from './YorHome'
import X from '../../assets/XTime.png'

function Header() {
    const pathname = useLocation().pathname
    const val = {
        val: "幸せをつぶやこう",
        linkTo: "Happier"
    }
    const val2 = {
        val: "オヤジギャグ",
        linkTo: "/"
    }

    return (
        <div className='header'>
            <div className="headerWrapper">
                <img className='logo' src={X} />
                {pathname === "/" ?
                    <YorHome {...val} /> : <YorHome {...val2} />
                }

            </div>
        </div>
    )
}

export default Header