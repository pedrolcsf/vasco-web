import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { Logo } from './Logo'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { useRef } from 'react'
import api from '../../services/api'
// import api from '../../services/api'

const createAuthFormSchema = z.object({
  email: z
    .string()
    .nonempty('E-mail é obrigatório')
    .email('E-mail inválido')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'A senha precisa de no mínimo 6 caracteres'),
})

export const SignIn = () => {
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = useRef(null)
  const onClickReveal = () => {
    onToggle()
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,
      })
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createAuthFormSchema),
  })

  const authUser = async (data) => {
    const response = await api.post('/auth/login', data)

    localStorage.setItem('token', response.data.access_token)

    window.location.href = '/dashboard'
  }

  return (
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          ></Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={{
            base: 'transparent',
            sm: `${useColorModeValue('#2A2B2F', '#2A2B2F')}`,
          }}
          boxShadow={{
            base: 'none',
            sm: 'md',
          }}
          border={{
            sm: 'none',
            md: '1px solid',
          }}
          borderColor={{
            md: `${useColorModeValue(
              'rgba(255,255,255, 0.1)',
              'rgba(255,255,255, 0.1)',
            )}`,
            sm: '',
          }}
        >
          <Flex alignItems="center" align="center" justifyContent="center">
            <Text fontFamily="Vasco Arquibancada, sans-serif" fontSize={120}>
              CRVG
            </Text>
          </Flex>
          <Stack spacing="6" as="form" onSubmit={handleSubmit(authUser)}>
            <Stack spacing="5">
              <FormControl isInvalid={errors.email}>
                <FormLabel color="#f2f2f2" htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  {...register('email')}
                  bg={`${useColorModeValue('#18191b', '#18191b')}`}
                  borderRadius={0}
                  id="email"
                  type="email"
                  textColor="#fff"
                  borderColor="#2A2B2F"
                  colorScheme="blackAlpha"
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <FormLabel color="#f2f2f2" htmlFor="password">
                  Senha:
                </FormLabel>
                <InputGroup>
                  <Input
                    {...register('password')}
                    id="password"
                    bg={`${useColorModeValue('#18191b', '#18191b')}`}
                    borderRadius={0}
                    borderColor="#2A2B2F"
                    textColor="#fff"
                    name="password"
                    type={isOpen ? 'text' : 'password'}
                    autoComplete="current-password"
                  />
                  <InputRightElement>
                    <IconButton
                      variant="link"
                      aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                      icon={isOpen ? <HiEyeOff /> : <HiEye />}
                      onClick={onClickReveal}
                    />
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <Button
                // type="submit"
                onClick={() => (window.location.href = '/home')}
                fontFamily="Vasco, sans-serif"
                letterSpacing={2}
                fontSize={26}
                borderRadius={0}
                colorScheme="whiteAlpha"
              >
                ENTRAR
              </Button>
              <HStack>
                <Divider />
                <Text
                  fontFamily="Vasco, sans-serif"
                  letterSpacing={2}
                  fontSize="md"
                  whiteSpace="nowrap"
                  color="GrayText"
                >
                  © 2023 Vasco da Gama - Todos os direitos reservados.
                </Text>

                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
