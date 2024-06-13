import Features from './Features'
import Company from './Company'
import Careers from './Careers'
import About from './About'
import Login from './Login'
import Close from '../assets/icon-close-menu.svg'
import { useState } from 'react'


const Navigation = ({navActive, handleMenu}) => {

    const [featuresMenu, setFeaturesMenu] = useState(false)
    const [companyMenu, setCompanyMenu] = useState(false)

    const handleFeaturesList = () => {
        if(!featuresMenu){
            setFeaturesMenu(true)
            return
        }
        setFeaturesMenu(false)
    }
    const handleCompanyList = () => {
        if(!companyMenu){
            setCompanyMenu(true)
            return
        }
        setCompanyMenu(false)
    }
    
    return (
        <nav className={`${navActive ? 'nav active' : 'nav'}`}>
            <div className='list-wrap'>
                <img 
                    className="nav-close" 
                    src={Close} alt="close menu"
                    onClick={handleMenu}
                />
                <Features
                    featuresMenu={featuresMenu}
                    handleFeaturesList={handleFeaturesList}
                />
                <Company
                    companyMenu={companyMenu}
                    handleCompanyList={handleCompanyList}
                />
                <Careers/>
                <About/>
            </div>
            <Login/>
        </nav>
    )
}

export default Navigation
