import { FC, ReactNode, useEffect, useState } from 'react';

import { StorageKey } from '@/shared/consts/storageKey.ts';
import { Theme } from '@/shared/consts/theme.ts';
import { localStorageWrapper } from '@/shared/lib/storageWrapper.ts';
import { ThemeContext } from '@/shared/lib/ThemeContext.tsx';

interface ThemeProviderProps {
  children?: ReactNode;
}

const actualTheme = localStorageWrapper.get<Theme | null>(StorageKey.THEME);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(actualTheme || Theme.LIGHT);

  useEffect(() => {
    document.body.className = theme;
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
