import { useEffect } from 'react';

import styles from './SponsorsPage.module.css';

import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Title from '../../components/Title';

import { sponsorsData } from '../../schemas/sponsorsData';

function SponsorsPage(props) {
    useEffect(() => {document.title = props.title || "" })

    return (
        <>
            <Navbar />
            <Header
                backgroundImgSrc='/images/background.jpeg'
                title={<Title text='Our Sponsors' />}
                type='header-content--middle'
                desc='We would like to thank the following sponsors for their generous support of HALMUN 2022. If you or your organization is interested in a partnership, please reach out to halmunstaff@gmail.com'
            />

            <main>
                <div className='content content--middle'>
                    <Title 
                        text='Some of Our Partners'
                        textSize='h2'
                    />

                    <ul className='sponsor-grid'>
                        {
                            sponsorsData.map((data, _key) => {
                                return (
                                    <li className='sponsor-item'>
                                        <img src={data['src']} alt={data['name']} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default SponsorsPage;