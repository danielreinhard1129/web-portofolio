import React from 'react';

function Contact() {
    return (
        <div className='md:flex '>
            <div className='text-center md:text-start md:w-2/4 mx-5'>
                <div className='text-4xl font-normal'>Hi !!!</div>
                <div className='text-6xl text-blue-800 mt-5 font-semibold'>Do you have any <br />Project? Lets Talk</div>
                <div className='my-3 text-xl mt-10'>Design For </div>
                <div className='my-3 text-2xl font-bold'>Web & Mobile </div>
                <div className='my-3 text-xl mt-10'>Phone </div>
                <div className='my-3 text-2xl font-medium'><a href="https://api.whatsapp.com/send/?phone=6285244455555&text&type=phone_number&app_absent=0">+6285244455555</a> </div>
                <div className='my-3 text-xl mt-10'>Drop your Message </div>
                <div className='my-3 text-2xl font-medium mb-20'>danielreinhard1129@gmail.com </div>
            </div>
            <div className='md:w-2/4 mx-5'>
                <div>
                    <label for="small-input" class="block mb-2 text-xl font-medium text-gray-900">Name</label>
                    <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-10'>
                    <label for="small-input" class="block mb-2 text-xl font-medium text-gray-900">Email</label>
                    <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div class="my-10">
                    <label for="message" class="block mb-2 text-xl font-medium text-gray-900">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Message"></textarea>
                </div>
                <button type="button" class="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Submit</button>
            </div>
        </div>
    );
}

export default Contact;