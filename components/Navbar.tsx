import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth, signOut, signIn } from '@/auth';
import { FaGithub } from "react-icons/fa";
import { redirect } from 'next/dist/server/api-utils';

export const Navbar = async () => {
    const session = await auth();
    // console.log(session);


    return (
        <header className="px-5 py-3 bg-white shadow-sm font-bold">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <span className='text-blue-500'>Cue</span><span className='text-black'>Dot</span>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session?.user ? (
                        <>
                            <Link href="/startup1/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                'use server';
                                await signOut({ redirectTo: "/" });
                            }}>
                                <button type="submit">
                                    <span className='text-blue-500'>Logout</span>
                                </button>
                            </form>

                            <Link href={`/user/${session.user.id}`}>
                                <Image className='border-2 rounded-full border-black hover:border-4 transition-all duration-200' src={session.user.image || "../public/Group 5.png"} alt='user-image' width={48} height={48} />
                            </Link>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server";

                                await signIn('github');
                            }}
                        >
                            <button type="submit">
                                <span className="flex items-center gap-2 max-sm:hidden border border-transparent hover:border-blue-950 px-2 py-1 rounded transition-all">
                                    <FaGithub className="w-5 h-5" />
                                    GitHub
                                </span>


                                {/* <LogOut className="size-6 sm:hidden text-red-500" /> */}
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};
