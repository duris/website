import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Pricing() {
 return(
  <>
 <Header/>
 <main>
 <div className="text-4xl text-center text-gray-500 border-b mx-auto">
  <h1 className="py-10 pb-4">Pricing</h1>
  <h2 className=" text-lg py-4 pb-10 font-thin">Email or Contact Form</h2>
  
  </div>
<div className="grid grid-cols-1 sm:grid-cols-2 mx-auto float-none">
  <div className=" float-right m-10">
  <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/Screen_Shot_2022-08-09_at_4.53.43_PM_WT1r4A7ov.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660078449773" 
      width={630} height={330} 
      alt="showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-lg shadow-sm float-right inline-block" 
      />      
  </div>
  <div>

  </div>

  </div>
 </main>
 <Footer />
 </>
 )
}

