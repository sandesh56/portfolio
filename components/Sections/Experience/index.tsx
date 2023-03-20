import React,{ memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'

interface IProps{
  data:any
}
const DetailSection:React.FC<IProps> = ({data}) => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Experience
    </Heading>
    <ExperienceTab data={data} />
  </Stack>
)

export default memo(DetailSection)
