/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Flex,
  Text,
  Divider,
  Image,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import {
  RiCheckboxLine,
  RiExchangeDollarLine,
  RiHome2Line,
  RiHomeLine,
  RiLogoutBoxLine,
  RiLogoutBoxRLine,
  RiMoneyCnyBoxFill,
  RiNotificationLine,
  RiProfileLine,
  RiSettingsLine,
  RiUser2Fill,
  RiUser5Line,
} from 'react-icons/ri'

const SidebarContent = ({ onClick }) => (
  <>
    <VStack>
      <Text textAlign="center" fontFamily="Vasco Arquibancada" fontSize={100}>
        CRVG
      </Text>
      <Button
        as={Link}
        letterSpacing={1}
        colorScheme="blackAlpha"
        fontFamily="Vasco"
        fontSize={26}
        bg="#2A2B2F"
        color="#fff"
        to="/home"
        w="100%"
      >
        <Box mr="4">
          <RiHomeLine size={26} />
        </Box>
        HOME
      </Button>

      <Divider />

      <Button
        as={Link}
        letterSpacing={1}
        colorScheme="blackAlpha"
        fontFamily="Vasco"
        fontSize={26}
        bg="#2A2B2F"
        color="#fff"
        to={'/financial'}
        w="100%"
      >
        <Box mr="4">
          <RiExchangeDollarLine size={26} />
        </Box>
        Financeiro
      </Button>
      <Divider />

      <Button
        as={Link}
        letterSpacing={1}
        colorScheme="blackAlpha"
        fontFamily="Vasco"
        fontSize={26}
        bg="#2A2B2F"
        color="#fff"
        to="/profile"
        w="100%"
      >
        <Box mr="4">
          <RiProfileLine size={26} />
        </Box>
        Meu Perfil
      </Button>
      <Divider />
      <Button
        as={Link}
        letterSpacing={1}
        colorScheme="blackAlpha"
        fontFamily="Vasco"
        fontSize={26}
        bg="#2A2B2F"
        color="#fff"
        to=""
        w="100%"
      >
        <Box mr="4">
          <RiCheckboxLine size={26} />
        </Box>
        Solicitação de adesão
      </Button>
      <Divider />
      <Button
        as={Link}
        letterSpacing={1}
        colorScheme="blackAlpha"
        fontFamily="Vasco"
        fontSize={26}
        bg="#2A2B2F"
        color="#fff"
        to=""
        w="100%"
      >
        <Box mr="4">
          <RiUser2Fill size={26} />
        </Box>
        Meus dependentes
      </Button>
      <Divider />
      <Button
        as={Link}
        letterSpacing={1}
        colorScheme="blackAlpha"
        fontFamily="Vasco"
        fontSize={26}
        bg="#2A2B2F"
        color="#fff"
        to=""
        w="100%"
      >
        <Box mr="4">
          <RiNotificationLine size={26} />
        </Box>
        Notificações
        <Box ml="4" fontSize={20} bg="red" pl="4" pr="4" borderRadius={8}>
          10
        </Box>
      </Button>
      <Divider />
      <Button
        as={Link}
        mt="8"
        letterSpacing={1}
        colorScheme="whiteAlpha"
        fontFamily="Vasco"
        fontSize={26}
        color="#fff"
        to="/"
        w="100%"
      >
        Sair
        <Box ml="4">
          <RiLogoutBoxRLine size={26} />
        </Box>
      </Button>
    </VStack>
  </>
)

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="280px"
      top={0}
      h="100%"
      bg="#2A2B2F"
    >
      <Image
        src="/logo.png"
        position="fixed"
        opacity={0.02}
        w="1200px"
        right="-300px"
        bottom="-120px"
        z-index="999"
        padding="20px"
        border-radius="50px"
      />
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              bg="#2A2B2F"
              as={Flex}
              alignItems="center"
              justifyContent="center"
            ></DrawerHeader>
            <DrawerBody bg="#2A2B2F">
              <SidebarContent onClick={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Sidebar
