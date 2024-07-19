import React from 'react';
import NavBar from './nav-bar';
import { Student } from '@phosphor-icons/react';


export const Header = () => {
  return (
   <header className='flex relative items-center justify-between w-full bg-gray-800 h-16  '>
<div>
  <Student size={50} className='ml-7 text-white '/>
</div>
<section className='flex relative gap-10 mr-8' >

<NavBar/>
</section>
   </header>
  );
};

export default Header;
