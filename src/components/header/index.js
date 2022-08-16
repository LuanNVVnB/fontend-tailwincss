/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about/we' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Company', path: '/company' },
]

export default function index() {
    return (
        <>
            <header>
                <nav className="flex mb-6 z-10 w-full border-b bg-white bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-transparent">
                    <div className="container m-auto px-2 md:px-12 lg:px-7">
                        <Popover>
                            <div className="flex space-x-64 relative p-4 px-4 w-screen sm:px-6 lg:px-8 lg:ml-32 ">
                                <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                                    <div aria-hidden="true" className="flex space-x-1">
                                        <div className="h-4 w-4 rounded-full bg-gray-900"></div>
                                        <div className="h-6 w-2 bg-sky-500"></div>
                                    </div>
                                    <span className="text-base font-bold text-gray-400">MyVote</span>
                                </a>
                                <nav className="flex lg:items-center w-full  sm:h-10 lg:justify-start mx-32" aria-label="Global">
                                    <div className="flex items-center md:hidden mx-auto">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
                                        {navigation.map((item, index) => (
                                            <Link key={index} to={item.path} className="font-medium text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </Link>
                                        ))}
                                       
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                        <Link to='/login' className="font-medium text-indigo-600 hover:text-indigo-300 active:bg-sky-200 focus:bg-sky-100">
                                            Log in
                                        </Link>
                                        <Link to='/register' className="font-medium text-indigo-600 hover:text-indigo-300 active:bg-sky-200 focus:bg-sky-100">
                                            Sign in
                                        </Link>
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            {navigation.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    to={item.path}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                        <Link
                                            to='/login'
                                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                        >
                                            Log in
                                        </Link>

                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>


                    </div>
                </nav>
            </header>
        </>
    )
}