import {
  FaGithub,
  FaExternalLinkAlt,
  FaBuilding,
  FaUserFriends
} from 'react-icons/fa'

interface GithubUserCardProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  githubUser: {
    avatar_url: string
    bio: string
    followers: number
    name: string
    company: string
    html_url: string
    login: string
  }
}

export function GithubUserCard(props: GithubUserCardProps) {
  const { githubUser, className = '', ...rest } = props

  return (
    <div
      className={`rounded-lg bg-base-profile py-8 px-10 min-h-[10px] flex ${className}`}
      {...rest}
    >
      <img
        src={githubUser.avatar_url}
        className='w-[148px] y-[148px] rounded-md overflow-hidden mr-8'
      />
      <div className='flex flex-col grow'>
        <div className='flex flex-row mb-2'>
          <h2 className='grow font-bold text-2xl'>{githubUser.name}</h2>
          <a
            href={githubUser.html_url}
            target='_blank'
            className='flex flex-row items-center gap-2 text-blue font-bold text-xs'
          >
            GITHUB
            <FaExternalLinkAlt />
          </a>
        </div>
        <p className='mb-3'>{githubUser.bio}</p>
        <div className='mt-auto flex flex-row gap-6'>
          <div className='text-base-subtitle flex flex-row items-center'>
            <FaGithub className='text-base-label mr-2' />
            {githubUser.login}
          </div>
          <div className='text-base-subtitle flex flex-row items-center'>
            <FaBuilding className='text-base-label mr-2' />
            {githubUser.company}
          </div>
          <div className='text-base-subtitle flex flex-row items-center'>
            <FaUserFriends className='text-base-label mr-2' />
            {githubUser.followers} seguidores
          </div>
        </div>
      </div>
    </div>
  )
}
