import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Loginhero() {
  const [showPassword, setShowPassword] = useState(true);
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div>
      <div className="flex">
        <div>
          <img src="src/assets/images/login.png" alt="" />
        </div>
        <div>
          <div>
            <h1 className="flex justify-center"> Login to your Account</h1>
          </div>
          <div className="flex flex-col m-[3em] w-[100%]">
            <div className="">
              <div className=" flex m-[2em]">
                <input
                  className="border rounded-full p-[1em]  flex-1 outline-none"
                  type="text"
                  placeholder="EmailAdress"
                />
              </div>
              <div className="flex items-center w-[100%] border rounded-full m-[2em] ">
                <input
                  className=" p-[1em]   flex-1 outline-none"
                  type={showPassword?"password":"text"}
                  placeholder="Password"
                />
                <div className="cursor-pointer"onClick={handleShowPassword}>
                 
                  {showPassword ?<FaEyeSlash /> :<FaEye />}
                </div>
              </div>

              <button className="flex items-center justify-center text-[white] bg-[#45C9A1] rounded-full px-[6em] py-[1em] ">
                sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loginhero;
