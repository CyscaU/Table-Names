import React, { useEffect, useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer';


export const Student = () => {

   let [lista, setLista] = useState([]);
   let [novoItem, setNovoItem] = useState("");

   useEffect(() => {
      setLista(["Georgina Manguana", "Vicente", "Alcinda Chirime", "Atália Patissone", "Ancha Catarina", "Alexandre Mahumane",  "Domingos Chiconela", "Franco Bomba", "Inacio Mugana", "Luis Isibia", "Isabel Duarte", "Joaquim Ubisse",]);
   }, []);

   return (
      <>
         <Header />
         <main className="container mx-auto p-6 bg-gray-800 text-white rounded-md mt-10 mb-10">
            <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" placeholder="Enter a name"
               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500" />

            <button onClick={() => adicionarNovoItem()} className="mt-2 px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500">Adicionar</button>
            <ul className="list-disc list-inside">
               {lista.map((item, index) => (
                  <li key={index} className="mb-2 flex justify-between items-center">
                     {item}
                     <button onClick={() => deletarItem(index)} className="ml-4 px-2 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500">Deletar</button>
                  </li>
               ))}
            </ul>


         </main>


        
         <Footer/>

      </>
   )
   function adicionarNovoItem() {
      setLista([...lista, novoItem]);
      setNovoItem("");
   }
   
   function deletarItem(index) {
      let tmpArry = [...lista];
      tmpArry.splice(index, 1);
   
      setLista(tmpArry);
   }

}

export default Student;
