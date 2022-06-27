import './Title.css';

function addDescription(props) {
    if ('desc' in props) {
        return (
            <span className={'desc ' + props.desc.className}>
                {props.desc.text}
            </span>
        );
    }
    return (<></>);
}

function Title(props) {
    return (
        <div className='title'>
            <span className={props.textClassName}>{props.text}</span>
            <hr className={props.hrClassName}></hr>
            {addDescription(props)}
        </div>
    );
}

export default Title;