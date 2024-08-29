import { useContext } from 'react';

import { Theme } from '@/shared/consts/theme.ts';
import { ThemeContext } from '@/shared/lib/ThemeContext.tsx';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (actualTheme?: Theme) => {
    let newTheme: Theme | undefined = actualTheme;
    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    window.localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};
