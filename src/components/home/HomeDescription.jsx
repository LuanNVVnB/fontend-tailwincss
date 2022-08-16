import React from 'react'
import {ArrowRightIcon} from '@heroicons/react/outline'
function HomeDescription() {
    return (
        <>
            < div className="relative py-16 bg-white">
                <div className="relative container m-auto px-6 text-gray-500 md:px-12">
                    <div className="grid lg:grid-cols-3 gap-6 md:w-8/12 md:mx-auto lg:w-full">
                        <div className="group bg-white rounded-xl shadow-xl px-8 py-12 space-y-6 text-center">
                            <img className="mx-auto w-24" src="https://tailus.io/sources/blocks/illustrated/preview/images/icons/code.png" alt="illustration" loading="lazy" />
                            <h3 className="text-2xl font-semibold text-gray-800">Web development</h3>
                            <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="#" className="relative flex justify-center items-center h-10 w-10 mx-auto 
                                   before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125">
                                <span className="text-gray-700"><ArrowRightIcon className="h-6 w-6"/></span>
                            </a>
                        </div>
                        <div className="group bg-white rounded-xl shadow-xl px-8 py-12 space-y-6 text-center">
                            <img className="mx-auto w-24" src="https://tailus.io/sources/blocks/illustrated/preview/images/icons/magic.png" alt="illustration" loading="lazy" />
                            <h3 className="text-2xl font-semibold text-gray-800">Seo </h3>
                            <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>

                            <a href="#" className="relative flex justify-center items-center h-10 w-10 mx-auto 
                                   before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125">
                                <span className="text-gray-700"><ArrowRightIcon className="h-6 w-6"/></span>
                            </a>
                        </div>
                        <div className="group bg-white rounded-xl shadow-xl px-8 py-12 space-y-6 text-center">
                            <img className="mx-auto w-24" src="https://tailus.io/sources/blocks/illustrated/preview/images/icons/graphic.webp" alt="illustration" loading="lazy" />
                            <h3 className="text-2xl font-semibold text-gray-800">Web Design</h3>
                            <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="#" className="relative flex justify-center items-center h-10 w-10 mx-auto 
                                   before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125">
                                <span className="text-gray-700"><ArrowRightIcon className="h-6 w-6"/></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HomeDescription