import { formatDistanceToNow, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaCalendarDay,
  FaComment
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

interface IssueCardProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  issue: {
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
}

export function IssueCard(props: IssueCardProps) {
  const { issue, className = '', ...rest } = props

  const formattedCreatedDate = formatDistanceToNow(
    parseISO(issue.created_at),
    { locale: ptBR, addSuffix: true }
  )

  return (
    <div
      className={`rounded-lg bg-base-profile py-8 px-10 min-h-[10px] flex flex-col ${className}`}
      {...rest}
    >
      <div className='flex flex-row mb-5'>
        <NavLink
          to='/'
          className='grow flex flex-row items-center gap-2 text-blue font-bold text-xs'
        >
          <FaChevronLeft />
          VOLTAR
        </NavLink>
        <a
          href={issue.html_url}
          target='_blank'
          className='flex flex-row items-center gap-2 text-blue font-bold text-xs'
        >
          VER NO GITHUB
          <FaExternalLinkAlt />
        </a>
      </div>

      <h1 className='mb-3'>{issue.title}</h1>

      <div className='mt-auto flex flex-row gap-6'>
        <a
          href={issue.user.html_url}
          target='_blank'
          className='text-base-subtitle flex flex-row items-center'
        >
          <FaGithub className='text-base-label mr-2' />
          {issue.user.login}
        </a>
        <div className='text-base-subtitle flex flex-row items-center'>
          <FaCalendarDay className='text-base-label mr-2' />
          {formattedCreatedDate}
        </div>
        <div className='text-base-subtitle flex flex-row items-center'>
          <FaComment className='text-base-label mr-2' />
          {issue.comments} comentários
        </div>
      </div>
    </div>
  )
}
