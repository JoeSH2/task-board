import { Box, CircularProgress, Typography } from '@mui/material';
import { FC } from 'react';

export const TestComponent: FC = () => {
  return (
    <div>
      <h2>TEST COMPONENT</h2>
      <section>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height={'100vh'}
        >
          <CircularProgress />
          <Typography variant="h6" mt={2}>
            Загрузка
          </Typography>
        </Box>
      </section>
    </div>
  );
};
