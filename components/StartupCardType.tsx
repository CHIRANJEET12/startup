import React from 'react'
import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from 'next/link';
import Image from 'next/image';


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
            <div className='flex-between'>
                <p className='startup-card_date'>
                    {formatDate(post._createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className="size-9 text-pink-500" />
                    <span className='text-2xl font-bold'>
                        {post.views}
                    </span>
                </div>
                <div className='flex-between gap-5'>
                    <div className='flex-1'>
                        <Link href={`/user/${post.author?._id}`}>
                            <p className='text-3xl font-bold line-clamp-1'>{post.author?.name}</p>
                        </Link>
                        <Link href={`/startup/${post._id}`}>
                            <h3 className='text-2xl font-semibold line-clamp-1'>
                                {post.description}
                                <Image src={post.image} className='startup-card_img' alt='Image' width={800} height={600} />
                            </h3>
                        </Link>
                        {/* <Link href={`/user/${post.author?._id}`}>
                    </Link> */}
                    </div>
                </div>
            </div>
        </li>
    )
}
