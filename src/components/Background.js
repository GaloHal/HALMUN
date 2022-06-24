import backgroundImage from '../images/background.jpeg';
import './Background.css';


function Background() {
    return (
        <img src={backgroundImage} className='background-image' alt='Background'/> 
    );
}


export default Background;