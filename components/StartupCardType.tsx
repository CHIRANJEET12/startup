import React from 'react'
import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";


type posttype = {
    _createdAt: string,
    views: number,
    author: { _id: number, name: string },
    _id: number,
    description: string,
    image: string,
    category: string,
    title: string,
}


export const StartupCardType = ({ post }: { post: posttype }) => {
    return (
        <li className='startup-card group'>
            <div className='flex-between '>
                <div className='startup-card_date'>
                    {formatDate(post._createdAt)}
                    <div className='flex gap-1.5'>
                        <EyeIcon className="size-5 text-pink-500" />
                        <span className='text-sm font-bold'>
                            {post.views}
                        </span>
                    </div>
                </div>
                <br />

                <div className='flex gap-5'>
                    <div className='flex-1'>
                        <Link href={`/user/${post.author?._id}`}>
                            <p className='text-3xl font-bold line-clamp-1'>{post.author?.name}</p>
                        </Link>
                    </div>
                    <Link href={`/user/${post.author?._id}`}>
                        <Image src="https://placehold.co/48x48" alt='placeholder' width={48} height={48} className='rounded-full' />
                    </Link>
                </div>
                <Link href={`/startup/${post._id}`}>
                    <h3 className='text-2xl font-semibold line-clamp-1'>
                        {post.description}
                        <Image src={post.image} className='startup-card_img' alt='Image' width={800} height={600} />
                    </h3>
                </Link>

                <div className='flex justify-between items-center gap-3 mt-5'>
                    <Link href={`/?query=${post.category.toLowerCase()}`}>
                        <p className='text-16 font-medium'>{post.category}</p>
                    </Link>
                    <Button className="startup-card-btn" asChild>
                        <Link href={`/startup/${post._id}`}>
                            Details
                        </Link>
                    </Button>
                </div>
            </div>
        </li>
    )
}
