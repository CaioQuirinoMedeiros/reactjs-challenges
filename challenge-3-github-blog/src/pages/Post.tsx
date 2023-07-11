import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { api } from '../lib/axios'
import { IssueCard } from '../components/IssueCard'

type Issue = {
  html_url: string
  id: number
  title: string
  user: {
    login: string
    html_url: string
  }
  comments: number
  comments_url: string
  created_at: string
  body: string
}

export function Post() {
  const params = useParams<'issueNumber'>()

  const [issue, setIssue] = React.useState<Issue>()

  const issueNumber = params.issueNumber || ''

  React.useEffect(() => {
    async function getIssue() {
      const response = await api.get<Issue>(
        `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`
      )

      setIssue(response.data)
    }

    if (issueNumber) {
      getIssue().catch(() => {
        alert('Houve um erro ao consultar o post')
      })
    }
  }, [issueNumber])

  if (!issue) return null

  return (
    <main className='max-w-5xl mx-auto px-6 flex flex-col'>
      <IssueCard issue={issue} className='mt-[-100px] flex' />

      <div className='p-10'>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </div>
    </main>
  )
}
