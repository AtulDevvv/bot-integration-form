import React, { useContext,useState } from "react";
import { SuccessCelebsFn } from "../utils/ConfettiUi"
   

const createContext= React.createContext()

 export const ContextProvider=({children})=>{

    const [integrationStatus, setIntegrationStatus] = useState("pending");
    const [isLoggedIn,setLoggedIn]=useState(false)
  
const handleTestIntegration = () => {
  // Simulate integration check
  setTimeout(() => {

    setIntegrationStatus("success");

    SuccessCelebsFn()
  }, 2000);
};

    return (
        <createContext.Provider value={{integrationStatus,setIntegrationStatus,handleTestIntegration,isLoggedIn,setLoggedIn}}>
            {children}
        </createContext.Provider>
    )

}


export  function UseContext(){
    return useContext(createContext);
}

