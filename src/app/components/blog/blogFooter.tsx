"use client";

import Link from "next/link";
import Image from "next/image";

const BlogFooter = () => {
  return (
    <footer className="bg-[#0D0D0D] md:p-12 p-4 mb-0">
      <section id="upper-footer" className="w-full">
        <div
          className="grid gap-x-1 grid-cols-1 sm:grid-cols-2 lg:gap-x-2 
          text-white justify-start text-start pt-4 pb-10 p-1"
        >
          <div className="w-full flex flex-row justify-between">
            <div className=" w-3/5 flex flex-col">
              <p className="text-white lg:text-[32px] text-2xl font-semibold not-italic lg:leading-[43px] leading-none">
                Logo
              </p>
              <p className="text-white text-base font-medium not-italic mt-[15px] sm:w-2/3 w-4/5">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div
                id="follow-social"
                className="flex flex-row lg:gap-1 md:gap-0 gap-0
               lg:mt-[75px] md:mt-14 mt-9 sm:pb-0 pb-8"
              >
                <p
                  className="lg:mr-2 md:mr-1 mr-4 lg:mt-1 md:mt-2 mt-2 lg:text-lg  text-base
                font-semibold not-italic"
                >
                  Follow Us
                </p>
                <Link href="https://www.instagram.com">
                  <Image
                    className="lg:ml-1 ml-0 mt-2"
                    src="/assets/blog/in.png"
                    width={20}
                    height={33}
                    alt="instagram-icon"
                    priority
                  />
                </Link>
                <Link href="https://www.pinterest.com">
                  <Image
                    className="lg:ml-1 ml-0 mt-2"
                    src="/assets/blog/pin.png"
                    width={20}
                    height={33}
                    alt="instagram-icon"
                    priority
                  />
                </Link>
                <Link href="https://www.facebook.com">
                  <Image
                    className="lg:ml-1 ml-0 mt-2"
                    src="/assets/blog/fb.png"
                    width={20}
                    height={33}
                    alt="instagram-icon"
                    priority
                  />
                </Link>
                <Link href="https://www.twitter.com">
                  <Image
                    className="lg:ml-1 ml-0 mt-2"
                    src="/assets/blog/t.png"
                    width={20}
                    height={33}
                    alt="instagram-icon"
                    priority
                  />
                </Link>
              </div>
            </div>
            <div className="w-2/5 flex flex-col text-white lg:pl-20 md:pl-6 pl-8">
              <p className="text-xl font-semibold not-italic">About</p>
              <p className="font-medium not-italic text-base sm:mt-10 mt-5 ">
                Our Platform
              </p>
              <p className="font-medium not-italic text-base mt-4">About Us</p>
              <p className="font-medium not-italic text-base mt-4">
                Partnership
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between">
            <div className=" sm:w-1/2 w-3/5 text-white  lg:pl-[120px] md:pl-6 sm:pl-8 pl-0">
              <p className="text-xl font-semibold not-italic">Community</p>
              <p className="font-medium not-italic text-base mt-10">Events</p>
              <p className="font-medium not-italic text-base mt-4">Blog</p>
              <p className="font-medium not-italic text-base mt-4">Podcast</p>
              <p className="font-medium not-italic text-base mt-4">
                Invite a friend
              </p>
            </div>
            <div className="sm:w-1/2 w-2/5 text-white lg:pl-32 md:pl-6 pl-8">
              <p className="text-xl font-semibold not-italic">Socials</p>
              <p className="font-medium not-italic text-base mt-10">
                Instagram
              </p>
              <p className="font-medium not-italic text-base mt-4">Instagram</p>
              <p className="font-medium not-italic text-base mt-4">Facebook</p>
              <p className="font-medium not-italic text-base mt-4">Twitter</p>
            </div>
          </div>
        </div>
      </section>
      <hr className=" h-px w-full border-slate-800" />
      <section
        id="lower-footer"
        className="flex flex-row justify-between text-white lg:text-base text-xs font-semibold 
        not-italic tracking-tight leading-6 mt-8"
      >
        <div className="justify-start">
          <p className="text-start">©2023 immer. All rights reserved</p>
        </div>
        <div className="justify-end flex flex-row text-end lg:gap-14 gap-6">
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </section>
    </footer>
  );
};

export default BlogFooter;
