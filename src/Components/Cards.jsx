import React from 'react';

function Cards(props) {
    return (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md text-center">
            <div className='justify-center flex mt-3'>
                <img class="rounded-t-lg h-80 object-cover w-80" src={props.link} alt="" />
            </div>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.name}</h5>
                <p class="mb-3 font-normal text-gray-700">{props.isi}</p>
            </div>
        </div>
    );
}

export default Cards;