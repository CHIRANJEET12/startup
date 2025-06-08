import React from 'react';
import { formatDate } from "@/lib/utils";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { notFound } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import markdownit from "markdown-it";
import { Skeleton } from '@/components/ui/skeleton';
import { View } from '@/components/View';

const md = markdownit();

const page = async ({ params }: { params: Promise<{ id?: string }> }) => {
    const id = (await params).id;
    if (!id) return notFound();
    const { data: post } = await sanityFetch({ query: STARTUP_BY_ID_QUERY, params: { id } });

    // console.log("Author Data:", post.author);

    if (!post) return notFound();

    const parsedContent = md.render(post?.pitch || "");

    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <p className="tag">{formatDate(post?._createdAt)}</p>

                <h1 className="heading">
                    <span className="block max-w-[300px] truncate">
                        {post.title}
                    </span>
                </h1>
                <p className="sub-heading !max-w-5xl">{post.description}</p>
            </section>

            <section className="section_container">
                <img
                    src={post.image}
                    alt="thumbnail"
                    className="w-full max-w-[600px] h-auto rounded-xl mx-auto"
                />


                <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                    <div className="flex items-center justify-between gap-5">
                        <Link
                            href={`/user/${post.author?._id}`}
                            className="flex gap-2 items-center mb-3"
                        >
                            {post.author?.image && (
                                <Image
                                    src={post.author.image}
                                    alt="avatar"
                                    width={48}
                                    height={48}
                                />
                            )}

                            <div>
                                {post.author?.name && (
                                    <div>
                                        <p className="font-semibold text-20-medium">{post.author.name}</p>
                                        <p className="font-semibold text-16-medium !text-black-300">
                                            @{post.author.username}
                                        </p>
                                    </div>
                                )}

                            </div>
                        </Link>

                        <p className="category-tag">{post.category}</p>
                    </div>
                    <h3 className='text-3xl font-bold'>Pitch Details</h3>
                    {parsedContent ? (
                        <article
                            className="prose max-w-4xl font-mono font-medium break-all"
                            dangerouslySetInnerHTML={{ __html: parsedContent }}
                        />
                    ) : (
                        <p className="no-result">No details provided</p>
                    )}
                </div>

                <hr className="divider" />

                <Suspense fallback={<Skeleton className="view_skeleton" />}>
                    <View id={id} />
                </Suspense>

            </section>
        </>
    )
}

export default page