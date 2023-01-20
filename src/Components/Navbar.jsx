import React from 'react';
import logo from '../Images/logo.png'

function Navbar() {
    return (
        <nav class="bg-white border-gray-200 pl-5 pr-2 sm:px-4 py-2.5 rounded fixed w-full top-0 left-0">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#home" class="flex items-center">
                    <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap ">Daniel Reinhard</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <a href="#home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#portofolio" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Portofolio</a>
                        </li>
                        <li>
                            <a href="#skills" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Skills</a>
                        </li>
                        <li>
                            <a href="#contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>





        // <div className=' '>
        //     <div className="container mt-5 px-2 py-8 bg-blue-500 flex place-items-center justify-between m-auto rounded-full shadow-xl">
        //         <div className='ml-5 text-white'>
        //             <a href="">
        //                 <span className=' font-bold text-2xl'>Daniel</span>
        //                 <span className='font-bold ml-2 text-2xl'>Reinhard</span>
        //             </a>
        //         </div>
        //         <div>
        //             <ul className='flex font-medium text-white'>
        //                 <li><a href="" className='py-2 pl-3 pr-4 font-semibold'>Profile</a></li>
        //                 <li><a href="" className='py-2 pl-3 pr-4 font-semibold'>Portofolio</a></li>
        //                 <li><a href="" className='py-2 pl-3 pr-4 font-semibold'>Skills</a></li>
        //                 <li><a href="" className='py-2 pl-3 pr-4 font-semibold'>Contact</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div >
    );
}

export default Navbar;