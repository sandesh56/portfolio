import {
  Box,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiMouseLine } from 'react-icons/ri'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'
import { mobileBreakpointsMap } from 'config/theme'
import React from 'react'
import {ImArrowUp} from 'react-icons/im'

const scrollMoreVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  hidden: {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delay: 1,
      ease: 'easeIn',
    },
  },
  bounce: {
    y: [0, -18, 0],
    transition: {
      duration: 1.6,
      ease: 'easeInOut',
      loop: Infinity,
    },
  },
}

const emailVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: [1, 0],
    y: [0, 250],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

interface IProps{
  scrollToTop: () => void
}
const ScrollMore:React.FC<IProps> = ({scrollToTop}) => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const scrollDirection = useScrollDirection(false, isMobile)
  const emailColor = useColorModeValue('gray.800', 'gray.400')
  const emailLine = useColorModeValue('teal.500', 'cyan.200')

  return (
    <Box
      position="fixed"
      bottom="1em"
      right="3%"
      display={isMobile ? 'none' : 'block'}
    >
      <AnimatePresence>
        {[ScrollDirection.Initial, ScrollDirection.Up].includes(
          scrollDirection
        ) && (
          <motion.div
            initial="initial"
            animate={['hidden', 'bounce']}
            variants={scrollMoreVariants}
          >
            <Icon
              w={6}
              h={6}
              as={RiMouseLine}
              color="currentColor"
              opacity="0.75"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {scrollDirection === ScrollDirection.Down && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={emailVariants}
            whileHover={{ y: -50 }}
            style={{
              writingMode: 'vertical-rl',
              position: 'fixed',
              right: '8%',
              bottom: '-8%',
            }}
          >
            <Text
              paddingY={3}
              fontFamily="monospace"
              rel="noreferrer"
              color={emailColor}
              _hover={{
                color: emailLine,
                _after: {
                  backgroundColor: emailLine,
                  opacity: 1,
                },
              }}
              position="relative"
              letterSpacing={3}
              onClick={scrollToTop}
              display="flex"
              alignItems="center"
              cursor="pointer"
              justifyContent="center"
              _after={{
                backgroundColor: emailLine,
                width: '5px',
                opacity: 0.5,
                content: '""',
                flex: 1,
                height: { base: '5em', xl: '8em' },
                margin: 'auto',
                marginTop: '10px',
              }}
            >
             Scroll to top
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default ScrollMore
