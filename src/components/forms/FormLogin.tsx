import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  HStack,
  Button,
  Text,
} from 'native-base';

export const FormLogin = () => {
  const navigation = useNavigation();

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Bem-vindo
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Entre para continuar!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input type="password" />
            <Button
              variant="link"
              size="xs"
              alignSelf="flex-end"
              mt="1"
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'primary.500',
              }}>
              Esqueceu a senha?
            </Button>
          </FormControl>
          <Button mt="2" onPress={() => navigation.goBack()}>
            Cadastrar
          </Button>
          <HStack mt="4" justifyContent="flex-start" alignItems="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Não possuí cadastro?
            </Text>
            <Button
              size="sm"
              variant="link"
              ml="-1"
              _text={{
                color: 'primary.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}>
              Cadastre-se
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
