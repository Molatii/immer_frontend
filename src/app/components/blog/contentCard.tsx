"use client";

import Link from "next/link";
import Image from "next/image";

type FeaturedEventsProps = {
  id: string;
  eventDate: string;
  title: string;
  details: string;
  category: string;
  img: string;
  showHost: Boolean;
  hostTitle: string;
  hostName: string;
  hostImage: string;
};

const ContentCard = ({
  img,
  category,
  eventDate,
  title,
  details,
  showHost,
  hostTitle,
  hostName,
  hostImage,
  id,
}: FeaturedEventsProps) => {
  const truncatedDetails = details.split("\n").slice(0, 3).join("\n");

  return (
    <div
      style={{ boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className={`flex flex-col mb-8 p-4 h-[421px] bg-white rounded-md ${
        showHost ? "min-h-[515px]" : "h-[421px]"
      }`}
    >
      <div
        className="mb-3 w-full h-[259px] rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="flex justify-end p-3">
          <div className="text-white bg-primary w-20 p-2 h-7 rounded-lg">
            <Link href={`/event/${category}`}>
              <p className="text-[10px] font-bold uppercase text-center">
                {category}
              </p>
            </Link>
          </div>
        </div>
      </div>
      <p className="mb-1 text-[#232323] text-xs font-normal text-left ml-1">
        {eventDate}
      </p>
      <Link href={`/event/${id}`}>
        <p className="mb-3 text-lg font-bold text-primary text-left ml-1">
          {title}
        </p>
      </Link>
      <div className="h-[66px]">
        <p className="text-xs font-normal text-[#232323] pb-1 line-clamp-3 text-left ml-1">
          {truncatedDetails}
        </p>
      </div>

      {showHost && (
        <Link href="/author">
          <hr className="my-5" />
          <div id="host-section" className="flex flex-row">
            <Image
              className="rounded-full border-none ml-1"
              src={hostImage}
              width={55}
              height={55}
              alt="host-image"
              priority
            />
            <div className="flex flex-col w-full">
              <p className="ml-3 mt-2 leading-5 text-left text-xs font-bold not-italic text-[#343A40]">
                By {hostName}
              </p>
              <p className="text-xs ml-3 text-left leading-5 font-normal not-italic text-[#6C757D]">
                {hostTitle}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ContentCard;
