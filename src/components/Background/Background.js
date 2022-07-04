import styles from './Background.module.css';

function Background(props) {
    return (
        <div 
            className={styles['background-image']}
            alt='Background'
            style={{
                backgroundImage: `url(${props.imgSrc})`
            }}    
        /> 
    );
}


export default Background;