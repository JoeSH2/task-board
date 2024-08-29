import { FC, memo, ReactElement } from 'react';
import { ReactSVG } from 'react-svg';
import { cls } from 'src/shared/lib/cls.ts';

import style from './Svg.module.scss';

interface SvgProps {
  src: string;
  fallback?: ReactElement;
  loading?: ReactElement;
  className?: string;
}

export const Svg: FC<SvgProps> = memo((props) => {
  const { src, fallback, loading, className } = props;
  return (
    <ReactSVG
      loading={loading ? () => loading : () => <div>loading</div>}
      fallback={fallback ? () => fallback : () => <div>error</div>}
      className={cls(style.Svg, {}, [className])}
      src={src}
    />
  );
});
