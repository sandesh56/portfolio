import { memo } from 'react'
import { Heading, Text, Stack, Box, FormControl,Input, Button, InputGroup, InputLeftElement, useBreakpointValue, useColorMode, FormErrorMessage,useToast } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUser } from 'react-icons/fa'
import { MdMail, MdPhone, MdSubject, MdMessage } from 'react-icons/md'
import { mobileBreakpointsMap } from 'config/theme'
import { useFormik } from 'formik'
import { postData } from 'services/api/data'
const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const [ref, inView] = useInView()
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  const { colorMode } = useColorMode();

  const validate = values => {
    const errors: any = {};
    if (!values.from) {
      errors.from = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    }
    if (!values.subject) {
      errors.subject = 'Required';
    }
    if (!values.message) {
      errors.message = 'Required';
    }

    return errors;
  };

  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      from: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await postData(values);
        toast({
          title: "Message sent.",
          description: response?.result,
          status: "success",
          duration: 9000,
          isClosable: true,
        })
        formik.resetForm();
      } catch (e) {
        toast({
          title: "Failed to send message.",
          description: "Please try again later.",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      }
    },
  });
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            👋
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        If you're looking to get in touch with me, please feel free to
        send me a message or connect with me on my social media platforms.
        I'm always happy to chat about a variety of topics and see where our conversations take us.
      </Text>

      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Stack spacing={4}>
          <FormControl isInvalid={!!formik.errors.from && formik.touched.from as boolean}>
            <InputGroup size={isMobile ? 'md' : "lg"} border={colorMode === "light" && '1px'} borderColor={colorMode === "light" && 'gray.500'} borderRadius='md'>
              <InputLeftElement pointerEvents='none' children={<FaUser color='black' />} />
              <Input
                placeholder="Your Name"
                name="from"
                bg={'gray.100'}
                border={0}
                onChange={formik.handleChange}
                value={formik.values.from}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </InputGroup>
            <FormErrorMessage>Name is required!</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.email && formik.touched.email as boolean}>
            <InputGroup size={isMobile ? 'md' : "lg"} border={colorMode === "light" && '1px'} borderColor={colorMode === "light" && 'gray.500'} borderRadius='md'>
              <InputLeftElement pointerEvents='none' children={<MdMail color='black' />} />
              <Input
                placeholder="Your Email"
                bg={'gray.100'}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </InputGroup>
            <FormErrorMessage>Email is required!</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.phone && formik.touched.email as boolean}>
            <InputGroup size={isMobile ? 'md' : "lg"} border={colorMode === "light" && '1px'} borderColor={colorMode === "light" && 'gray.500'} borderRadius='md'>
              <InputLeftElement pointerEvents='none' children={<MdPhone color='black' />} />
              <Input
                placeholder="Your Phone Number"
                bg={'gray.100'}
                name="phone"
                border={0}
                onChange={formik.handleChange}
                value={formik.values.phone}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </InputGroup>
            <FormErrorMessage>Phone is required!</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.subject && formik.touched.subject as boolean}>
            <InputGroup size={isMobile ? 'md' : "lg"} border={colorMode === "light" && '1px'} borderColor={colorMode === "light" && 'gray.500'} borderRadius='md'>
              <InputLeftElement pointerEvents='none' children={<MdSubject color='black' />} />
              <Input
                placeholder="Subject"
                bg={'gray.100'}
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </InputGroup>
            <FormErrorMessage>Subject is required!</FormErrorMessage>
          </FormControl>
          <FormControl  isInvalid={!!formik.errors.message && formik.touched.message as boolean}>
            <InputGroup size={isMobile ? 'md' : "lg"} border={colorMode === "light" && '1px'} borderColor={colorMode === "light" && 'gray.500'} borderRadius='md'>
              <InputLeftElement pointerEvents='none' children={<MdMessage color='black' />} />
              <Input
                placeholder="Your Message"
                bg={'gray.100'}
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </InputGroup>
            <FormErrorMessage>Message is required!</FormErrorMessage>
          </FormControl>
        </Stack>
        <Button
          fontFamily={'heading'}
          onClick={formik.handleSubmit as any}
          isLoading={formik.isSubmitting}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-r, red.500,pink.500)',
            boxShadow: 'xl',
          }}>
          Submit
        </Button>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
