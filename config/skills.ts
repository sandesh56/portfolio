import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiChakraui,
  SiGit,
  SiVisualstudiocode,
  SiMicrosoft,
  SiSpringboot,
  SiAngular,
  SiAmazonaws,
  SiCircleci,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiUbuntu,
  SiIntellijidea,
  SiEclipseide,
} from 'react-icons/si'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaNodeJs } from 'react-icons/fa'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
  level:number
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node',
      icon: FaNodeJs,
      level:90
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
      level:95
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
      level:85
    },
    {
      name: 'Graphql (JS)',
      icon: SiGraphql,
      level:50
    },
    {
      name: 'Java (Spring Boot)',
      icon: SiSpringboot,
      level:90
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
      level:98
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
      level:95
    },
    {
      name: 'HTML5',
      icon: SiHtml5,
      level:98
    },
    {
      name: 'CSS3',
      icon: SiCss3,
      level:98
    },
    ,
     {
      name: 'Angular',
      icon: SiAngular,
      level:80
    }
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      level:80
    },
    {
      name: 'MySQL',
      icon: SiMysql,
      level:80
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
      level:95
    },
    {
      name: 'Redis',
      icon: SiRedis,
      level:40
    }
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
      level:5
    },
    {
      name: 'AWS',
      icon: SiAmazonaws,
      level:80
    },
    {
      name: 'CircleCI',
      icon: SiCircleci,
      level:50
    }
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
      level:90
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
      level:90
    },
    {
      name: 'ChakraUI',
      icon: SiChakraui,
      level:90
      
    },
    {
      name: 'Bootstrap',
      icon: SiBootstrap,
      level:90
      
    }
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
      level:95
    },
     {
      name: 'IntelliJ',
      icon: SiIntellijidea,
      level:95
    },
     {
      name: 'Eclipse',
      icon: SiEclipseide,
      level:95
    },
    {
      name: 'Git',
      icon: SiGit,
      level:95
    }
  ],
  desktop: [
    {
      name: 'Windows',
      icon: SiMicrosoft,
      level:90
    },
    {
      name: 'Linux (Ubuntu)',
      icon: SiUbuntu,
      level:90
    }
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
