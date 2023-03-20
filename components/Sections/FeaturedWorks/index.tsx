import React,{useState} from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

interface IProps{
  data:any
}
const FeaturedWorksSection:React.FC<IProps> = ({data}) => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at my University, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        {data?.projects?.map((project, idx) => (
          <MotionGridItem key={idx} colSpan={6} variants={fadeInUpSlower}>
           <FeaturedCard
            idx={idx+1}
            title={project?.title}
            src={`/projects/${project?.image}`}
            description={`${project?.description.substring(0,300)}...`}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="/"
            objectPosition="right 20%"
              isMobile={isMobile}
              detailedDescription={project?.description}
              technology={project?.technology}
          /> 
  
        </MotionGridItem>
        ))}
      </MotionGrid>
    </Stack>
  )
}

export default FeaturedWorksSection
