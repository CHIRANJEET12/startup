import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth, signOut, signIn } from '@/auth';
import { redirect } from 'next/dist/server/api-utils';

export const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-light">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/Group 5.png" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session?.user ? (
                        <>
                            <Link href="/start1-up/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                'use server';
                                await signOut({ redirectTo: "/" });
                            }}>
                                <button type="submit">
                                    <span>Logout</span>
                                </button>
                            </form>

                            <Link href={`/user/${session.user.id}`}>
                                <span>{session.user.name}</span>
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
                                <span className="max-sm:hidden">Login</span>
                                {/* <LogOut className="size-6 sm:hidden text-red-500" /> */}
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};
