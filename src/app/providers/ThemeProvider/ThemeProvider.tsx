import { FC, ReactNode, useEffect, useState } from 'react';

import { Theme } from '@/shared/consts/theme.ts';
import { ThemeContext } from '@/shared/lib/ThemeContext.tsx';

interface ThemeProviderProps {
  children?: ReactNode;
}

const actualTheme: Theme | null = window.localStorage.getItem('theme') as Theme;

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
