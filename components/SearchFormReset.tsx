"use client"

import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export const SearchFormReset = () => {

    const reset = () => {
        const form = document.querySelector(".search-from") as HTMLFormElement
        if (form) form.reset();
    }
    return (
        <div>
            <button type='reset' className='search-btn' onClick={reset}>
                <X className="size-6"/>
            </button>
        </div>
    )
}
