import Header from "../components/Header"
import Image from "next/image"
import Footer from "../components/Footer"

const aboutString = "Hello, I\'m Ross Duris and I've been developing websites for 6+ years. I\'ve always enjoyed learning modern development practices and applying them to new projects."
const secondString = "This site was built using NextJS and TypeScript, a modern technology stack that creates great performace with type safety and static page generation. Backed up in the cloud with Git version control and deployed to Vercel\'s edge platform for continuous uptime."
export default function About() {
 return(
  <>
 <Header/>
 <main>
 <div className="text-4xl text-center text-gray-500 border-b mx-auto">
  <h1 className="py-10 pb-4">About</h1>
  <h2 className=" text-lg py-4 pb-10 font-thin">Continuous Development Approach</h2>
  
  </div>
<div className="grid grid-cols-1 sm:grid-cols-2 mx-auto float-none">
  <div className=" float-right m-10 rounded-xl">
  <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/placeholder_JDwgbHFCK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660124988578" 
      width={430} height={430} 
      alt="showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-[40px] shadow-sm float-right inline-block" 
      />      
  </div>
  <div>
  <p className="float-left max-w-md p-10">
    {aboutString}
  </p>
  <p className="float-left max-w-md p-10 pt-2">
    {secondString}
  </p>
  </div>

  </div>
 </main>
 <Footer />
 </>
 )
}

