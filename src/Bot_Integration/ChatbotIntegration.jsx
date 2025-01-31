import { useState } from "react";

import { UseContext } from "../context/ContextApi";
const ChatbotIntegration = ({onNext,onIntegrationSuccess}) => {
   
  const {handleTestIntegration}=UseContext()

  function handleTestIntegrationFn(){
    handleTestIntegration()
    onIntegrationSuccess()
    onNext()
    
  }
  
    return (
      <div className="md:w-1/2 w-[100%] m-auto  flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-blue-500 bg-clip-text via-white/70 whitespace-nowrap text-transparent">Chatbot Integration & Testing</h2>
        <div className="    p-5 border-b-[1px]  text-center border-blue-300 ">
          <button className=" mb-2 border-[1px]  shadow-[0_0_20px_5px_rgba(59,130,246,0.6)] border-blue-400 liquid p-2 bg-black text-white rounded-xl  ">Test Chatbot</button>
          <button className="  mb-2 border-[1px] shadow-sm shadow-blue-400 border-blue-400 liquid p-2 bg-black text-white  rounded-xl whitespace-nowrap">Integrate on Your Website</button>
          <button onClick={handleTestIntegrationFn} className=" border-[1px] border-blue-400  shadow-sm shadow-blue-400 liquid p-2 bg-black text-white whitespace-nowrap rounded-xl animate-pulse
          ">
            Test Integration
          </button>
        </div>
        
      </div>
    );
  };
  export default ChatbotIntegration;