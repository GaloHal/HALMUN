import styles from './Title.module.css';

function Title({
    text,
    desc,
    textSize = 'h1',
}) {
    return (
        <div className={styles['title']}>
            <span className={textSize}>{text}</span>

            <hr/>

            {
                desc ? (
                    <span className={`p ${styles['desc']}`}> {desc} </span>
                ): null
            }
        </div>
    );
}

export default Title;