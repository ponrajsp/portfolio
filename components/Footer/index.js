import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contacts.</h1>
          <div className="mt-10">
            {/* <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Schedule a call</Button> */}
            <h3>Email: <span style={{ fontWeight: '600'}}>ponrajsp20@gmail.com</span></h3>
            <h3>Phone: <span style={{ fontWeight: '600'}}>+855 98999762, +91 6385887536</span></h3>
            <h3>WhatsApp: <span style={{ fontWeight: '600'}}>+855 98999762</span></h3>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://ponraj-portfolio.vercel.app">
          <a className="underline underline-offset-1">Ponraj Subbaian</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
