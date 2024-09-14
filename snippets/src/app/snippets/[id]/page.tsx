import { notFound } from 'next/navigation'
import { db } from '@/db'

interface SnippetShowPageProps {
  params: {
    id: string
  } 
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  console.log('props: ', props)

  await new Promise((r) => setTimeout(r, 1000))

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) }
  })

  if (!snippet) {
    return notFound()
  }

  return (
    <div>
      <h2>{snippet.title}</h2>
    </div>
  )
}
