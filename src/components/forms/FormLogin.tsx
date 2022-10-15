import React, { useState } from 'react';

import { Formik } from 'formik';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Pressable,
  Text,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import * as yup from 'yup';

import { MaterialIcons } from '_icons';

interface Values {
  email: string;
  password: string;
}

export const FormLogin = () => {
  // const
  const initialValues: Values = { email: '', password: '' };
  // hooks
  const [show, setShow] = useState(false);
  // yup validation
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('E-mail inválido')
      .max(100, 'E-mail muito longo')
      .required('E-mail não pode estar vazio'),
    password: yup
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .max(16, 'A senha deve ter no máximo 16 caracteres')
      .required('A senha não pode estar vazia'),
  });
  // helper
  const fakeRequest = async (value: any, delay = 1000) => {
    // @ts-ignore
    const delayPromise = (ms: any) => new Promise((res) => setTimeout(res, ms));
    await delayPromise(delay);
    console.log(value);
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values) => fakeRequest(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isSubmitting,
        isValid,
        errors,
      }) => (
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
              <FormControl
                isInvalid={errors.email ? true : false}
                isDisabled={isSubmitting}>
                <FormControl.Label>E-mail</FormControl.Label>
                <Input
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="pessoa@mail.com"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.password ? true : false}
                isDisabled={isSubmitting}>
                <FormControl.Label>Senha</FormControl.Label>
                <Input
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  type={show ? 'text' : 'password'}
                  placeholder="●●●●●●●●"
                  autoCapitalize="none"
                  keyboardType="default"
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={
                          <MaterialIcons
                            name={show ? 'visibility' : 'visibility-off'}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.password}
                </FormControl.ErrorMessage>
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
              <Button
                mt="2"
                isDisabled={!isValid}
                isLoading={isSubmitting}
                isLoadingText="Enviando"
                onPress={handleSubmit}>
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
      )}
    </Formik>
  );
};
