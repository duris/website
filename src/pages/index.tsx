import type { NextPage } from "next"
import Header from '../components/Header'
import Link from "next/link";
import Image from "next/image";
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
    <main className="border-l border-r">
    <div className=" -z-30 max-w-7xl relative">



      <div className="bg-trasnparent  -z-40 w-full h-80 sm:h-96 lg:h-[350px] border-b relative overflow-hidden inline-block transition-all duration-300"> 
            <div className="bgElement  -z-40 bg-gradient-to-l from-slate-200 to-white w-[900px] h-[900px] rounded-[500px] absolute -bottom-[50px] -right-[300px] hover:-right-[320px] transition-all duration-300"></div>
            <div className=" absolute  right-0 -top-14 sm:-top-6 lg:-top-10 opacity-20 sm:opacity-100 transition-all duration-300">
            <Image 
              src="https://ik.imagekit.io/zhmk2wx4u/cloudstackbig_TgOutz7x_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660093604664" 
              height={500}
              width={520}
            />
            
            </div>
            {/* <ChevronLeftIcon className="h-16 bottom-32 z-20 text-gray-300 absolute left-1 hover:-left-1 transition-all duration-300 cursor-pointer hover:text-gray-200"/>
            <ChevronRightIcon className="h-16 bottom-32 z-20 text-gray-300 absolute right-1 hover:-right-1 transition-all duration-300 cursor-pointer hover:text-gray-200"/> */}
            
            <div className="sm:ml-10 relative h-72 ml-[26px] -z-0">
              <p className=" sm:text-4xl font sm:max-w-xl z-10 relative sm:bg-white transition-all duration-300 sm:bg-opacity-60 md:bg-transparent font-extrabold tracking-tight text-gray-900 text-2xl max-w-xs sm:p-10 pt-6 p-10">Great performing websites built on a modern technology stack.<br/>
              {/* <Link href="/about"><span className="text-blue-500 hover:text-blue-300 
              cursor-pointer font-extralight underline text-[16px] hover:ml-1 
              transition-all duration-300">Learn More</span></Link> */}
              </p>
              <h3 className=" absolute bottom-[24%] sm:bottom-[14%]
               sm:text-2xl text-lg italic text-slate-400 font-thin 
               opacity-60 ml-10 sm:ml-10 z-10 max-w-xs">Get in touch today for a free consultation.</h3>      
           
            </div>
        </div>      
    </div>

    
      <div className="max-w-7xl mx-auto font-bold rounded relative">
        <button className="bg-blue-400 z-50 hover:bg-blue-300 cursor-pointer text-white absolute left-16 sm:left-20 -top-20 hover:-mt-1 transition-all duration-300 rounded-lg">
              <Link href="/contact">          
                <span className=" float-left mt-3 px-2">Get in Touch<ChatIcon width={30} height={30} className=" float-right pb-1 mb-1 ml-2" /></span>            
              </Link>
              
          </button>
          </div>

          <div className="text-gray-700 border-b p-10 font-thin">
          <p>A modern technology stack gives the best performance possible. </p>
        </div>

      

        <div className="grid grid-cols-2 x sm:grid-cols-4 pt-2 mx-4 bg-white text-center welcomeFeature">
        <span><h2> </h2><DeviceMobileIcon className="fIcon"/><div className="feature">Fully responsive desgins that work on all devices.</div></span>
          <span><h2> </h2><PhotographIcon className="fIcon"/><div className="feature">Optomized images for the fastest loading times.</div></span>
          
          <span><h2></h2><CloudIcon className="fIcon"/><div className="feature">Backed up in the cloud so nothing is ever lost.</div></span>
          <span><h2> </h2><LightningBoltIcon className="fIcon"/><div className="feature">Static pages give the fastest load speeds with great SEO.</div></span>
          <span><h2></h2><PencilIcon className="fIcon"/><div className="feature">Designs from sratch made to look however you want.</div></span>
          <span><h2></h2><CodeIcon className="fIcon"/><div className="feature">Custom coded with a modern stack using NexJS.</div></span>
          <span><h2> </h2><CogIcon className="fIcon"/><div className="feature">Customized full stack features availabe at request.</div></span>
          <span><h2> </h2><LockClosedIcon className="fIcon"/><div className="feature">Secured with 256 bit SSL encryption from Vercel.</div></span>
        
        </div>
        
        
        <div className="text-gray-700 border-t p-10 font-thin grid grid-cols-2 relative">
          <p>Take a tour of the technology under the hood. </p>
          <span className=" italic font-bold float-right pr-10 mr-20  text-gray-400">
            <Link href="/contact">Coming Soon</Link>     
            <ChevronRightIcon className="h-10 z-20 text-gray-300 float-right hover:-right-1 transition-all duration-300 cursor-pointer hover:text-gray-200 inline-block -mt-2  sm:mr-20 -mr-20"/>        
          </span>       
      </div>

    </main>


    <Footer />
  </>          
  );
};


export default Home
