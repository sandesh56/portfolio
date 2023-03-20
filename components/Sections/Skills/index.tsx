import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiReact,
  SiAmazonaws,
  SiSpringboot,
  SiNextdotjs
} from 'react-icons/si'
import { IoMdOpen } from 'react-icons/io'
import dynamic from 'next/dynamic'
import { FaNodeJs } from 'react-icons/fa'
const SkillSetModal = dynamic(() => import('../Skills/SkillSetModal'))

type ISkillSetModal = {
  data:any
}

const Skills = ({data}: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
    const currentYear = new Date().getFullYear()
     const { isOpen, onOpen, onClose } = useDisclosure()
  

    return (
        <>
        <SkillSetModal isOpen={isOpen} onClose={onClose} />
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        My Skills.
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
           <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAmazonaws} color={emphasis} fontSize="2em" />
            Amazon Web Services
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaNodeJs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
           <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiSpringboot} color={emphasis} fontSize="2em" />
            Spring Boot
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full skills <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
        </>
  )
}

export default memo(Skills)
