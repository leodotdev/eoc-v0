import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

// Sample Instagram posts data
const instagramPosts = [
  {
    id: 1,
    imageUrl: "/instagram/post1.jpg",
    caption:
      "Another successful event with our wonderful staff! #eventstaff #professionalism",
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    imageUrl: "/instagram/post2.jpg",
    caption:
      "Our team providing exceptional service at the annual tech conference #conferences #excellence",
    likes: 98,
    comments: 12,
  },
  {
    id: 3,
    imageUrl: "/instagram/post3.jpg",
    caption:
      "Hospitality is our specialty. Our team making guests feel welcome! #hospitality #service",
    likes: 156,
    comments: 21,
  },
  {
    id: 4,
    imageUrl: "/instagram/post4.jpg",
    caption:
      "Meet our amazing brand ambassadors ready to represent your company #brandambassadors",
    likes: 102,
    comments: 15,
  },
  {
    id: 5,
    imageUrl: "/instagram/post5.jpg",
    caption:
      "Providing administrative support to corporate clients #administrative #professionalstaff",
    likes: 89,
    comments: 8,
  },
  {
    id: 6,
    imageUrl: "/instagram/post6.jpg",
    caption:
      "Working with businesses to create memorable experiences #partnerships #events",
    likes: 132,
    comments: 24,
  },
];

const InstagramGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {instagramPosts.map((post) => (
        <Link
          key={post.id}
          href="https://www.instagram.com/eocpeople/"
          className="aspect-square relative overflow-hidden group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={post.imageUrl}
            alt={`Instagram post: ${post.caption}`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-white">
            <Instagram className="h-8 w-8 mb-3" />
            <p className="text-sm text-center mb-2 line-clamp-2">
              {post.caption}
            </p>
            <div className="flex items-center text-xs">
              <span className="mr-3">{post.likes} likes</span>
              <span>{post.comments} comments</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InstagramGallery;
