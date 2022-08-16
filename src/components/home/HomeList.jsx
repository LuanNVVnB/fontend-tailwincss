import React from 'react'
import HomeLineModal from '../../component/HomeLineModal'

function HomeList() {
    return (
        <div>

            <div className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <div className="mb-16">
                        <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Tailus blocks leadership</h2>
                        <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
                    </div>
                    <div className="py-20 grid gap-28 md:gap-12 md:grid-cols-3">
                        <div className="border-t-4 space-y-8 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                                <img className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                    src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="woman" loading="lazy" width="640" height="805" />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl">Hentoni Doe</h4>
                                    <span className="block text-sm text-gray-500">CEO-Founder</span>
                                </div>
                                <HomeLineModal nameButton={'ViewBio'} />
                            </div>
                        </div>

                        <div className="border-t-4 space-y-8 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                                <img className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                    src="https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?b=1&k=20&m=1369508766&s=170667a&w=0&h=xr3pk8VTmDoC9JXzEqMPL_4jZLiyIJWUMzKrBlVQiPI=" alt="woman" loading="lazy" width="1000" height="667" />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl">Anabelle Doe</h4>
                                    <span className="block text-sm text-gray-500">Chief Operations Officer</span>
                                </div>
                                <HomeLineModal nameButton={'ViewBio'} />
                            </div>
                        </div>

                        <div className="border-t-4 space-y-8 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                                <img className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                    src="https://media.istockphoto.com/photos/smiling-business-woman-working-with-laptop-while-looking-at-camera-in-picture-id1348209421?b=1&k=20&m=1348209421&s=170667a&w=0&h=p0WEj_TWXcf_ctAXoabpnN7_HHmH6Hs2O70QxQKYx-U=" alt="man" loading="lazy" width="1000" height="667" />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl">Jonathan Doe</h4>
                                    <span className="block text-sm text-gray-500">Chief Technical Officer</span>
                                </div>
                                <HomeLineModal nameButton={'ViewBio'} />
                            </div>
                        </div>
                    </div>
                    <button type="button" title="Start buying" className="w-max mx-auto py-3 px-6 text-center rounded-full transition border border-blue-200 active:bg-blue-200 focus:bg-blue-100">
                        <span className="block text-blue-600 font-semibold text-sm">
                            Load more...
                        </span>
                    </button>
                </div>
            </div></div>
    )
}

export default HomeList