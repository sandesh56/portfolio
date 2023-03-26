import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/sandeshRauth',
    icon: FaTwitter,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sandesh-rauth-7815bb1a7/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/sandesh56',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/sandesh56',
    icon: FaDev,
  },
]
