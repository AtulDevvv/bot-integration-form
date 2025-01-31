import React, { useState } from "react";
import UserRegistration from "./From/Regsiter";
import SetupOrganization from "./Bot_Integration/SetupOrganization";
import ChatbotIntegration from "./Bot_Integration/ChatbotIntegration";
import Header from "./component/Header";
import SuccessPage from "./Bot_Integration/SuccessPage";



const App = () => {
  const [step, setStep] = useState(1); 
  const [emailVerified, setEmailVerified] = useState(false);
  const [integrationSuccess, setIntegrationSuccess] = useState(false);

 
  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserRegistration  onNext={() => setStep(2)} onEmailVerified={() => setEmailVerified(true)} />;
      case 2:
        return <SetupOrganization onNext={() => setStep(3)} />;
      case 3:
        return <ChatbotIntegration onIntegrationSuccess={() => setIntegrationSuccess(true)} onNext={() => setStep(4)} />;
        case 4:
        return <SuccessPage/>

      default:
        return null;
    }
  };

  return (
    <div  className='w-full overflow-hidden min-h-screen  py-4  flex  flex-col items-center justify-center bg-gradient-to-r to-black from-black via-blue-500 to-blue-600" '>
      <Header/>
      <p className="p-10">

      <h6 className='text-md md:mt-7 md:text-2xl mt-5 text-white/90 font-bold  '> Make Visitor  to Your Customer </h6>
   
      </p>
      <div className="md:w-[30%] w-[80%]  backdrop-blur-md  overflow-hidden bg-black/40 p-8 rounded-lg shadow-lg border-[1px] border-blue-400 hover:shadow-blue-800">
      
        {renderStep()}
      </div>
    </div>
  );
};

export default App;