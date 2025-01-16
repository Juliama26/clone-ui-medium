import * as React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { FaApple, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BtnIcon from "../elements/BtnIcon";

export default function Login(props) {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  return (
    <div className="absolute left-0 right-0 top-0 z-[2] h-screen bg-primary bg-opacity-90">
      <section className="flex flex-col justify-center gap-y-6 min-h-screen h-screen md:max-w-lg mx-auto px-6 border bg-primary">
        <h2 className="text-3xl text-center pb-6">{title}</h2>
        <section className="flex flex-col gap-y-3 max-w-xs mx-auto w-full">
          <BtnIcon Icon={<FcGoogle size={23} />}>Sign in with Google</BtnIcon>
          <BtnIcon Icon={<FaFacebook size={23} color="blue" />}>
            Sign in with Facebook
          </BtnIcon>
          <BtnIcon Icon={<FaApple size={23} />}>Sign in with Apple</BtnIcon>
          <BtnIcon Icon={<FaXTwitter size={23} />}>
            Sign in with Twitter
          </BtnIcon>
          <BtnIcon Icon={<MdOutlineEmail size={23} />}>
            Sign in with Email
          </BtnIcon>
        </section>
        <p className="text-center">
          No account?{" "}
          <Link to={"/"} className="text-green-700">
            Create One
          </Link>
        </p>
        <p className="text-center text-sm">
          Forgot email or trouble signing in? <Link to={"/"}>Get help.</Link>
        </p>
        <p className="text-center text-sm">
          Click “Sign in” to agree to Medium’s Terms of Service and acknowledge
          that Medium’s Privacy Policy applies to you.
        </p>
      </section>
    </div>
  );
}
