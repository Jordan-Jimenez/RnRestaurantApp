import React, { FC } from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { default as mapping } from '../../core/theme/customMapping';
import { theme } from '../../core/theme/theme';

interface IThemeProviderProps {}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={theme} customMapping={mapping}>
        {children}
      </ApplicationProvider>
    </>
  );
};

export default ThemeProvider;
