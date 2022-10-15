import React from 'react';

import type { LoginScreenProps } from '_navigators';

import { FormLogin } from '_components/forms';
import { AppBar } from '_components/misc';

export const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <>
      <AppBar />
      <FormLogin />
    </>
  );
};
