import React from 'react';
import Cards from '../Components/Cards';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import Judul1 from '../Components/Judul1';
import Judul2 from '../Components/Judul2';
import Software from '../Components/Software';
import tokopedia from '../Images/tokopedia.png'
import samsung from '../Images/samsung.png'
import gojek from '../Images/gojek.png'
import react from '../Images/react.png'
import tailwind from '../Images/tailwind.png'
import chakra from '../Images/chakra.png'
import bootstrap from '../Images/bootstrap.png'
import node from '../Images/node.png'
import mysql from '../Images/mysql.png'
import postman from '../Images/postman.webp'
import docker from '../Images/docker.webp'

function Landing() {
    return (
        <div id='home'>
            <div className="container m-auto pt-10">
                <Hero />
            </div>
            <div id='portofolio' className='bg-blue-100 '>
                <div className='container m-auto py-20 '>
                    <Judul1 />
                    <div className="flex justify-center gap-36 mt-10 flex-wrap px-3">
                        <Cards name="Tokopedia" link={tokopedia} isi="Cloning website Tokopedia menggunakan library React JS dan tailwind css" />
                        <Cards name="Samsung" link={samsung} isi="Cloning website Samsung menggunakan bootstrap 5" />
                        <Cards name="Gojek" link={gojek} isi="Cloning website Gojek menggunakan library React JS dan tailwind css" />
                        <Cards name="Tokopedia" link={tokopedia} isi="Cloning website Tokopedia menggunakan library React JS dan tailwind css" />
                        <Cards name="Samsung" link={samsung} isi="Cloning website Samsung menggunakan bootstrap 5" />
                        <Cards name="Gojek" link={gojek} isi="Cloning website Gojek menggunakan library React JS dan tailwind css" />

                    </div>
                </div>
            </div>
            <div id='skills' className="container m-auto py-20">
                <Judul2 />
                <div className="flex justify-center gap-36 mt-10 flex-wrap">
                    <Software name="React JS" link={react} />
                    <Software name="Tailwind" link={tailwind} />
                    <Software name="Chakra" link={chakra} />
                    <Software name="Bootstrap" link={bootstrap} />
                    <Software name="Node JS" link={node} />
                    <Software name="MySQL" link={mysql} />
                    <Software name="Postman" link={postman} />
                    <Software name="Docker" link={docker} />
                </div>
            </div>
            <div id='contact' className='bg-blue-100'>
                <div className='container m-auto py-20'>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Landing;