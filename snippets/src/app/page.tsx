import Link from 'next/link'
import { db } from "@/db"

export default async function Home() {
  const snippets = await db.snippet.findMany()
  console.log('snippets: ', snippets)

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link 
        href={`/snippets/${snippet.id}`}
        key={snippet.id} 
        className='flex justify-between items-center p-2 border rounded'
      >
        <h2>{snippet.title}</h2>
        <h3>View</h3>
      </Link>
    )
  })

  return (
    <div>
      <div className='flex m-2 justify-between items-center'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link 
          href='/snippets/new' 
          className='border p-2 rounded'
        >
            New
        </Link>
      </div>

      <div className='flex flex-col gap-2'>
        {renderedSnippets}
      </div>
    </div>
  )
}
