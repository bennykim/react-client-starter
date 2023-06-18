import { FC, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { PaletteMode } from '@mui/material';
import Switch from '@mui/material/Switch';
import { PALETTE_MODE_LIGHT, PALETTE_MODE_DARK } from '@/config/constants';

type ThemeModeToggleProps = {
  onChange: Dispatch<SetStateAction<PaletteMode>>;
};

const ThemeModeToggle: FC<ThemeModeToggleProps> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange(event.target.checked ? PALETTE_MODE_DARK : PALETTE_MODE_LIGHT);
  };

  return (
    <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
  );
};

export default ThemeModeToggle;
