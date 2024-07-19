import React from 'react';

export const Footer = () => {
    return (
     <footer className="bg-gray-800 text-white py-8">
     <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
       <div className="flex flex-col items-center mb-4 md:mb-0">
         <h2 className="text-2xl font-bold mb-1">Telefone</h2>
         <p className="text-lg">+258 8429 44601</p>
       </div>
       <div className="flex flex-col items-center mb-4 md:mb-0">
         <h2 className="text-2xl font-bold mb-1">Email</h2>
         <p className="text-lg">franciscauamba@gmail.com</p>
       </div>
       <div className="flex flex-col items-center mb-4 md:mb-0">
         <h2 className="text-2xl font-bold mb-1">Me Siga</h2>
         <div className="flex space-x-4">
           <i className="ph ph-linkedin-logo text-2xl"></i>
           <i className="ph ph-instagram-logo text-2xl"></i>
         </div>
       </div>
       <div className="flex flex-col items-center">
         <p className="text-lg">&copy; 2024 por Francisca Uamba</p>
         <p className="text-lg">Orgulhosamente criado com Figma</p>
       </div>
     </div>
   </footer>
    );
  };
  
  export default Footer;