import Navigation from './Navigation'
import Logo from '../assets/logo.svg'
import Menu from '../assets/icon-menu.svg'
import { useState } from 'react'

const Header = () => {
    const [navActive, setNavActive] = useState(false)

    const handleMenu = ()=>{
        if(!navActive){
            setNavActive(true)
            return
        }
        setNavActive(false)
    }
    return (
        <>
            <div 
                className={`${navActive ? 'mask active' : 'mask'}`}
                onClick={handleMenu}
                
            >
            </div>
            <header className='header'>
                <img className='logo' src={Logo} alt="" />
                <img 
                    className='menu' 
                    src={Menu} alt="" 
                    onClick={handleMenu}    
                />
                <Navigation
                    navActive={navActive}
                    handleMenu={handleMenu}
                />
            </header>
        </>
    )
}

export default Header
