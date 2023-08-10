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
    <Box>
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

        <Flex flexDir="column" w="100%" bg="#303136" h="calc(100vh - 105px)">
          <Flex alignItems="center" justifyContent="center" mt="20px">
            <Grid
              templateAreas={[
                `"wallet"
                "other"
                "nav"
                "main"`,
                `"wallet other"
                "nav main"`,
                `"wallet other"
                "nav main"`,
              ]}
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(2, 1fr)',
              ]}
              gap={6}
            >
              {/* <GridItem
                area={'header'}
                w="100%"
                p="5"
                bg="#2A2B2F"
                border="1px solid rgba(255,255,255, 0.1)"
              ></GridItem> */}
              <GridItem
                as={Flex}
                area={'wallet'}
                w="100%"
                flexDir={'column'}
                p={['5', '5', '5']}
                justifyContent="center"
                alignItems="center"
                bg="#222"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Flex w="100%" justifyContent="space-between">
                  <div></div>
                  <Button onClick={onOpen} colorScheme="whiteAlpha">
                    <RiDownloadLine color="#fff" />
                  </Button>

                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bg="#242529">
                      <ModalHeader>Baixar carteirinha</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <FormControl>
                          <Select
                            bg="#18191b"
                            borderRadius={0}
                            placeholder="Selecione o tipo do arquivo:"
                            fontSize="md"
                            onChange={(e) => setTypeFile(e.target?.value)}
                            id="email"
                            type="email"
                            textColor="#fff"
                            borderColor="#2A2B2F"
                            colorScheme="blackAlpha"
                          >
                            <option value="png">PNG</option>
                            <option value="jpg">JPG</option>
                            <option value="pdf">PDF</option>
                          </Select>
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="whiteAlpha"
                          mr={3}
                          borderRadius={0}
                          onClick={onClose}
                        >
                          Fechar
                        </Button>
                        <Button
                          onClick={downloadWallet}
                          borderRadius={0}
                          colorScheme="linkedin"
                        >
                          Baixar
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Flex>

                <Flex
                  ref={componentRef}
                  flexDirection="column"
                  w="100%"
                  alignItems="center"
                  mt="4"
                  borderRadius={20}
                >
                  <Divider />
                  <Flex
                    bg="#222"
                    p="4"
                    w="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image mr="4" src="/vasco-cruz.svg" w="50px" />
                    <Text
                      fontWeight="bold"
                      fontSize="xl"
                      fontFamily="Barlow, sans-serif"
                    >
                      Club de Regatas Vasco da Gama
                    </Text>
                  </Flex>
                  <Divider />

                  <Flex
                    bg="#222"
                    justifyContent="space-between"
                    pl={['2', '12', '12']}
                    pt="6"
                    alignItems="center"
                    pb="6"
                    pr={['2', '12', '12']}
                  >
                    <Flex mr={['10', '20', '20']} flexDir="column">
                      <Text mb="4" fontFamily="Barlow Bold" fontSize="md">
                        PEDRO LUCAS DOS SANTOS FERREIRA
                      </Text>

                      <Text fontFamily="Barlow Bold" fontSize="md">
                        <span
                          style={{
                            color: '#ccc',
                          }}
                        >
                          MATRICULA:{' '}
                        </span>
                        999999-99
                      </Text>

                      <Text fontFamily="Barlow Bold" fontSize="md" s>
                        <span
                          style={{
                            color: '#ccc',
                          }}
                        >
                          CPF:
                        </span>{' '}
                        999.999.999-99
                      </Text>

                      <Text mt="6" fontFamily="Barlow Bold" fontSize="md" s>
                        <span
                          style={{
                            color: '#ccc',
                          }}
                        >
                          DATA DE NASCIMENTO:
                        </span>{' '}
                        01/05/2002
                      </Text>

                      <Text fontFamily="Barlow Bold" fontSize="md" s>
                        <span
                          style={{
                            color: '#ccc',
                          }}
                        >
                          ADMISSÃO:
                        </span>{' '}
                        01/05/2002
                      </Text>
                    </Flex>

                    <Flex>
                      <Avatar borderRadius={1} size="2xl" />
                    </Flex>
                  </Flex>
                </Flex>
              </GridItem>

              <GridItem
                area={'other'}
                w="100%"
                as={Flex}
                flexDir={'column'}
                p={['5', '5', '5']}
                alignItems="center"
                justifyContent="center"
                bg="#2A2B2F"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Flex alignItems="center" justifyContent="center">
                  <Text
                    letterSpacing={1}
                    fontFamily="Vasco Arquibancada"
                    fontSize="4xl"
                  >
                    NOTIFICAÇÕES
                  </Text>
                </Flex>

                <Flex
                  mt="6"
                  w="60%"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    textAlign="center"
                    letterSpacing={1}
                    color="#cccc"
                    fontFamily="Vasco Arquibancada"
                    fontSize="3xl"
                  >
                    VOCÊ POSSUI{' '}
                    <span style={{ color: 'orange' }}>PENDENCIAS</span> NAS
                    PARCELAS, ACESSE A ABA FINANCEIROS PARA REGULARIZAR
                  </Text>
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  m="6"
                >
                  <Button
                    fontFamily="Barlow Bold"
                    colorScheme="whiteAlpha"
                    borderRadius={0}
                    w="60%"
                  >
                    FINANCEIRO
                  </Button>
                </Flex>
              </GridItem>
              <GridItem
                area={'nav'}
                w="100%"
                p="5"
                bg="#2A2B2F"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Flex flexDir="column">
                  <Text
                    letterSpacing={1}
                    fontFamily="Vasco Arquibancada"
                    fontSize={[22, 26, 26]}
                  >
                    Meus Contratos
                  </Text>
                  <Divider />
                  <div
                    style={{
                      overflow: 'auto',
                    }}
                  >
                    <TableContainer>
                      <Table
                        size={['sm', 'md', 'md']}
                        variant="simple"
                        colorScheme="whiteAlpha"
                      >
                        <Thead>
                          <Tr>
                            <Th
                              fontFamily="Barlow Bold"
                              fontSize={17}
                              color="GrayText"
                              fontWeight="bold"
                            >
                              Plano
                            </Th>
                            <Th
                              fontFamily="Barlow Bold"
                              fontSize={17}
                              color="GrayText"
                              fontWeight="bold"
                            >
                              Num. Contrato
                            </Th>
                            <Th
                              fontFamily="Barlow Bold"
                              fontSize={17}
                              color="GrayText"
                              fontWeight="bold"
                            >
                              Status
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody
                          fontFamily="Barlow"
                          fontWeight="bold"
                          fontSize={17}
                        >
                          <Tr>
                            <Td>Sócio Diamante</Td>
                            <Td>00-000001</Td>
                            <Td>Ativo</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </div>
                </Flex>
              </GridItem>
              <GridItem
                area={'main'}
                w="100%"
                p="5"
                bg="#2A2B2F"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Flex flexDir="column">
                  <Box>
                    <Text
                      letterSpacing={1}
                      fontFamily="Vasco Arquibancada"
                      fontSize={[22, 26, 26]}
                    >
                      INGRESSOS
                    </Text>
                    <Divider />
                  </Box>

                  <Flex
                    flexDir="column"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Flex align="center">
                      <Flex p="4" mr="4">
                        <Image
                          mr="4"
                          w={['30px', '40px', '40px']}
                          src="https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-novo.png"
                        />
                        <Image
                          w={['30px', '40px', '40px']}
                          src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo.png"
                        />
                      </Flex>
                      <Flex flexDir="column" ml="6" mr="4" mt="4">
                        <Text
                          fontSize={[16, 20, 20]}
                          fontFamily="Barlow Bold, sans-serif"
                        >
                          Campeonato Brasileiro de Futebol 2023
                        </Text>
                        <Text
                          fontSize={[14, 16, 16]}
                          fontFamily="Barlow, sans-serif"
                        >
                          Vasco x Flamengo
                        </Text>
                        <Text
                          fontSize={[14, 16, 16]}
                          color="GrayText"
                          fontFamily="Barlow, sans-serif"
                        >
                          Maracanã - Terça, 20 de Julho 2023, 20:00
                        </Text>
                      </Flex>

                      <Flex fontFamily="Barlow Bold, sans-serif">
                        <Button>Comprar</Button>
                      </Flex>
                    </Flex>
                    <Divider mt="4" mb="4" />
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
