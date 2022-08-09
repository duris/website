import type { NextPage } from "next"
import Header from '../components/Header'
import Link from "next/link";
import Head from "next/head" 
import Footer from "../components/Footer";
import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, ChatIcon, CameraIcon } from '@heroicons/react/solid'
import { BeakerIcon, PencilIcon ,AdjustmentsIcon, CodeIcon, CogIcon, LightningBoltIcon, DeviceMobileIcon, LockClosedIcon, CloudIcon, PhotographIcon  } from '@heroicons/react/outline'




const Home: NextPage = () => {

<Head>
  <title>duris.io</title>
  <meta name="description" content="Generated by create-t3-app" />
  <link rel="icon" href="/favicon.ico" />
</Head>    
    


  return (
  <>
    <Header/> 
    <main>
    <div className="sm:border-r sm:border-l -z-0">


      
      <div className="bg-trasnparent w-full h-72 sm:h-96 lg:h-[350px] border-b relative overflow-hidden -z-50 inline-block"> 
            <div className="bgElement -z-50 bg-gradient-to-r from-slate-200 to-white w-[900px] h-[900px] rounded-[500px] absolute -bottom-[50px] -right-[300px] hover:-right-[320px] transition-all duration-300"></div>
            {/* <ChevronLeftIcon className="h-16 bottom-32 z-20 text-gray-300 absolute left-1 hover:-left-1 transition-all duration-300 cursor-pointer hover:text-gray-200"/>
            <ChevronRightIcon className="h-16 bottom-32 z-20 text-gray-300 absolute right-1 hover:-right-1 transition-all duration-300 cursor-pointer hover:text-gray-200"/> */}
            
            <div className="sm:ml-10 relative h-72 ml-[26px] -z-0">
              <p className=" sm:text-4xl font sm:max-w-xl z-10 relative font-extrabold tracking-tight text-gray-900 text-2xl max-w-xs sm:p-10 pt-6 p-10">Great performing websites built on a modern technology stack.<br/>
              {/* <Link href="/about"><span className="text-blue-500 hover:text-blue-300 
              cursor-pointer font-extralight underline text-[16px] hover:ml-1 
              transition-all duration-300">Learn More</span></Link> */}
              </p>
              <h3 className=" absolute bottom-[24%] sm:bottom-[14%]
               sm:text-2xl text-lg italic text-slate-400 font-thin 
               opacity-60 ml-10 sm:ml-10 z-10 max-w-xs">Get in touch today for a free consultation.</h3>      
              <div className="bg-blue-400 z-20 hover:bg-blue-300 cursor-pointer text-white 
              font-bold px-2 rounded inline-flex items-center absolute top-[80%] ml-10
              sm:top-[96%] sm:ml-10 h-10 sm:hover:top-[95%] hover:top-[79%]  hover:shadow transition-all duration-300">
              <Link href="/contact">          
                <span >Get in Touch</span>            
              </Link>
              <ChatIcon width={30} height={30} className=" ml-2" />
              </div>
            </div>
      </div>

      <div className="h-[900px]">

        <div className="grid grid-cols-2 x sm:grid-cols-4 pt-2 mx-4 bg-white text-center welcomeFeature">
        <span><h2> </h2><DeviceMobileIcon className="fIcon"/><div className="feature">Fully responsive desgins that work on all devices.</div></span>
          <span><h2> </h2><PhotographIcon className="fIcon"/><div className="feature">Optomized images for the fastest loading times.</div></span>
          
          <span><h2></h2><CloudIcon className="fIcon"/><div className="feature">Backed up in the cloud so nothing is ever lost.</div></span>
          <span><h2> </h2><LightningBoltIcon className="fIcon"/><div className="feature">Static pages give the fastest load speeds with great SEO.</div></span>
          <span><h2></h2><PencilIcon className="fIcon"/><div className="feature">Designs from sratch made to look however you want.</div></span>
          <span><h2></h2><CodeIcon className="fIcon"/><div className="feature">Custom coded with a modern stack using NexJS.</div></span>
          <span><h2> </h2><CogIcon className="fIcon"/><div className="feature">Customized full stack features availabe at request.</div></span>
          <span><h2> </h2><LockClosedIcon className="fIcon"/><div className="feature">Encrypted with a free SSL certificate from Vercel.</div></span>
        
        </div>
        
        
        
        <div className="text-white">
          <ul>
            <li className="contentFeature">Content 1</li>
          </ul>
        </div>

        <Footer />
      </div>
    </div>

    </main>
  </>          
  );
};


export default Home
