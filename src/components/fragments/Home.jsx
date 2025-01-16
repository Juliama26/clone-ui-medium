import * as React from "react";
import Button from "../elements/Button";
import hero from "../../assets/hero.webp";
import { MdClose, MdOutlineEmail } from "react-icons/md";
import Register from "./Register";
import BtnIcon from "../elements/BtnIcon";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="px-4 md:pl-16 mt-28 md:mt-44 relative">
      <figure className="hidden lg:block h-[490px] lg:h-[540px] absolute -top-28 right-0">
        <img src={hero} alt="Hero" className="h-full object-cover" />
      </figure>
      <figcaption className="flex flex-col gap-y-8">
        <h2 className="leading-tight text-6xl md:text-8xl font-semibold">
          Human <br /> stories & ideas
        </h2>
        <p className="text-2xl">
          A place to read, write, and deepen your understanding
        </p>
        <section onClick={() => setOpen(true)}>
          <Button className="px-8 py-3 font-semibold bg-accent md:bg-secondary md:border-secondary text-primary">
            Start reading
          </Button>
        </section>
      </figcaption>
      {open && (
        <>
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-20 md:-top-36 right-6 md:right-1/3 cursor-pointer z-[3] text-grayDark"
          >
            <MdClose size={25} />
          </button>
          <div className="absolute left-0 right-0 -top-28 md:-top-44 z-[2] h-screen bg-primary bg-opacity-90">
            <section className="flex flex-col justify-center gap-y-6 min-h-screen h-screen md:max-w-lg mx-auto px-6 border bg-primary">
              <h2 className="text-3xl text-center pb-6">Join Medium.</h2>
              <section className="flex flex-col gap-y-3 max-w-xs mx-auto w-full">
                <BtnIcon Icon={<FcGoogle size={23} />}>
                  Sign in with Google
                </BtnIcon>
                <BtnIcon Icon={<FaFacebook size={23} color="blue" />}>
                  Sign in with Facebook
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
                Forgot email or trouble signing in?{" "}
                <Link to={"/"}>Get help.</Link>
              </p>
              <p className="text-center text-sm">
                Click “Sign in” to agree to Medium’s Terms of Service and
                acknowledge that Medium’s Privacy Policy applies to you.
              </p>
            </section>
          </div>
        </>
      )}
    </div>
  );
}
