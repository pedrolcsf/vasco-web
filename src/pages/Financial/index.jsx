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
  Checkbox,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function Financial() {
  const [chkBox, setChkBox] = useState(false)
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
            overflowX={'scroll'}
            flexDir="column"
            w="100%"
            ml={['0', '0', '0', '0', '140']}
            bg="#303136"
            h="calc(100vh - 105px)"
          >
            <Flex
              overflowX={'scroll'}
              alignItems="center"
              justifyContent="center"
              mt="20px"
            >
              <Box
                overflowX={'scroll'}
                p={['4', '12', '12']}
                bg="#2A2B2F"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <Flex flexDir="column" mb="4">
                  <Text
                    letterSpacing={1}
                    fontFamily="Vasco Arquibancada"
                    fontSize="4xl"
                  >
                    Financeiro
                  </Text>
                  <Divider />
                  <Flex
                    style={{
                      overflow: 'auto',
                    }}
                  >
                    <FormControl mt="4" mb="4">
                      <Input
                        bg="#18191b"
                        borderRadius={0}
                        placeholder="Buscar:"
                        fontSize="md"
                        id="email"
                        type="email"
                        textColor="#fff"
                        borderColor="#2A2B2F"
                        colorScheme="blackAlpha"
                      />
                    </FormControl>

                    <FormControl ml="4" mt="4" mb="4">
                      <Select
                        bg="#18191b"
                        borderRadius={0}
                        placeholder="Filtrar por ano:"
                        fontSize="md"
                        id="email"
                        type="email"
                        textColor="#fff"
                        borderColor="#2A2B2F"
                        colorScheme="blackAlpha"
                      />
                    </FormControl>
                  </Flex>
                </Flex>
                <Flex flexDir="column">
                  {/* <Text
                  letterSpacing={1}
                  fontFamily="Vasco Arquibancada"
                  fontSize={[22, 26, 26]}
                >
                  Financeiro
                </Text> */}
                  <Divider />
                  <div
                    style={{
                      overflow: 'auto',
                    }}
                  >
                    <Tabs
                      fontFamily="Barlow Bold"
                      size="lg"
                      variant="line"
                      colorScheme="whiteAlpha"
                    >
                      <TabList>
                        <Tab fontSize="lg">AGUARDANDO PAGAMENTO</Tab>
                        <Tab fontSize="lg">PAGOS</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <TableContainer>
                            <Table
                              size={['sm', 'lg', 'lg']}
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
                                    Descrição
                                  </Th>
                                  <Th
                                    fontFamily="Barlow Bold"
                                    fontSize={17}
                                    color="GrayText"
                                    fontWeight="bold"
                                  >
                                    Vencimento
                                  </Th>
                                  <Th
                                    fontFamily="Barlow Bold"
                                    fontSize={17}
                                    color="GrayText"
                                    fontWeight="bold"
                                  >
                                    Valor
                                  </Th>
                                  <Th
                                    fontFamily="Barlow Bold"
                                    fontSize={17}
                                    color="GrayText"
                                    fontWeight="bold"
                                  >
                                    Status
                                  </Th>
                                  <Th
                                    fontFamily="Barlow Bold"
                                    fontSize={17}
                                    color="GrayText"
                                    fontWeight="bold"
                                  >
                                    -
                                  </Th>
                                </Tr>
                              </Thead>
                              <Tbody
                                fontFamily="Barlow"
                                fontWeight="bold"
                                fontSize={17}
                              >
                                <Tr>
                                  <Td>Parcela Ref 09/2023</Td>
                                  <Td>22/03/2023</Td>
                                  <Td>R$80,00</Td>
                                  <Td>
                                    <Flex
                                      size="sm"
                                      letterSpacing={2}
                                      fontWeight="bold"
                                      fontFamily="Barlow Bold"
                                      p="2"
                                      textColor="black"
                                      borderRadius={8}
                                    >
                                      <Text textColor="orange">PENDENTE</Text>
                                    </Flex>
                                  </Td>
                                  <Td>
                                    <Checkbox
                                      onChange={() => setChkBox(!chkBox)}
                                    />
                                  </Td>
                                </Tr>
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </TabPanel>
                        <TabPanel>
                          <TableContainer>
                            <Table
                              size={['sm', 'lg', 'lg']}
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
                                    Descrição
                                  </Th>
                                  <Th
                                    fontFamily="Barlow Bold"
                                    fontSize={17}
                                    color="GrayText"
                                    fontWeight="bold"
                                  >
                                    Vencimento
                                  </Th>
                                  <Th
                                    fontFamily="Barlow Bold"
                                    fontSize={17}
                                    color="GrayText"
                                    fontWeight="bold"
                                  >
                                    Valor
                                  </Th>
                                  <Th
                                    fontFamily="Barlow Bold"
                                    fontSize={17}
                                    color="GrayText"
                                    fontWeight="bold"
                                  >
                                    Status
                                  </Th>
                                  <Th
                                    fontFamily="Barlow Bold"
                                    fontSize={17}
                                    color="GrayText"
                                    fontWeight="bold"
                                  >
                                    -
                                  </Th>
                                </Tr>
                              </Thead>
                              <Tbody
                                fontFamily="Barlow"
                                fontWeight="bold"
                                fontSize={17}
                              >
                                <Tr>
                                  <Td>Parcela Ref 09/2023</Td>
                                  <Td>22/03/2023</Td>
                                  <Td>R$80,00</Td>
                                  <Td>
                                    <Flex
                                      size="sm"
                                      letterSpacing={2}
                                      fontWeight="bold"
                                      fontFamily="Barlow Bold"
                                      p="2"
                                      textColor="black"
                                      borderRadius={8}
                                    >
                                      <Text textColor="green">PAGO</Text>
                                    </Flex>
                                  </Td>
                                  <Td>
                                    <Checkbox
                                      disabled
                                      onChange={() => setChkBox(!chkBox)}
                                    />
                                  </Td>
                                </Tr>
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </div>
                </Flex>
                <Divider />
                {chkBox === true && (
                  <Flex mt="4" mb="4" justifyContent="space-between">
                    <div></div>
                    <Button
                      fontFamily="Barlow Bold"
                      fontSize={'md'}
                      size="sm"
                      onClick={onOpen}
                      colorScheme="whiteAlpha"
                    >
                      Realizar Pagamento
                    </Button>
                  </Flex>
                )}

                <Divider />

                <Flex p="4" mt="4" justifyContent="space-between">
                  <Text fontWeight="bold">Total: 20</Text>
                  <Flex>
                    <Button mr="2" colorScheme="whiteAlpha">
                      <Flex>
                        <RiArrowLeftLine />
                      </Flex>
                    </Button>
                    <Button mr="2" colorScheme="whiteAlpha">
                      <Flex>1</Flex>
                    </Button>
                    <Button colorScheme="whiteAlpha">
                      <Flex>
                        <RiArrowRightLine />
                      </Flex>
                    </Button>
                  </Flex>
                </Flex>
              </Box>
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
