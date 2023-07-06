"use client";

import Link from "next/link";
type EventsCardProps = {
  id: string;
  day: number;
  month: string;
  title: string;
  subTitle: string;
  price: number;
};

import Image from "next/image";

export default function EventCard({
  id,
  day,
  month,
  title,
  subTitle,
  price,
}: EventsCardProps) {
  return (
    <div
      key={id}
      className="flex-none w-11/12 md:w-1/3  bg-[url('/pic.jpg')] bg-no-repeat bg-cover  rounded-2xl mb-2 h-52"
    >
      <Link href={`/spectator/${id}`}>
        <div className="flex flex-col  w-full rounded-2xl  ">
          <div className="flex flex-row h-40 justify-between   pl-3 pr-3 pt-4">
            <div
              id="date-item"
              className="flex flex-col justify-center items-center h-12 w-fit p-3 bg-secondary rounded-xl"
            >
              <p className="text-sm text-primary  uppercase font-normal text-center">
                {day}
              </p>
              <p className="text-sm text-primary uppercase font-normal text-center">
                {month}
              </p>
            </div>
            <div
              id="icon-item"
              className="bg-transparent h-7 w-7 rounded-2xl p-1 border-solid border-2 border-primary"
            >
              <Image
                src="/vector-fire.svg"
                width={18}
                height={18}
                alt="vector-fire"
              />
            </div>
          </div>
          <div
            className="flex flex-row h-16 bg-white w-full justify-between pl-3 pr-3 pt-3 inset-y-0 shadow-md"
            style={{
              borderRadius: "0px 0px 15px 15px",
            }}
          >
            <div className="flex flex-col h-12 w-11/12 max-w-xs overflow-hidden">
              <p
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="text-sm text-black font-semibold mt-1"
              >
                {title}
              </p>
              <p
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="text-xs text-trending_subtext  mt-1 font-semibold"
              >
                {subTitle}
              </p>
            </div>
            <div className="pr-2 pl-2  h-12 justify-end">
              <p className="text-primary mt-2 text-xl text-end font-semibold">
                ${price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}