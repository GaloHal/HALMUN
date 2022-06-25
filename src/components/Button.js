import './Button.css';

function Button(props) {
    return (
        <button className='button'>
            <span className={props.className}>{props.text}</span>
        </button>
    );
}

export default Button;