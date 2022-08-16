import React from 'react'

function HomePage() {
  return (
    <div>

      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
              <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
              <p className="mt-4 mb-10 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex">
                <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 rounded-md hover:border-cyan-400 hover:shadow-lg">
                  <div className="flex justify-center space-x-4">
                    <img className="w-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png" alt="slack logo" loading="lazy" width="128" height="128" />
                    <span className="hidden font-medium md:block">Add to Slack</span>
                  </div>
                </a>
                <a aria-label="add to chat" href="#" className="p-4 border border-gray-200 rounded-md hover:border-green-400 hover:shadow-lg">
                  <div className="flex justify-center space-x-4">
                    <img className="w-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png" alt="chat logo" loading="lazy" width="128" height="128" />
                    <span className="hidden font-medium md:block">Add to Google Chat</span>
                  </div>
                </a>
                <a aria-label="add to zoom" href="#" className="p-4 border border-gray-200 rounded-md hover:border-blue-400 hover:shadow-lg">
                  <div className="flex justify-center space-x-4">
                    <img className="w-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png" alt="chat logo" loading="lazy" width="128" height="128" />
                    <span className="hidden font-medium md:block">Add to Zoom</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage