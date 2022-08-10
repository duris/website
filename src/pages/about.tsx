import Header from "../components/Header"
import Image from "next/image"
import Footer from "../components/Footer"

const aboutString = "Hello, I\'m Ross Duris and I've been designing websites for 6+ years. I\'ve always had a passion for learning modern development practices and applying them in new projects."
const secondString = "This site was built using NextJS, a modern technology stack that creates blazing fast load times with static page generation. Backed up in the cloud with Git version controll and deployed to Vercel\'s edge platform for continuous uptime."
export default function About() {
 return(
  <>
 <Header/>
 <main>
 <div className="text-4xl text-center text-gray-500 border-b mx-auto">
  <h1 className="py-10 pb-4">About</h1>
  <h2 className=" text-lg py-4 pb-10 font-thin">Continuous learning development approach</h2>
  
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

