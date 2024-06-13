import ArrowDown from '../assets/icon-arrow-down.svg'
import ArrowUp from '../assets/icon-arrow-up.svg'

const Company = ({companyMenu, handleCompanyList}) => {
    return (
        <ul className='list'>
            <div className='list-title' onClick={handleCompanyList}>
                <span>Company</span>
                {companyMenu ? <img src={ArrowUp} alt="" /> : <img src={ArrowDown} alt="" />}
            </div>
            <div className={`${companyMenu ? 'list-container company active' : 'list-container company'}`}>
                <li className='list-item'>
                    <a href="#">History</a>
                </li>
                <li className='list-item'>
                    <a href="#">Our Team</a>
                </li>
                <li className='list-item'>
                    <a href="#">Blog</a>
                </li>
            </div>
        </ul>
    )
}

export default Company
