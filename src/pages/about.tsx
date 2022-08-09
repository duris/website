import Header from "../components/Header"
import Image from "next/image"
import Footer from "../components/Footer"

export default function About() {
 return(
  <>
 <Header/>
 <main>
 <div className="text-4xl text-center text-gray-500 border-b">
  <h1 className="py-10 pb-4">About</h1>
  <h2 className=" text-lg py-4 pb-10 font-thin"></h2>
  
  </div>

  <div className=" float-left m-10">
  <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/Screen_Shot_2022-08-09_at_4.53.43_PM_WT1r4A7ov.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660078449773" 
      width={330} height={330} 
      alt="showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-lg shadow-sm" 
      />      
  </div>
  <div>
  <p className="float-left max-w-md p-10">
    Hello, I&aposm Ross Duris and I&aposve been designing websites for 6+ years. I&aposm based around the greater Columbus, Ohio area. I&aposve always had a passion for learning new technologies and applyin them to projects.
  </p>
  <p className="float-left max-w-md p-10 pt-2">This site was built using NextJS, a modern technology stack that creates blazing fast load times with static page generation. Backed up in the cloud with Git version controll and deployed to Vercel&aposs edge platform for continuous uptime.</p>
  </div>
 </main>
 <Footer />
 </>
 )
}

