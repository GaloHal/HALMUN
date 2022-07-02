import styles from './Buttons.module.css';

function LinkButton({
    to,
    children,
    className = '',
    target = '_self',
}) {
    return (
        <a href={to} target={target}>
            <button className={`${styles['button']} ${className}`}>
                {children}
            </button>
        </a>
    )
}


export default LinkButton;