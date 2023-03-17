import {
  MdWebAssetOff,
  MdWebAsset
} from 'react-icons/md'
import { GitHubIcon } from '@/components/SocialIcons'
import { SocialLink } from './SocialIcons'

function Card({ item, index, items }) {
  return (
    <article className={`${items.length - 1 === index ? "" : "border-l-2 border-teal-600"}`}>
      <div className="flex flex-start">
        <div className="bg-teal-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3" />
        <section className="block rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 px-6 pt-2 pb-6 w-full ml-6 mb-6">
          <header class="flex mb-1 flex-wrap">
            <span className="text-xs font-semibold text-teal-900 dark:text-teal-500 w-full">{item.date}</span>
            <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-500">{item.title}</h3>
          </header>
          <section className="flex flex-wrap">
            {item.description && <p class="text-xs text-zinc-600 dark:text-zinc-400 w-full">{item.description}</p>}
            {item.techs && <p class="text-xs text-zinc-600 dark:text-zinc-400 w-full">Working with: {item.techs}</p>}
          </section>
          <footer className='mt-4 gap-2 flex'>
            {item.github && <SocialLink href={item.github} icon={GitHubIcon} />}
            {item.demo && <SocialLink href={item.demo} icon={MdWebAsset} />}
          </footer>
        </section>
      </div>
    </article>
  )
}

export default Card