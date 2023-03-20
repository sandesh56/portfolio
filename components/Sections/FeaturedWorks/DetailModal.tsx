/* eslint-disable react/no-multi-comp */
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Skill, Skills, splitSkills } from 'config/skills'
import { mobileBreakpointsMap } from 'config/theme'

type IDetailModal = {
  isOpen: boolean
    onClose(): void,
    description?: string,
    technology?: string,
    title?: string,
}

const DetailModal = ({ isOpen, onClose, description, technology, title }: IDetailModal) => {
    const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale"
          scrollBehavior="inside"
          isCentered
          size={isMobile ? 'xs' : 'xl'}
    >
      <ModalOverlay />
      <ModalContent>
              <ModalHeader>{title.toLocaleUpperCase()}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
           {description}
        </ModalBody>
        <ModalFooter>
                  <Text fontSize="x-small">{`Technology Used:${technology}`} </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DetailModal
