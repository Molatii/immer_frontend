type ButtonProps = {
  btnName: string;
  btnAddress: string;
}[];

export const BtnProps: ButtonProps = [
  {
    btnName: "For Entertainers",
    btnAddress: "/blog",
  },
  {
    btnName: "For Vendors",
    btnAddress: "/blog",
  },
  {
    btnName: "For Organizers",
    btnAddress: "/blog",
  },
  {
    btnName: "For Administrator",
    btnAddress: "/blog",
  },
  {
    btnName: "For Content Creators",
    btnAddress: "/blog",
  },
];

export type FeaturedEventsProps = {
  id: string;
  eventDate: string;
  title: string;
  details: string;
  category: string;
  img: string;
  hostTitle: string;
  hostName: string;
  hostImage: string;
}[];

export const FeaturedContent: FeaturedEventsProps = [
  {
    id: "95m",
    hostImage: "/assets/blog/host1.svg",
    hostName: "Ashton Choi",
    hostTitle: "Comedian",
    eventDate: "12/12/23",
    category: "Popular",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    img: "/assets/blog/f1.png",
  },
  {
    id: "05m",
    hostImage: "/assets/blog/host2.svg",
    hostName: "Taylor Huston",
    hostTitle: "Event Organizer",
    eventDate: "12/12/23",
    category: "Trending",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    img: "/assets/blog/f2.png",
  },
  {
    id: "25u",
    hostImage: "/assets/blog/host3.svg",
    hostName: "Cory Hill",
    hostTitle: "DJ",
    eventDate: "12/12/23",
    category: "Popular",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    img: "/assets/blog/f3.png",
  },
  {
    id: "55j",
    hostImage: "/assets/blog/host4.svg",
    hostName: "Anna .W",
    hostTitle: "Entertainer",
    eventDate: "12/12/23",
    category: "Trending",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    img: "/assets/blog/f4.png",
  },
  {
    id: "55j",
    hostImage: "/assets/blog/host4.svg",
    hostName: "Anna .W",
    hostTitle: "Entertainer",
    eventDate: "12/12/23",
    category: "Trending",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    img: "/assets/blog/f4.png",
  },
];

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
}[];

export const BloggersData: BloggersProps = [
  {
    id: "55j",
    pinterestLink: "https://www.pinterest.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/",
    facebookLink: "https://www.facebook.com/",
    bio: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    followers: 4500,
    bloggerName: "Frank Sinatra",
    bloggerImage: "/assets/blog/b1.svg",
  },
  {
    id: "8j",
    pinterestLink: "https://www.pinterest.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/",
    facebookLink: "https://www.facebook.com/",
    bio: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    followers: 4500,
    bloggerName: "Frank Sinatra",
    bloggerImage: "/assets/blog/b2.svg",
  },
  {
    id: "8lj",
    pinterestLink: "https://www.pinterest.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/",
    facebookLink: "https://www.facebook.com/",
    bio: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    followers: 4500,
    bloggerName: "Frank Sinatra",
    bloggerImage: "/assets/blog/b3.svg",
  },
  {
    id: "88j",
    pinterestLink: "https://www.pinterest.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/",
    facebookLink: "https://www.facebook.com/",
    bio: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    followers: 4500,
    bloggerName: "Frank Sinatra",
    bloggerImage: "/assets/blog/b4.svg",
  },
  {
    id: "85j",
    pinterestLink: "https://www.pinterest.com/",
    instagramLink: "https://www.instagram.com/",
    twitterLink: "https://twitter.com/",
    facebookLink: "https://www.facebook.com/",
    bio: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    followers: 4500,
    bloggerName: "Frank Sinatra",
    bloggerImage: "/assets/blog/b5.svg",
  },
];
