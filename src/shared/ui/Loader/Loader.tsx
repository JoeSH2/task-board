import { Box, CircularProgress, Typography } from '@mui/material';
import { FC } from 'react';

import style from './Loader.module.scss';

interface LoaderProps {
  message?: string;
  height?: number | string;
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ message, height }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems="center"
      justifyContent="center"
      height={height}
      className={style.Loader}
    >
      <CircularProgress sx={{ color: 'var(--special-color)' }} />
      {message && (
        <Typography variant="h6" mt={2}>
          {message}
        </Typography>
      )}
    </Box>
  );
};
