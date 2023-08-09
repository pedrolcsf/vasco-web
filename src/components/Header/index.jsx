/* eslint-disable react/prop-types */
import { Box, IconButton, Text, Flex, Avatar } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex
      bg="#303136"
      w="100%"
      alignItems="center"
      p={4}
      color="white"
      justifyContent="center"
    >
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            mr="6"
            icon={<RiMenuLine w={8} h={8} />}
            colorScheme="whiteAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Flex align="center">
        <Flex mr="4">
          <Avatar size={['md', 'lg', 'lg']} name="Pedro Ferreira" />
        </Flex>
        <Flex flexDir="column">
          <Text
            fontWeight="bold"
            fontFamily="Vasco Arquibancada"
            letterSpacing={1}
            fontSize={[24, 26, 26]}
          >
            SEJA BEM VINDO, PEDRO
          </Text>
          <Text
            fontWeight="normal"
            fontFamily="Vasco"
            color="gray"
            letterSpacing={2}
            fontSize={[16, 18, 18]}
          >
            Sócio Diamante
          </Text>
        </Flex>
      </Flex>

      <Box flex="1" />
    </Flex>
  )
}

export default Header
