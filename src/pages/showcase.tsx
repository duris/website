import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Showcase() {
 return(
  <>
 <Header/>
 <main>
  <div className="text-4xl text-center text-gray-500 border-b">
  <h1 className="py-10 pb-4">Showcase</h1>
  <h2 className=" text-lg py-4 pb-10 font-thin">Preview of NextJS websites and prior clients showcase.</h2>
  <h3 className="text-sm font-thin text-gray-900 bg-[#f1f1f1] py-1">This website was built using NextJS</h3>
  </div>
  </main>
 <Footer />
 </>
 )
}

