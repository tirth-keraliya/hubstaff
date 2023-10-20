import ImageTag from "@/components/Imagetag";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto">
          <div className="flex items-center justify-center">
            <ImageTag src={Logo} width={300} height={95} />
          </div>
          <div className="mt-6">
            <h3 className="text-black text-20 font-medium">
              Sign in to Hubstaff
            </h3>
          </div>
          <div className="mt-6">
            <label className=" text-16 font-medium text-silver block mb-2 leading-6">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white rounded outline-0 py-3 px-5 border border-solid border-grayborder text-14 leading-[18px] text-black font-medium focus:border-blue focus:shadow-finput"
            />
          </div>
          <div className="mt-2.5">
            <label className=" text-16 font-medium text-silver block mb-2 leading-6">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full bg-white rounded outline-0 py-3 px-5 border border-solid border-grayborder text-14 leading-[18px] text-black font-medium focus:border-blue focus:shadow-finput"
            />
          </div>
          <div>
            <Link
              href="#"
              className="text-14 leading-18 font-semibold text-blue mt-4 mb-6 block text-right"
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <button className="text-16 leading-6 text-center capitalize  bg-blue w-full py-2 px-6 rounded transition-all duration-300 ease-in-out delay-0 hover:bg-bluehov">
              Login
            </button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-black text-14 leading-18 font-medium">
              Dont have an account?
              <Link href="#" className="text-blue">
                &nbsp;&nbsp;Create your account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
