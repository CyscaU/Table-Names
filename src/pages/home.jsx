import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";

export const Home = () => {
  return (
<>
<Header/>
<main className='container mx-auto mt-48 p-6 bg-gray-200 text-white rounded-md mb-64'>
<h2 className="text-3xl font-semibold mb-4  hover:bg-gray-500 rounded-full px-5 py-2" >Here and now</h2>
<h1 className="text-6xl font-extrabold animate-slide-up text-white">BYTE4FUTURE</h1>
</main>
<Footer/>
</>
  )
}

export default Home;
