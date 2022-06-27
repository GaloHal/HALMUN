import { Link } from 'react-router-dom';

import Button from './Button';
import './Committe.css';


function Committe(props) {
    return (
        <div className='committe-container'>
            <img src={props.imgSrc} alt={props.title}/>

            <div className='committe-content'>
                <span className='h2'>{props.title}</span>
                <span className='p'>{props.desc}</span>

                <Link to={props.link} replace>
                    <Button className='p' text='Learn More'/>
                </Link>
            </div>
        </div>
    );
}

export default Committe;