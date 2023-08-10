"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NavigationList } from "./demoData";

export default function BlogHeader() {
  const NavList = NavigationList;
  const [selectedNav, setSelectedNav] = useState("Blog");

  return (
    <header
      className="flex flex-row w-full sm:h-24 h-20 fixed z-20 top-0 left-0 justify-between items-center
        p-4 pt-1 pb-1 pr-4 md:pr-10 md:p-12 md:pt-7 md:pb-7 mt-0 border-b-8 border-primary bg-white"
    >
      <div
        id="company-name"
        className="text-left w-1/5 text-xl md:text-2xl lg:text-3xl font-bold not-italic"
      >
        <Link href="/blog" className="w-full flex flex-row gap-2">
          <p className="text-primary">Immer</p>
          <p className="text-slate-900">Blog</p>
        </Link>
      </div>

      <div
        id="Nav-container"
        className="hidden sm:flex sm:flex-row w-3/5 gap-4 lg:gap-16 md:gap-8 justify-center"
      >
        {NavList.map((NavData) => (
          <p
            key={NavData.NavAddress}
            className="lg:text-xl text-base not-italic font-normal"
            style={{
              color:
                NavData.NavName === selectedNav
                  ? "#ff6c00"
                  : "var(--light-color-base-primary-dark, #000)",
            }}
          >
            <Link
              href={NavData.NavAddress}
              onClick={() => setSelectedNav(NavData.NavName)}
            >
              {NavData.NavName}
            </Link>
          </p>
        ))}
      </div>

      <div
        id="btn-container"
        className="w-1/5 hidden sm:flex sm:flex-row md:gap-2 lg:gap-4 justify-end"
      >
        <Link href="https://www.instagram.com">
          <Image
            className="ml-1"
            src="/assets/blog/Instagram.png"
            width={33}
            height={33}
            alt="instagram-icon"
            priority
          />
        </Link>
        <Link href="https://www.pinterest.com">
          <Image
            className="ml-1"
            src="/assets/blog/Pinterest.png"
            width={33}
            height={33}
            alt="instagram-icon"
            priority
          />
        </Link>
        <Link href="https://www.facebook.com">
          <Image
            className="ml-1"
            src="/assets/blog/Facebook.png"
            width={33}
            height={33}
            alt="instagram-icon"
            priority
          />
        </Link>
        <Link href="https://www.twitter.com">
          <Image
            className="ml-1"
            src="/assets/blog/Twitter_Squared.png"
            width={33}
            height={33}
            alt="instagram-icon"
            priority
          />
        </Link>
      </div>

      {/* Menu Icon shown on small devices */}
      <div
        id="btn-container"
        className="w-1/5 flex flex-row gap-4 justify-end sm:hidden"
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
