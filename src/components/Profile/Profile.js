import styles from './Profile.module.css';

function Profile({
    position,
    name,
    imageSrc,
    description
}) {
    return (
        <div className={styles['profile-container']}>
            <span className={`p ${styles['title']}`}>{position}</span>

            <span className={`p bold ${styles['title']}`}>{name}</span>

            <img src={imageSrc} alt={name}/>

            <span className='p'>{description}</span>
        </div>
    );
}


export default Profile;