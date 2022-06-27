import { Link } from 'react-router-dom';

import Button from './Button';
import styles  from './Committe.module.css';


function Committe(props) {
    return (
        <div className={styles['committe-container']}>
            <img src={props.imgSrc} alt={props.title}/>

            <div className={styles['committe-content']}>
                <span className='h2'>{props.title}</span>
                <span className='p'>{props.desc}</span>

                <Link to={props.link} className={styles['learn-more']}>
                    <Button
                        className={styles['learn-more-button']} 
                        textClassName='p' 
                        text='Learn More'/>
                </Link>
            </div>
        </div>
    );
}

export default Committe;