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

                                <Image className='border-2 rounded-full border-black hover:border-4 transition-all duration-200' src={session.user.image || "../public/Group 5.png"} alt='user-image' width={48} height={48} />
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server";

                                await signIn('github');
                            }}
                        >
                            <button type="submit">
<span className="
  flex items-center gap-2 
  border border-transparent 
  hover:border-blue-950 
  px-2 py-1 rounded 
  transition-all duration-200
  max-xs:hidden  // Hide on extra small screens
  sm:inline-flex // Show from small screens up
  text-sm sm:text-base // Responsive text size
  hover:bg-blue-50 // Subtle hover background
">
  <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" /> {/* Responsive icon size */}
  <span className="hidden sm:inline">GitHub</span> {/* Text hidden on mobile */}
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
