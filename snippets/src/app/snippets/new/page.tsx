'use client'

import Link from 'next/link'
import { useFormState } from 'react-dom'
import { createSnippet } from '@/actions' 

export default function SnippetCreatePage() {
    const [formState, action] = useFormState(createSnippet, { message: '' })

    return (
        <form action={action} className='mt-10'>
            <Link href='/' className='p-2 border rounded'>
                Back
            </Link>
            
            <h3 className='my-6 font-bold'>Create a Snippet</h3>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <label className='w-12' htmlFor='title'>
                        Title
                    </label>
                    <input 
                        name='title'
                        id='title'
                        type='text'
                        className='border rounded p-2 w-full'
                    />
                </div>

                <div className='flex gap-4'>
                    <label className='w-12' htmlFor='code'>
                        Code
                    </label>
                    <textarea
                        name='code'
                        id='code'
                        className='border rounded p-2 w-full'
                    />
                </div>

                {formState.message ? (
                    <div className='my-2 p-2 bg-red-200 border rounded border-red-400'>
                        {formState.message}
                    </div>
                ) : null}

                <button type='submit' className='rounded p-2 bg-blue-200'>
                    Create
                </button>
            </div>
        </form>
    )
}