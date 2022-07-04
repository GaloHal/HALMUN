// import styles from './InformationPage.module.css';
import { useEffect } from 'react';

function InformationPage(props) {
    useEffect(() => {document.title = props.title || "" })

    return (
        <>
            
        </>
    );
}

export default InformationPage;