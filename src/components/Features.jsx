import ArrowDown from '../assets/icon-arrow-down.svg'
import ArrowUp from '../assets/icon-arrow-up.svg'
import Todo from '../assets/icon-todo.svg'
import Calendar from '../assets/icon-calendar.svg'
import Reminders from '../assets/icon-reminders.svg'
import Planning from '../assets/icon-planning.svg'

const Features = ({featuresMenu, handleFeaturesList}) => {
    return (
        <ul className='list'>
            <div className='list-title' onClick={handleFeaturesList}>
                <span>Features</span>
                {featuresMenu ? <img src={ArrowUp} alt="" /> : <img src={ArrowDown} alt="" />}
            </div>
            <div className={`${featuresMenu ? 'list-container features active' : 'list-container features' }`}>
                <li className='list-item'>
                    <img src={Todo} alt="todo list" />
                    <a href="#">Todo List</a>
                </li>
                <li className='list-item'>
                    <img src={Calendar} alt="todo list" />
                    <a href="#">Calendar</a>
                </li>
                <li className='list-item'>
                    <img src={Reminders} alt="todo list" />
                    <a href="#">Reminders</a>
                </li>
                <li className='list-item'>
                    <img src={Planning} alt="todo list" />
                    <a href="#">Planning</a>
                </li>
            </div>
        </ul>
    )
}

export default Features
