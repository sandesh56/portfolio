import React,{ memo } from 'react'
import { Heading, Text, Stack, Link,Tab, TabList, TabPanel,TabPanels, Tabs } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
import EducationTab from './EducationTab'

interface IProps{
  data:any
}
const DetailSection:React.FC<IProps> = ({data}) => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Tabs isFitted  variant="enclosed">
      <TabList>
        <Tab>
          <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Experience
    </Heading>
        </Tab>
        <Tab>
          <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Education
    </Heading>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
           <ExperienceTab data={data} />
        </TabPanel>
        <TabPanel>
           <EducationTab data={data} />
        </TabPanel>
      </TabPanels>
    </Tabs>
    
   
  </Stack>
)

export default memo(DetailSection)
