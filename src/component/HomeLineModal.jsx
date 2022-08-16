/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import {Link} from 'react-router-dom'

export default function HomeLineModal({ nameButton }) {
  return (
    <>

      <label for="my-modal-4" className="block w-max mx-auto text-blue-600">{nameButton}</label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle " />
      <label for="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" for="">
          <div className="grid gap-12 ">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <img src=" https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?b=1&k=20&m=1369508766&s=170667a&w=0&h=xr3pk8VTmDoC9JXzEqMPL_4jZLiyIJWUMzKrBlVQiPI=" alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
              <div className="sm:w-9/12 pl-0 p-5 ">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                    <p className="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...<Link to='/profile-candidate' className=" text-cyan-600">Read more</Link></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </label>
      </label>
    </>

  )
}