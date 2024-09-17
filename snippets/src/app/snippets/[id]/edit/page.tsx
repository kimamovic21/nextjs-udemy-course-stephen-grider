import { notFound } from 'next/navigation'
import { db } from '@/db'
import Link from 'next/link'
import SnippetEditForm from '@/components/SnippetEditForm'

interface SnippetEditPageProps {
    params: {
        id: string
    }
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id)
  const snippet = await db.snippet.findFirst({
    where: { id: id }
  })

  if (!snippet) {
    notFound()
  }

  return (
    <div className='mt-10'>
        <Link href={`/snippets/${id}`} className='p-2 border rounded'>
            Back
        </Link>

        <SnippetEditForm snippet={snippet} />
    </div>
  )
}
