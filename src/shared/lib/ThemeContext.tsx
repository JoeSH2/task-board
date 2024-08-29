import { createContext } from 'react';
import { Theme } from 'src/shared/consts/theme.ts';

type ThemeContextProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});
