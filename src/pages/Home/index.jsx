import { useState } from 'react'
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
} from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

import { motion } from 'framer-motion'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({
    sm: smVariant,
    md: smVariant,
    lg: smVariant,
    xl: mdVariant,
  })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

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
                `"header"
                "nav"
                "main"`,
                `"header header"
                "nav main"`,
                `"header header"
                "nav main"`,
              ]}
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(2, 1fr)',
              ]}
              gap={6}
            >
              <GridItem
                area={'header'}
                w="100%"
                p="5"
                bg="#2A2B2F"
                border="1px solid rgba(255,255,255, 0.1)"
              >
                <motion.div style={{}}></motion.div>
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
