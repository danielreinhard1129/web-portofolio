import React from 'react';
import foto from '../Images/foto.webp';



function Hero() {
    return (
        <div className='md:flex justify-between my-6'>
            <div className='md:order-2 md:w-1/2'>
                <img class=" w-96 h-auto object-cover rounded-xl m-auto md:rounded-full md:w-screen" src={foto} alt="image description" />
            </div>
            <div className='text-center mx-5 my-5 md:text-left md:w-1/2'>
                <div className='xl:mt-40'>
                    <p class="mb-6 text-lg text-black font-semibold lg:text-2xl">Hi, my name is</p>
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-8xl">Daniel Reinhard</h1>
                    <p class="mb-6 text-lg font-normal lg:text-xl">I'm a Web Developer from Jakarta, Indonesia with rock-solid experience in building complex applications with modern technologies. View my portofolio or send me an email at<span className='font-semibold'> "danielreinhard1129@gmail.com".</span></p>
                    <a href="#portofolio" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                        Learn more
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>



        // <div className='flex justify-center items-center pb-20'>
        //     <div className=' w-3/5'>
        //         <div className='text-4xl font-normal'>PROFILE</div>
        //         <div className='text-9xl text-blue-700 pb-8 font-bold'>Daniel<br />Reinhard</div>
        //         <div className='my-3 text-lg pb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure expedita, <br /> aspernatur reprehenderit, br est commodi sit nobis, harum atque eaque <br /> eligendi perspiciatis quasi quaerat provident illo in cumque optio. <br /> Molestiae, consequatur? eligendi perspiciatis quasi quaerat provident illo <br /> in cumque optio.</div>
        //         <div><button type="button" class="text-white bg-blue-600 font-medium rounded-lg text-lg px-10 py-3 text-center inline-flex items-center ">
        //             Learn More
        //             <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //         </button></div>
        //     </div>
        //     <div className='drop-shadow-2xl w-2/5'>
        //         <Foto1 />
        //     </div>
        // </div>
    );
}

export default Hero;