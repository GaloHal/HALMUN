import { Link } from 'react-router-dom';

import { LinkButton } from './Buttons';
import styles from './Committe.module.css';


function Committe(props) {
    return (
        <div className={styles['committe-container']}>
            <img src={props.imgSrc} alt={props.title}/>

            <div className={styles['committe-content']}>
                <span className='h2'>{props.title}</span>
                <span className='p'>{props.desc}</span>

                <LinkButton 
                    to={props.link}
                    className={styles['learn-more-button']}
                >
                    Learn More
                </LinkButton>
            </div>
        </div>
    );
}

export default Committe;