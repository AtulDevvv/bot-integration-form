import { useState } from "react";
import GoogleSvg from "../svg/GoogleSvg";
import { UseContext } from "../context/ContextApi";
const UserRegistration = ({ onNext, onEmailVerified }) => {
    const [verificationCode, setVerificationCode] = useState("");
    const [state,setState]=useState('register')
    const {setLoggedIn,isLoggedIn}=UseContext()

  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(state==='register'){
// Simulate email verification
if (verificationCode === "123456") {
  onEmailVerified();
  setLoggedIn(true)
  onNext();
} else {
  alert("Invalid verification code");
}
      }
      if(state==='login'){
       
     
          setLoggedIn(true)
          onNext();
       

      }
      
      
    };
  
    return (
      <div className="">
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-blue-500 bg-clip-text via-blue-400 text-transparent">{isLoggedIn?'Login':'User Registration'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        { state==='register' && <input type="text" placeholder="Name" className="w-[60%] p-2 border text-white/80 rounded shadow-md shadow-blue-500 focus:border  border-blue-500" required />}
          <input type="email" placeholder="Email" className="w-[60%] p-2 border text-white/80 shadow-md shadow-blue-500 rounded focus:border border-blue-500" required />
          <input type="password" placeholder="Password" className="w-[60%] p-2 text-white/80 shadow-md shadow-blue-500 border rounded focus:border border-blue-500" required />
          
<div className="flex gap-5">
{  state==='register' &&<input
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-[60%] text-white/80 p-2 shadow-md shadow-blue-500  border rounded focus:border border-blue-500"
            required
          />}
          <button type="submit" className="w-[50%] p-2 shadow-md shadow-black/45 bg-black/50 text-sm hover:bg-black/70 transition ease-in-out 2s text-white rounded">
           
            Verify and Proceed
          </button>

</div>

<button type="button" className="text-white items-center  flex gap-1.5  bg-blue-400 hover:bg-[#4285F4]/60 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  justify-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
          <GoogleSvg/>
          
<h2>Continue with Google</h2>
</button>
         

        </form>

        {state==='register'?<h4 className="mt-3 text-white ">Already have an Account? <span onClick={()=>{
          setState('login')
        }} className="underline hover:text-blue-300 cursor-pointer">click</span></h4>:<h4 className="mt-3 text-white ">New User? <span onClick={()=>{
          setState('register')
        }} className="underline hover:text-blue-300 cursor-pointer">click</span></h4>}
      </div>
    );
  };
  export default UserRegistration;