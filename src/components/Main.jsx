import HeroMobile from '../assets/image-hero-mobile.png'
import HeroDesktop from '../assets/image-hero-desktop.png'
import Audiophile from '../assets/client-audiophile.svg'
import Databiz from '../assets/client-databiz.svg'
import Maker from '../assets/client-maker.svg'
import Meet from '../assets/client-meet.svg'

const Main = () => {
    return (
        <main className='main'>
            <div className='hero-container'>
                <picture>
                    <source media="(min-width:638px )" srcSet={HeroDesktop} />
                    <img src={HeroMobile} alt="hero" />
                </picture>
            </div>
            <div className='main-content'>
                <h1 className='main-title'>Make remote work</h1>
                <p className='main-text'>Get Your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <a className='main-button' href="#">Learn more</a>
                <div className='main-client'>
                    <img src={Databiz} alt="" />
                    <img src={Audiophile} alt="" />
                    <img src={Meet} alt="" />
                    <img src={Maker} alt="" />
                </div>
            </div>

        </main>
    )
}

export default Main
