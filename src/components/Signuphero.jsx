function Signuphero() {
  return (
    <div className="flex ">
      <div>
        <h1>Create an Account</h1>
        <div className="flex flex-col">
          <div>
            <input
              className="border rounded-full p-[1em] m-[.5em]"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border rounded-full p-[1em] m-[.5em]"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <input
              className="border rounded-full p-[1em] m-[.5em]"
              type="text"
              placeholder="Email Adrres"
            />
            <input
              className="border rounded-full p-[1em] m-[.5em]"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="border rounded-full p-[1em] m-[.5em]"
              type="text"
              placeholder="Password "
            />
            <input
              className="border rounded-full p-[1em] m-[.5em]"
              type="text"
              placeholder="Confirm Password"
            />
            <div>
              <button className="bg-[#45C9A1] rounded-full px-[6em] py-[1em] items center text-[white]">
                
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="src/assets/images/signup.png" alt="" />
      </div>
    </div>
  );
}
export default Signuphero;
