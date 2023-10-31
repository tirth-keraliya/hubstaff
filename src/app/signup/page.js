import Logo from "../../../public/images/logo.svg";
import Link from "next/link";
import ImageTag from "../components/Imagetag";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-center">
          <ImageTag src={Logo} width={300} height={95} />
        </div>
        <div className="mt-6">
          <h3 className="text-black text-26 leading-8 font-medium capitalize">
            Productivity personified
          </h3>
          <p className="text-gray text-16 leading-18 mt-1">
            Maximize productivity with real-time insights, automated timesheets,
            budget costing, and more.
          </p>
        </div>
        <div className="mt-6">
          <label className=" text-16 font-medium text-silver block mb-2 leading-6">
            Full name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-white rounded outline-0 py-3 px-5 border border-solid border-grayborder text-14 leading-[18px] text-black font-medium focus:border-blue focus:shadow-finput"
          />
        </div>
        <div className="mt-2.5">
          <label className=" text-16 font-medium text-silver block mb-2 leading-6">
            Work email
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
            placeholder="Create your password"
            className="w-full bg-white rounded outline-0 py-3 px-5 border border-solid border-grayborder text-14 leading-[18px] text-black font-medium focus:border-blue focus:shadow-finput"
          />
        </div>
        <div className="my-4">
          <label className="text-black text-12 leading-normal font-medium flex items-center ">
            <input type="checkbox" className="mr-2 w-4 h-4" />I agree to the{" "}
            <Link href="#" className="text-blue font-semibold">
              &nbsp;Terms,{" "}
            </Link>
            <Link href="#" className="text-blue font-semibold">
              Privacy Policy
            </Link>{" "}
            &nbsp;and&nbsp;
            <Link href="#" className="text-blue font-semibold">
              DPA
            </Link>
          </label>
        </div>
        <div>
          <button className="text-16 leading-6 text-center capitalize font-medium  bg-blue w-full py-2 px-6 rounded transition-all duration-300 ease-in-out delay-0 hover:bg-bluehov">
            Create my account
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-black text-14 leading-18 font-medium">
            Already have an Account?
            <Link href="/" className="text-blue font-semibold">
              &nbsp;&nbsp;Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
