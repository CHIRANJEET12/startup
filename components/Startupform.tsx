'use client'


import React, {useState} from 'react'
import { Input } from "@/components/ui/input"

const Startupform = () => {
    const [error, setError] = useState<Record<string, string>>({});
  return (
    <form action={()=>{}} className='startup-form'>
        <div>
            <label htmlFor="title" className='startup-form_label'>Titles</label>
            <Input 
                id="title"
                name="title"
                className="startup_form_label"
                required
                placeholder="Stratup Title"
            />
        </div>
         <div>
            <label htmlFor="title" className='startup-form_label'>Titles</label>
            <Input 
                id="title"
                name="title"
                className="startup_form_label"
                required
                placeholder="Stratup Title"
            />
        </div>
         <div>
            <label htmlFor="title" className='startup-form_label'>Titles</label>
            <Input 
                id="title"
                name="title"
                className="startup-form_label"
                required
                placeholder="Stratup Title"
            />
        </div>
         <div>
            <label htmlFor="title" className='startup-form_label'>Titles</label>
            <Input 
                id="title"
                name="title"
                className="startup-form_label"
                required
                placeholder="Stratup Title"
            />
        </div>
    </form>
  )
}

export default Startupform