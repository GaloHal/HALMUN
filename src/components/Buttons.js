import styles from './Buttons.module.css';

function Button(props) {
    return (
        <button className={`${styles['button']} ${props.className}`}>
            {props.children}
        </button>
    );
}

function LinkButton({
    to,
    children,
    className = '',
    target = '_self',
}) {
    return (
        <a href={to} target={target}>
            <Button className={className}>{children}</Button>
        </a>
    )
}


export { Button, LinkButton };