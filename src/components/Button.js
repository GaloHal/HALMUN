import './Button.css';

function Button(props) {
    return (
        <button className={'button ' + props.className}>
            <span className={props.textClassName}>{props.text}</span>
        </button>
    );
}

export default Button;