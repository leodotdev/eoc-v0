"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

// Real Instagram posts data from @eocpeople
const instagramPosts = [
  {
    id: 1,
    imageUrl: "/instagram-posts/post1.jpg",
    caption:
      "Our event staff does more than greet — they engage, connect, and leave lasting impression, blending warmth and professionalism to elevate every guest interaction. #eventexcellence #miamievents #eventstaffing",
    postUrl: "https://www.instagram.com/p/C5XQh8YrJ5Y/",
  },
  {
    id: 2,
    imageUrl: "/instagram-posts/post2.jpg",
    caption:
      "EOC provides professional brand ambassadors who represent your company with excellence and enthusiasm. #brandambassadors #marketing #eventmanagement",
    postUrl: "https://www.instagram.com/p/C5B7vSRLbaq/",
  },
  {
    id: 3,
    imageUrl: "/instagram-posts/post3.jpg",
    caption:
      "From conferences to trade shows, our staff delivers exceptional service that elevates your event experience. #conferencestaff #tradeshow #customerservice",
    postUrl: "https://www.instagram.com/p/C4xZpLYL_7I/",
  },
  {
    id: 4,
    imageUrl: "/instagram-posts/post4.jpg",
    caption:
      "Looking for administrative support? Our skilled professionals can help your office run smoothly during busy periods. #administrative #officestaffing #tempsupport",
    postUrl: "https://www.instagram.com/p/C4i2KVLL34D/",
  },
  {
    id: 5,
    imageUrl: "/instagram-posts/post5.jpg",
    caption:
      "Proud to have worked with amazing clients like FIME, Rolls-Royce, and the Miami Marathon! #clients #partnerships #eventproduction",
    postUrl: "https://www.instagram.com/p/C4TZ_Y9LWPs/",
  },
  {
    id: 6,
    imageUrl: "/instagram-posts/post6.jpg",
    caption:
      "Our hospitality staff knows how to make your guests feel welcome and valued. Let us help create memorable experiences! #hospitality #guestexperience #events",
    postUrl: "https://www.instagram.com/p/C4FYFxfLcW-/",
  },
  {
    id: 7,
    imageUrl: "/instagram-posts/post7.jpg",
    caption:
      "Building connections at events is our specialty. Our staff creates meaningful interactions that resonate with attendees long after the event ends. #networking #eventstaff #connectionsmatter",
    postUrl: "https://www.instagram.com/p/C2jKlqwrgYq/",
  },
  {
    id: 8,
    imageUrl: "/instagram-posts/post8.jpg",
    caption:
      "Professional registration and check-in services that make your guests feel welcomed from the moment they arrive. #eventregistration #firstimpressions #professionalstaff",
    postUrl: "https://www.instagram.com/p/C2VAjwGLNx_/",
  },
  {
    id: 9,
    imageUrl: "/instagram-posts/post9.jpg",
    caption:
      "EOC provides multilingual staff to ensure seamless communication with all your international guests and attendees. #multilingual #globalevents #communicationskills",
    postUrl: "https://www.instagram.com/p/C11g8HoLdVn/",
  },
  {
    id: 10,
    imageUrl: "/instagram-posts/post10.jpg",
    caption:
      "Our event coordinators ensure every detail is perfectly executed, allowing you to focus on the bigger picture. #eventcoordination #detailoriented #eventplanning",
    postUrl: "https://www.instagram.com/p/C1oE7ZCrF0R/",
  },
  {
    id: 11,
    imageUrl: "/instagram-posts/post11.jpg",
    caption:
      "Trade show success starts with exceptional booth staff. Our experienced professionals know how to attract and engage potential clients. #tradeshow #boothstaff #leadgeneration",
    postUrl: "https://www.instagram.com/p/C1Qp9bErQ_h/",
  },
  {
    id: 12,
    imageUrl: "/instagram-posts/post12.jpg",
    caption:
      "EOC takes pride in providing staff that represents the diversity and vibrancy of Miami. #diversitymatters #miamistaffing #inclusiveevents",
    postUrl: "https://www.instagram.com/p/C1DbP39LfHP/",
  },
];

const InstagramGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {instagramPosts.map((post) => (
        <Link
          key={post.id}
          href={post.postUrl}
          className="aspect-square relative overflow-hidden group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={post.imageUrl}
            alt={`Instagram post: ${post.caption}`}
            fill
            className="rounded-sm object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-white">
            <Instagram className="h-8 w-8 mb-3" />
            <p className="text-sm text-center mb-2 line-clamp-2">
              {post.caption}
            </p>
            <span className="text-xs mt-1 underline">View Post</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InstagramGallery;
