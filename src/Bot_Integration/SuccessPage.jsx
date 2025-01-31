import React from 'react'
import { UseContext } from '../context/ContextApi'


import TwitterSvg from "../svg/TwitterSvg";
import FacebookSvg from "../svg/FacebookSvg";

function SuccessPage() {
    const {integrationStatus}=UseContext()

    const result=integrationStatus === "success" &&  (
        <div className="mt-8 text-center  ">
          <h3 className="inline-block p-2 shadow-md shadow-black/45 bg-black/50 text-sm hover:bg-black/70 transition whitespace-nowrap ease-in-out 2s text-white rounded">Integration Successful!🥳</h3>
          <div className="mt-4 space-y-4">
            <div className="w-full border-b-[1px] border-blue-200 flex gap-3 flex-col p-3">

            <button className=" p-2 shadow-md shadow-black/45 bg-black/50 text-sm hover:bg-black/70 transition ease-in-out 2s text-white rounded whitespace-nowrap">Explore Admin Panel</button>
            <button className=" p-2 shadow-md shadow-black/45 bg-black/50 text-sm hover:bg-black/70 transition ease-in-out 2s text-white rounded whitespace-nowrap">Start Talking to Your Chatbot</button>
            </div>
            <div className="flex justify-center space-x-4 mt-5">
              <button className="p-2 relative bg-gray-900 rounded-full hover:animate-pulse text-white whitespace-nowrap  ">
              <span className="absolute top-1 left-[-70px] bg-gray-900 border-[1px] border-blue-300 py-0.5  px-2 rounded-xl text-sm  opacity-0 transition-opacity duration-300 hover:opacity-100">share on</span><TwitterSvg/></button>
              <button className="p-2 relative rounded-full bg-gray-900 text-white whitespace-nowrap hover:animate-pulse">
              <span className="absolute top-1 left-9 bg-gray-900 border-[1px] border-blue-300 py-0.5 opacity-0 transition-opacity duration-300 hover:opacity-100 px-2 rounded-xl text-sm">share on</span>
                <FacebookSvg/></button>
            </div>
          </div>
        </div>)

  return (
    // {result}
    <div>
        {result?result:<>Loading...</>}
    </div>
  )
}

export default SuccessPage