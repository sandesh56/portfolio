import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

type ISkillSetModal = {
  data:any
}

const Detail = ({data}: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()

  return (
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
        What i do.
      </Heading>
      <Text variant="description">
       {data?.bio?.aboutMe}
      </Text>
    </Stack>
  )
}

export default memo(Detail)
