import { useRef, useState } from 'react'
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from 'react-component-export-image'
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Grid,
  GridItem,
  Container,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  Select,
} from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

import { motion } from 'framer-motion'
import { RiDownloadLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function Home() {
  const [typeFile, setTypeFile] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()
  const componentRef = useRef()
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({
    sm: smVariant,
    md: smVariant,
    lg: smVariant,
    xl: mdVariant,
  })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  const downloadWallet = () => {
    if (typeFile === 'jpg') {
      exportComponentAsJPEG(componentRef)
    } else if (typeFile === 'png') {
      exportComponentAsPNG(componentRef)
    } else if (typeFile === 'pdf') {
      exportComponentAsPDF(componentRef)
    }
  }

  return (
    <Box overflow={['', '', '', '', 'hidden']}>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />

        <hr
          style={{
            borderColor: '#484a51',
          }}
        />

        <Flex
          ml={['0', '0', '0', '0', '140']}
          flexDir="column"
          w="100%"
          bg="#303136"
          h="calc(100vh - 105px)"
        >
          <Flex alignItems="center" justifyContent="center" mt="20px">
            <Grid
              templateAreas={[
                `"nav"
                "main"`,
                `"nav"
                "main"`,
                `"nav"
                "main"`,
              ]}
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
              ]}
              gap={6}
            >
              <GridItem
                area={'nav'}
                w="100%"
                p="5"
                overflowX="scroll"
                bg="#2A2B2F"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Flex flexDir="column">
                  <Text
                    letterSpacing={1}
                    fontFamily="Vasco Arquibancada"
                    fontSize={'4xl'}
                  >
                    MEU PERFIL
                  </Text>
                  <Divider />
                  <Flex mt="6" alignItems="center">
                    <Avatar mt="6" size="xl" />
                    <Flex flexDir="column">
                      <Text
                        ml="6"
                        letterSpacing={1}
                        fontFamily="Vasco Arquibancada"
                        fontSize={'4xl'}
                      >
                        PEDRO L S FERREIRA
                      </Text>

                      <Text
                        ml="6"
                        letterSpacing={1}
                        fontFamily="Barlow Bold"
                        textColor="GrayText"
                        fontSize={'lg'}
                      >
                        SÓCIO DIAMANTE
                      </Text>
                      <Text
                        ml="6"
                        letterSpacing={1}
                        fontFamily="Barlow Bold"
                        textColor="GrayText"
                        fontSize={'lg'}
                      >
                        ADMISSÃO: 02/05/2002
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex w="100%" mt="12" justifyContent="space-between">
                  <Button
                    zIndex={1000}
                    w="100%"
                    fontFamily="Barlow Bold"
                    borderRadius={0}
                    colorScheme="whiteAlpha"
                  >
                    Ver carteirinha
                  </Button>
                </Flex>
              </GridItem>
              <GridItem
                area={'main'}
                w="100%"
                p="5"
                overflowX="scroll"
                bg="#2A2B2F"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Flex flexDir="column">
                  <Box>
                    <Text
                      letterSpacing={1}
                      fontFamily="Vasco Arquibancada"
                      fontSize={'3xl'}
                    >
                      INFORMAÇÕES
                    </Text>
                    <Divider />
                  </Box>

                  <Flex>
                    <Flex mr="12" flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        NOME:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        Pedro Lucas dos Santos Ferreira
                      </Text>
                    </Flex>

                    <Flex flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        CPF:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        999.999.999-99
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex>
                    <Flex mr="12" flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        E-MAIL:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        pedrolcsferreira@gmail.com
                      </Text>
                    </Flex>

                    <Flex flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        TELEFONE:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        (99)99999-9999
                      </Text>
                    </Flex>
                  </Flex>

                  <Divider mt="6" mb="6" />

                  <Flex>
                    <Flex mr="12" flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        ENDEREÇO:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        AVENIDA MINAS GERAIS, 2206
                      </Text>
                    </Flex>

                    <Flex flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        BAIRRO:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        JARDIM APUCARANA
                      </Text>
                    </Flex>

                    <Flex ml="6" flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        CEP:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        86808-015
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex>
                    <Flex mr="12" flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        CIDADE:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        APUCARANA
                      </Text>
                    </Flex>

                    <Flex flexDir="column" mt="6">
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                        color="GrayText"
                      >
                        ESTADO:
                      </Text>
                      <Text
                        fontFamily="Barlow Bold, sans-serif"
                        fontSize={'md'}
                      >
                        PARANÁ - PR
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
