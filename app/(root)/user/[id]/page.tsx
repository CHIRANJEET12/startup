import React from 'react'
import Image from 'next/image';
import { auth } from "@/auth";
import { notFound } from 'next/navigation';
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import Userstartup from "@/components/Userstartup";

const pages = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const session = await auth;
  if(!session) {
    alert("please sign in first");
  }
  

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();
  console.log(user);
  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase font-bold text-center line-clamp-1">
              {user.name}
            </h3>
          </div>

          <Image
            src={user.image}
            alt={user.name}
            width={220}
            height={220}
            className="profile_image"
          />

          <p className="text-30-extrabold font-semibold mt-7 text-center">
            @{user?.username}
          </p>
          <p className="mt-1 text-center font-semibold text-14-normal">{user?.bio}</p>
        </div>

        <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
          <p className="font-medium text-30-bold">
            {session?.id === id ? "Your" : "All"} Startups
            <Userstartup id={id}/>
          </p>
        </div>
      </section>
    </>
  )
}

export default pages
