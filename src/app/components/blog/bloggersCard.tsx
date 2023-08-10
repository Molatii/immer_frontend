"use client";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export type BloggersProps = {
  id: string;
  pinterestLink: string;
  instagramLink: string;
  twitterLink: string;
  facebookLink: string;
  bio: string;
  followers: number;
  bloggerName: string;
  bloggerImage: string;
};

const BloggersCard = ({
  id,
  pinterestLink,
  instagramLink,
  twitterLink,
  facebookLink,
  bio,
  followers,
  bloggerName,
  bloggerImage,
}: BloggersProps) => {
  const bioInfo = bio.split("\n").slice(0, 2).join("\n");
  const aspectRatio = 24 / 24;
  const calculatedHeight = Math.round(24 / aspectRatio);

  const socialMediaLinks = [
    { icon: <FaFacebook />, url: facebookLink },
    { icon: <FaTwitter />, url: twitterLink },
    { icon: <FaPinterest />, url: pinterestLink },
    { icon: <FaInstagram />, url: instagramLink },
  ];

  return (
    <div
      style={{ boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className="flex flex-col bg-white h-[190px] content-center p-2 pb-3 pt-3 mb-7"
    >
      <div id="TopBloggerProfile" className="mb-3 flex flex-raw">
        <div id="imageRow">
          <Image
            className="rounded-full border-none ml-1"
            src={bloggerImage}
            width={80}
            height={80}
            alt="blogger-image"
            priority
          />
        </div>
        <div id="bloggersInfoRow" className="flex flex-col w-full ml-2 mt-2 ">
          <div id="nameAndSocials" className="flex flex-row justify-between">
            <div id="nameRow">
              <Link href={`/${id}`}>
                <p className="text-primary text-base font-medium not-italic leading-5 tracking-[-0.5px]">
                  {bloggerName}
                </p>
              </Link>
            </div>
            <div id="socials-raw" className="flex flex-row">
              {socialMediaLinks.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[26px] h-5 bg-white text-[#232323]"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div id="followers" className="flex flex-row mt-1">
            <Image
              src="/assets/blog/man.png"
              width={24}
              height={calculatedHeight}
              alt="man-icon"
              priority
            />
            <p className="text-[#2B262C] text-xs font-normal leading-[18px] mt-2 ml-1">
              {followers}
            </p>
          </div>
        </div>
      </div>
      <div
        id="DownBioTitle"
        className=" h-[35px] justify-start items-start mb-2"
      >
        <p className="text-left text-lg font-semibold text-[#2B262C] leading-[25px]">
          Blogger Brief Bio
        </p>
      </div>
      <div id="bio">
        <p className="text-[#747474] text-sm font-normal not not-italic leading-[18px] line-clamp-2">
          {bioInfo}
        </p>
      </div>
    </div>
  );
};

export default BloggersCard;
