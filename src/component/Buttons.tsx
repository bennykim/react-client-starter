import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonsPoprs = {};

const Buttons: FC<ButtonsPoprs> = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default Buttons;
