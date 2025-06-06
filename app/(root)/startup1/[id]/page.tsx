import React from 'react';
import { formatDate } from "@/lib/utils";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: Promise<{ id?: string }> }) => {
    const id = (await params).id;
    const { data: post } = await sanityFetch({ query: STARTUP_BY_ID_QUERY, params: { id } });

    if (!post) return notFound();

    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <p className="tag">{formatDate(post?._createdAt)}</p>

                <h1 className="heading">{post.title}</h1>
                <p className="sub-heading !max-w-5xl">{post.description}</p>
            </section>

            <section className="section_container">
                <img
                    src={post.image}
                    alt="thumbnail"
                    className="w-full h-auto rounded-xl"
                />
                <h3 className='text-5xl'>
                    {post.description}
                </h3>
            </section>
        </>
    )
}

export default page