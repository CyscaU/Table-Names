import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer';


export const Contact = () => {
    
    return (
        <>
        <Header/>
        <main>

<form className='container mx-auto mt-28 p-6 bg-gray-200 text-white rounded-md mb-48 px-80'>
    <div className='header mb-6'>
        <h1 className='text-3xl text-black font-bold text-center'>Bem vindo</h1>
    </div>
    <div className='mb-4' >
        <input type='text' placeholder='enter your name ' name='name'   className='w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500'></input>
    </div>
    <div className='mb-4'>
        <input type='text' placeholder='enter your email ' name='email'   className='w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500'></input>
    </div>
    <div className='mb-4'>
        <input type='text' placeholder='enter your password ' name='parword'   className='w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500'></input>
    </div>
    <div>
        <button type='submit'  className='px-6 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'>submit</button>
    </div>
</form>



        </main>
        <Footer/>
        </>
    );
}

export default Contact;
