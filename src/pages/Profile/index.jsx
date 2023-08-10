import { useState } from 'react'
import {
  Box,
  Divider,
  Flex,
  Table,
  Button,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Select,
  Input,
  FormControl,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
  Grid,
  GridItem,
  Avatar,
  FormLabel,
  Image,
} from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiDownloadLine,
} from 'react-icons/ri'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({
    sm: smVariant,
    md: smVariant,
    lg: smVariant,
    xl: mdVariant,
  })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <>
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
            <Flex w="100%" justifyContent="center" mt="20px">
              <Grid
                templateAreas={[
                  `"profile"
                "info"`,
                  `"profile info"`,
                  `"profile info"`,
                ]}
                templateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(2, 1fr)',
                  'repeat(2, 1fr)',
                ]}
                gap={6}
              >
                <GridItem
                  area={'profile'}
                  w="100%"
                  p="12"
                  bg="#2A2B2F"
                  border="1px solid rgba(255,255,255, 0.1)"
                >
                  <Flex w="100%">
                    <Flex w="100%" flexDir="column">
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
                      <Flex w="100%" mt="12" justifyContent="space-between">
                        <Button
                          w="100%"
                          fontFamily="Barlow Bold"
                          borderRadius={0}
                          colorScheme="whiteAlpha"
                        >
                          Ver carteirinha
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </GridItem>

                <GridItem
                  area={'info'}
                  w="100%"
                  p="5"
                  bg="#2A2B2F"
                  border="1px solid rgba(255,255,255, 0.1)"
                >
                  <Flex p="12" flexDir="column">
                    <Text
                      letterSpacing={1}
                      fontFamily="Vasco Arquibancada"
                      fontSize={'3xl'}
                    >
                      INFORMAÇÕES
                    </Text>
                    <Divider />

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
      {/* // Modal Realizar Pagamento */}
      <Modal
        colorScheme=""
        size="5xl"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg="#2A2B2F">
          <ModalHeader fontFamily="Barlow Bold, sans-serif">
            Selecione a forma de pagamento:
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody m="4">
            <Grid
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(3, 1fr)',
                'repeat(3, 1fr)',
              ]}
              gap={6}
            >
              <GridItem>
                {' '}
                <Flex
                  flexDir="column"
                  p="4"
                  mr="4"
                  w="100%"
                  bg="#242529"
                  border="1px solid rgba(255,255,255, 0.1)"
                >
                  <Text
                    letterSpacing={1}
                    fontSize={'4xl'}
                    fontFamily="Vasco, sans-serif"
                  >
                    BOLETO
                  </Text>
                  <Divider mt="1" mb="4" />

                  <Text
                    fontSize={16}
                    fontWeight="bold"
                    fontFamily="Barlow, sans-serif"
                  >
                    Parcelas: 1
                  </Text>
                  <Text
                    fontSize={16}
                    fontWeight="bold"
                    fontFamily="Barlow, sans-serif"
                  >
                    Valor Total: Parcela Ref 09/2023
                  </Text>

                  <Button
                    fontFamily="Barlow Bold, sans-serif"
                    fontSize="md"
                    mt="4"
                    borderRadius={0}
                    colorScheme="whiteAlpha"
                  >
                    Selecionar
                  </Button>
                </Flex>
              </GridItem>
              <GridItem>
                {' '}
                <Flex
                  flexDir="column"
                  p="4"
                  mr="4"
                  w="100%"
                  bg="#242529"
                  border="1px solid rgba(255,255,255, 0.1)"
                >
                  <Text
                    letterSpacing={1}
                    fontSize={'4xl'}
                    fontFamily="Vasco, sans-serif"
                  >
                    PIX
                  </Text>
                  <Divider mt="1" mb="4" />

                  <Text
                    fontSize={16}
                    fontWeight="bold"
                    fontFamily="Barlow, sans-serif"
                  >
                    Parcelas: 1
                  </Text>
                  <Text
                    fontSize={16}
                    fontWeight="bold"
                    fontFamily="Barlow, sans-serif"
                  >
                    Valor Total: Parcela Ref 09/2023
                  </Text>

                  <Button
                    fontFamily="Barlow Bold, sans-serif"
                    fontSize="md"
                    mt="4"
                    borderRadius={0}
                    colorScheme="whiteAlpha"
                  >
                    Selecionar
                  </Button>
                </Flex>
              </GridItem>

              <GridItem>
                <Flex
                  flexDir="column"
                  p="4"
                  mr="4"
                  w="100%"
                  bg="#242529"
                  border="1px solid rgba(255,255,255, 0.1)"
                >
                  <Text
                    letterSpacing={1}
                    fontSize={'4xl'}
                    fontFamily="Vasco, sans-serif"
                  >
                    CARTÃO DE CRÉDITO
                  </Text>
                  <Divider mt="1" mb="4" />

                  <Text
                    fontSize={16}
                    fontWeight="bold"
                    fontFamily="Barlow, sans-serif"
                  >
                    Parcelas: 1
                  </Text>
                  <Text
                    fontSize={16}
                    fontWeight="bold"
                    fontFamily="Barlow, sans-serif"
                  >
                    Valor Total: Parcela Ref 09/2023
                  </Text>

                  <Button
                    fontFamily="Barlow Bold, sans-serif"
                    fontSize="md"
                    mt="4"
                    borderRadius={0}
                    colorScheme="whiteAlpha"
                  >
                    Selecionar
                  </Button>
                </Flex>
              </GridItem>
            </Grid>
            {/* <Flex w="100%">
              <Flex
                flexDir="column"
                p="4"
                mr="4"
                w="100%"
                bg="#242529"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Text
                  letterSpacing={1}
                  fontSize={'4xl'}
                  fontFamily="Vasco, sans-serif"
                >
                  BOLETO
                </Text>
                <Divider mt="1" mb="4" />

                <Text
                  fontSize={16}
                  fontWeight="bold"
                  fontFamily="Barlow, sans-serif"
                >
                  Parcelas: 1
                </Text>
                <Text
                  fontSize={16}
                  fontWeight="bold"
                  fontFamily="Barlow, sans-serif"
                >
                  Valor Total: Parcela Ref 09/2023
                </Text>

                <Button
                  fontFamily="Barlow Bold, sans-serif"
                  fontSize="md"
                  mt="4"
                  borderRadius={0}
                  colorScheme="whiteAlpha"
                >
                  Selecionar
                </Button>
              </Flex>

              <Flex
                flexDir="column"
                p="4"
                mr="4"
                w="100%"
                bg="#242529"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Text
                  letterSpacing={1}
                  fontSize={'4xl'}
                  fontFamily="Vasco, sans-serif"
                >
                  PIX
                </Text>
                <Divider mt="1" mb="4" />

                <Text
                  fontSize={16}
                  fontWeight="bold"
                  fontFamily="Barlow, sans-serif"
                >
                  Parcelas: 1
                </Text>
                <Text
                  fontSize={16}
                  fontWeight="bold"
                  fontFamily="Barlow, sans-serif"
                >
                  Valor Total: Parcela Ref 09/2023
                </Text>

                <Button
                  fontFamily="Barlow Bold, sans-serif"
                  fontSize="md"
                  mt="4"
                  borderRadius={0}
                  colorScheme="whiteAlpha"
                >
                  Selecionar
                </Button>
              </Flex>

              <Flex
                flexDir="column"
                p="4"
                mr="4"
                w="100%"
                bg="#242529"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Text
                  letterSpacing={1}
                  fontSize={'4xl'}
                  fontFamily="Vasco, sans-serif"
                >
                  CARTÃO DE CRÉDITO
                </Text>
                <Divider mt="1" mb="4" />

                <Text
                  fontSize={16}
                  fontWeight="bold"
                  fontFamily="Barlow, sans-serif"
                >
                  Parcelas: 1
                </Text>
                <Text
                  fontSize={16}
                  fontWeight="bold"
                  fontFamily="Barlow, sans-serif"
                >
                  Valor Total: Parcela Ref 09/2023
                </Text>

                <Button
                  fontFamily="Barlow Bold, sans-serif"
                  fontSize="md"
                  mt="4"
                  borderRadius={0}
                  colorScheme="whiteAlpha"
                >
                  Selecionar
                </Button>
              </Flex>
            </Flex> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
