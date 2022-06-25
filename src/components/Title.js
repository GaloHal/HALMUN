import './Title.css';

function addDescription(props) {
    if ('desc' in props) {
        return (
            <span className={props.desc.className}>
                {props.desc.text}
            </span>
        );
    }
    return (<></>);
}

function Title(props) {
    return (
        <div className='title'>
            <span className={props.className}>{props.text}</span>
            <hr></hr>
            {addDescription(props)}
        </div>
    );
}

export default Title;