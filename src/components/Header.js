import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Header(){
  
  

    return(
      <>
      <header className="border">
        <div className=" mx-auto max-w-7xl">
          <div className=" p-3 text-xl mx-4 text-blue-400 hover:text-blue-500 transition-all duration-300 float-left font-semibold">
            <Link href="/">duris.io</Link>
          </div>
          <nav>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/showcase">Showcase</Link></li>
          </nav>
          <div className=" sm:hidden float-right mt-4">      
          <MyDropdown />
          </div>
       </div>
  

    
    </header>
    </>
    )
  

}

function MyDropdown() {
  return (
    <Menu>
          <div className="mTab">
      <Menu.Button>
       <ChevronDownIcon height={30} width={30} className="hover:text-gray-500 transition-all duration-300" />
      </Menu.Button>
      </div>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
  <div className="mItems">
      <Menu.Items>
        <Menu.Item className=" mt-[10px]inline-block hover:text-gray-500">
          {({ active }) => (
            <Link
              className={`${active && 'bg-blue-500'}`}
              href="/"
            >
              Home
            </Link>
          )}
        </Menu.Item>
        <br/>
        <Menu.Item className=" mt-[10px] inline-block hover:text-gray-500">
          {({ active }) => (
            <Link
              className="linky"
              href="/about"
            >
              About
            </Link>
          )}
        </Menu.Item>
        <Menu.Item className=" mt-[10px] inline-block hover:text-gray-500">
          {({ active }) => (
            <Link
              className=" linky"
              href="/contact"
            >
              Contact
            </Link>
          )}
        </Menu.Item>
        <Menu.Item className=" mt-[10px] inline-block hover:text-gray-500">
          {({ active }) => (
            <Link
              className="linky"
              href="/showcase"
            >
              Showcase
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
      </div>
      </Transition>
    </Menu>
  )
}