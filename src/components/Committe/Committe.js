import LinkButton from '../LinkButton';
import styles from './Committe.module.css';


function Comitte(props) {
    return (
        <div className={styles['committe-container']}>
            <img src={props.imgSrc} alt={props.title}/>

            <div className={styles['committe-content']}>
                <span className='h2'>{props.title}</span>
                <span className='p'>{props.desc}</span>

                <div className={styles['buttons-container']}>
                    <LinkButton 
                        to={props.link}
                        className={styles['learn-more-button']}
                    >
                        Learn More
                    </LinkButton>

                    <LinkButton 
                        to={props.bgLink}
                        className={styles['learn-more-button']}
                    >
                        Background Guide
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}

export default Comitte;