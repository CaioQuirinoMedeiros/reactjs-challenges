/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call  */
import * as React from 'react'
import { api } from '../lib/axios'
import ReactMarkdown from 'react-markdown'
import debounce from 'lodash.debounce'
import { GithubUserCard } from '../components/GithubUserCard'
import { formatDistanceToNow, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { NavLink } from 'react-router-dom'

type GitHubUser = {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  login: string
  name: string
}

type GithubIssue = {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

type GetIssuesResponse = {
  items: GithubIssue[]
}

export function Home() {
  const [myGithubUser, setMyGithubUser] = React.useState<GitHubUser>()
  const [query, setQuery] = React.useState('')
  const [githubIssues, setGithubIssues] = React.useState<GithubIssue[]>([])

  React.useEffect(() => {
    async function getMyGihubUser(): Promise<void> {
      const response = await api.get<GitHubUser>('/users/CaioQuirinoMedeiros')
      setMyGithubUser(response.data)
    }

    getMyGihubUser().catch(() => {
      alert('Erro ao buscar usuário')
    })
  }, [])

  const searchIssues = React.useCallback(async (q: string) => {
    const response = await api.get<GetIssuesResponse>('/search/issues', {
      params: {
        q: `repo:rocketseat-education/reactjs-github-blog-challenge ${q}`
      }
    })

    setGithubIssues(response.data.items)
  }, [])

  const searchIssuesDebounced = React.useMemo(() => {
    return debounce(searchIssues, 1200) as (q: string) => void
  }, [searchIssues])

  React.useEffect(() => {
    searchIssuesDebounced(query)
  }, [searchIssuesDebounced, query])

  if (!myGithubUser) return null

  return (
    <main className='max-w-5xl mx-auto px-6 flex flex-col'>
      <GithubUserCard githubUser={myGithubUser} className='mt-[-100px] flex' />

      <div className='flex flex-col mt-16 mb-12'>
        <div className='flex flex-row items-center mb-3'>
          <h3 className='text-lg font-bold text-base-subtitle grow'>
            Publicações
          </h3>
          <span className='text-sm text-base-span'>6 publicações</span>
        </div>
        <input
          type='text'
          placeholder='Buscar conteúdo'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='rounded-md bg-base-input border border-base-border min-h-[50px] py-3 px-4 placeholder:text-base-label'
        />
      </div>

      <div className='grid grid-cols-[repeat(auto-fit,_minmax(26rem,1fr))] gap-8 justify-center mb-10'>
        {githubIssues.map((githubIssue) => {
          const formattedCreatedDate = formatDistanceToNow(
            parseISO(githubIssue.created_at),
            { locale: ptBR, addSuffix: true }
          )

          return (
            <NavLink
              to={`/post/${githubIssue.number}`}
              key={githubIssue.id.toString()}
              className='bg-base-post rounded-lg p-8 flex flex-col items-stretch border-2 border-base-post hover:border-base-label transition-colors'
            >
              <div className='flex flex-row items-center mb-5 gap-3'>
                <strong className='text-xl text-base-title font-bold grow text-left'>
                  {githubIssue.title}
                </strong>
                <span className='text-sm text-base-span text-right shrink-0'>
                  {formattedCreatedDate}
                </span>
              </div>
              <ReactMarkdown className='text-base-text'>
                {githubIssue.body?.substring(0, 200)}
              </ReactMarkdown>
            </NavLink>
          )
        })}
      </div>
    </main>
  )
}
