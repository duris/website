import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Showcase() {
 return(
  <>
 <Header/>
 <main>
  <div className="text-4xl text-center text-gray-500 border-b">
  <h1 className="py-10 pb-4">Showcase</h1>
  <h2 className=" text-lg py-4 pb-10 font-thin">Preview of NextJS websites and prior clients showcase.</h2>
  </div>

  <div className="sm:px-10">
  <div className=" float-left w-full grid grid-cols-2 border-b">
    <div className="showcaseImg">
      <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/Screen_Shot_2022-08-09_at_4.22.17_PM_Htcwsl6_f.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660076635698" 
      width={380} height={280} 
      alt="showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-lg shadow-sm" 
      />      
     </div>
     <div>
     <p className="p-8 text-sm sm:text-lg ">
     The Razor template was built with NextJS and is serving optomized images from ImageKit. Please get in touch to customize this template.
     </p>
     <span className=" bg-[#f1f1f1] border shadow-sm p-2 rounded-lg text-gray-800 font-thin hover:bg-blue-300 cursor-pointer m-2 mb-10 ml-8 inline-block"><Link href="https://razor-template.vercel.app">Visit Live Site</Link></span>
     </div>
  </div>

  <div className=" float-left w-full grid grid-cols-2 border-b">
    <div className="showcaseImg">
      <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/Screen_Shot_2022-08-09_at_4.23.34_PM_6Qifxzr48.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660076636594" 
      width={380} height={280} 
      alt="showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-lg shadow-sm" 
      />      
     </div>
     <div>
     <p className="p-8 text-sm sm:text-lg ">
     The Blade template was built with NextJS and is using TailWindCSS. Please get in touch to customize this template.
     </p>
     <span className=" bg-[#f1f1f1] border shadow-sm p-2 rounded-lg text-gray-800 font-thin hover:bg-blue-300 cursor-pointer m-2 mb-10 ml-8 inline-block"><Link href="https://blade-template.vercel.app/">Visit Live Site</Link></span>
     </div>
  </div>


  <div className=" float-left w-full grid grid-cols-2 border-b">
    <div className="showcaseImg">
      <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/Screen_Shot_2022-08-09_at_4.14.00_PM_YxWQei17Kq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660076637168" 
      width={380} height={280} 
      alt="tintlab showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-lg shadow-sm" 
      />      
     </div>
     <div>
     <p className="p-8 text-sm sm:text-lg ">
     TintLab was custom built with HTML, CSS, and JavaScript. They have sold to Ricart since development.
     </p>
     <span className=" bg-[#f1f1f1] border shadow-sm p-2 rounded-lg text-gray-800 font-thin hover:bg-blue-300 cursor-pointer m-2 mb-10 ml-8 inline-block"><Link href="https://tintlabohio.com/">Visit Live Site</Link></span>
     </div>
  </div>


  <div className=" float-left w-full grid grid-cols-2 border-b">
    <div className="showcaseImg">
      <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/Screen_Shot_2022-08-09_at_4.12.54_PM_pj5Zreow8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660076428651" 
      width={380} height={280} 
      alt="showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-lg shadow-sm" 
      />      
     </div>
     <div>
     <p className="p-8 text-sm sm:text-lg ">
     InovFit was custom buit for a healthcare startup using HTML, CSS, and JavaScript. They have received funding since development.
     </p>
     <span className=" bg-[#f1f1f1] border shadow-sm p-2 rounded-lg text-gray-800 font-thin hover:bg-blue-300 cursor-pointer m-2 mb-10 ml-8 inline-block"><Link href="https://testinovfit.web.app/">Visit Live Site</Link></span>
     </div>
  </div>


  <div className=" float-left w-full grid grid-cols-2 border-b">
    <div className="showcaseImg">
      <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/Screen_Shot_2022-08-09_at_4.14.42_PM_lMbTWOIqdc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660076636791" 
      width={380} height={280} 
      alt="showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-lg shadow-sm" 
      />      
     </div>
     <div>
     <p className="p-8 text-sm sm:text-lg ">
     VillaNova was custom built using HTML, CSS, and JavaScript with deployment to Firebase.
     </p>
     <span className=" bg-[#f1f1f1] border shadow-sm p-2 rounded-lg text-gray-800 font-thin hover:bg-blue-300 cursor-pointer m-2 mb-10 ml-8 inline-block"><Link href="https://villanova.apartments/">Visit Live Site</Link></span>
     </div>
  </div>
  </div>
  
  </main>
 <Footer />
 </>
 )
}

