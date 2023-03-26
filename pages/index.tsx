/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Grid,
  GridItem,
  Stack,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import OpenGraphHead from 'components/Misc/OpenGraphHead'
import FadeInLayout from 'components/Layout/FadeWhenVisible'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import Avatar from 'components/Avatar'
import About from 'components/Sections/About'
import FeaturedWorks from 'components/Sections/FeaturedWorks'
import ScrollMore from 'components/Misc/ScrollMore'
import { Article } from 'types/article'
import { getBlogData, getData } from 'services/api/data'
import { useRef } from 'react'
const DevToArticles = dynamic(() => import('components/Sections/DevToArticles'))
import GetInTouch from 'components/Sections/GetInTouch'
import Skills from 'components/Sections/Skills'
import ExperienceAndEducationTab from 'components/Sections/ExperienceAndEducationTab'

const Portfolio = ({ articles, data }: { articles: Article[], data: any }): JSX.Element => {
  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })
  const paddTop = useBreakpointValue({ base: '20', sm: 20, md: 20,lg:20 })
  const topRef = useRef(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const jobRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
 
  return (
    <>
      <Box ref={topRef} />
      <OpenGraphHead />
      <Menu skillsRef={skillsRef} jobsRef={jobRef} workRef={worksRef} blogRef={blogRef} contactRef={contactRef} />
      <Grid
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={4}
      >
        <GridItem
          padding={sideBarPadding}
          marginTop={paddTop}
          rowSpan={2}
          colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          display="flex"
          alignContent="center"
          as="div"
          flexDirection={'row'}
        >
          <Sidebar data={data?.result}/>
        </GridItem>
        <GridItem
          as="main"
          padding={mainContent}
          rowSpan={2}
          colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          overflow="hidden"
        >
          <Stack w="100" spacing={24}>
            <FadeInLayout>
              <Box
                id="aboutMe"
                className="contentRow"
                minH={{ lg: '100vh' }}
                display="flex"
                alignItems="center"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 0 }}
                flexDirection={{
                  base: 'column-reverse',
                  lg: 'row',
                }}
              >
                <About data={data?.result} />
                <Avatar />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="skills"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl:0 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
                ref={skillsRef}
              >
                <Skills data={data?.result} /> 
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="jobs"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
                ref={jobRef}
              >
                <ExperienceAndEducationTab data={data?.result} />
              </Box>
            </FadeInLayout>
             <FadeInLayout>
              <Box
                id="works"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
                ref={worksRef}
              >
                <FeaturedWorks data={data?.result} /> 
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="blogs"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
                 ref={blogRef}
              >
                <DevToArticles articles={articles} />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="contact"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10,xl:10 }}
                paddingX={0}
                flexDirection={'row'}
                ref={contactRef}
              >
                <GetInTouch  />
              </Box>
            </FadeInLayout>
          </Stack>
        </GridItem>
      </Grid>
      <ScrollMore scrollToTop={scrollToTop} />
    </>
  )
}
export async function getStaticProps() {
  const articles = await getBlogData();
  const data = await getData();
  return {
    props: {
      articles,
      data,
    },
  }
}

export default Portfolio
