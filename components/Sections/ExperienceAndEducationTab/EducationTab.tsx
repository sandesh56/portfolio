/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Text,
  Link,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  List,
  ListIcon,
  ListItem,
  SlideFade,
  Skeleton,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react'
import { BiRightArrow } from 'react-icons/bi'
import styles from './styles.module.css'
import { ExperiencesList } from 'config/experience'
import { mobileBreakpointsMap } from 'config/theme'
import React from 'react'

interface IProps{
  data:any
}
const EducationTab: React.FC<IProps> = ({ data }) => {
  const { colorMode } = useColorMode()
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const activeBordercolor = useColorModeValue('teal.500', '#97DFFC')
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  const tabOrientation =
    useBreakpointValue({
      base: 'horizontal',
      sm: 'horizontal',
      md: 'vertical',
      lg: 'vertical',
      xl: 'vertical',
    }) ?? ('vertical' as any)

  const tabMinWidth = useBreakpointValue({
    base: '160px',
    sm: '160px',
    md: 'auto',
    lg: 'auto',
    xl: 'auto',
  })
  return (
    <Tabs id="educationTabs" orientation={tabOrientation} isLazy>
      <TabList
        width={!isMobile ? '30%' : 'auto'}
        borderColor="transparent"
        overflowX={isMobile ? 'scroll' : 'auto'}
        overflowY={'hidden'}
        className={styles.experienceTabs}
      >
        {data?.education?.map((college ) => (
          <Tab
            key={`Tab-${college.collegeName}`}
            fontSize="smaller"
            h="120px"
            minWidth={tabMinWidth}
            boxShadow="none"
            borderColor={borderColor}
            borderLeftWidth={tabOrientation === 'vertical' ? '4px' : '0'}
            _selected={{
              borderColor: activeBordercolor,
              boxShadow: 'none',
              borderLeftWidth: tabOrientation === 'vertical' ? '4px' : '0',
              borderBottomWidth: tabOrientation === 'horizontal' ? '4px' : '0',
              background: 'whiteAlpha.100',
            }}
            borderBottomWidth={tabOrientation === 'horizontal' ? '4px' : '0'}
          >
            <Image
              src={`/education/${college.image}`}
              alt={college.collegeName}
              maxWidth="88px"
              fallback={<Skeleton height="100%" width="100%" />}
            ></Image>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {data?.education?.map((college) => (
          <TabPanel key={`TabPanel-${college.collegeName}`}>
            <SlideFade offsetY="20px" in={true}>
              <Stack spacing={0}>
                <Text
                  as="span"
                  fontSize="lg"
                  fontWeight="bold"
                  variant="description"
                >
                  {college?.degree}
                </Text>
                <Text as="span">
                  <Link
                    href={college.url}
                    aria-label="scentregroup"
                    rel="noreferrer"
                    target="_blank"
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    {college.collegeName}
                  </Link>
                </Text>
                 <Text fontSize="smaller">{college.location}</Text>
                <Text fontSize="smaller">{college.year}</Text>
                    </Stack>
                    <Text
                  as="span"
                  fontSize="lg"
                  fontWeight="bold"
                  variant="emphasis"
                >
                  Key Courses
                </Text>
                    <List spacing={3} pt={5}>
                {college.keyCourses?.map((courses, idx) => (
                  <ListItem
                    key={`${college.collegeName}-desc-${idx}`}
                    fontSize="smaller"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <ListIcon
                      as={BiRightArrow}
                      color={emphasis}
                      display="block"
                    />
                    <Text as="span" display="block" variant="description">
                      {courses}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </SlideFade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default EducationTab
