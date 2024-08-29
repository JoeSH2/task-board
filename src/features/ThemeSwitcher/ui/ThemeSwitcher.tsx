import { FC, useState } from 'react';
import { Theme } from 'src/shared/consts/theme.ts';
import { useTheme } from 'src/shared/hooks/useTheme.tsx';
import { cls } from 'src/shared/lib/cls.ts';
import { FlexRow } from 'src/shared/ui/Flex/FlexRow.tsx';
import { Toggle } from 'src/shared/ui/Toggle';

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
