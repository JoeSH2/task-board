import { FC, useState } from 'react';

import { Theme } from '@/shared/consts/theme.ts';
import { useTheme } from '@/shared/hooks/useTheme.tsx';
import { cls } from '@/shared/lib/cls.ts';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Toggle } from '@/shared/ui/Toggle';

import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcher> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  const [toggle, setToggle] = useState(theme === Theme.LIGHT ? true : false);

  const onToggleTheme = () => {
    setToggle(!toggle);
    toggleTheme();
  };

  return (
    <FlexRow
      justifyContent={'center'}
      alignItems={'center'}
      className={cls(style.ThemeSwitcher, {}, [className])}
    >
      <p className={style.text}>Theme</p>
      <Toggle value={toggle} onChange={onToggleTheme} />
    </FlexRow>
  );
};
