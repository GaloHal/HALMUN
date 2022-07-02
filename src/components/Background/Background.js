import './Background.css';

function Background(props) {
    return (
        <div 
            className='background-image' 
            alt='Background'
            style={{
                backgroundImage: `url(${props.imgSrc})`
            }}    
        /> 
    );
}


export default Background;