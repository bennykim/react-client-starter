import { FC, ReactNode } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

type TextProps = {
  children: ReactNode;
  style?: string;
  variant?: TypographyProps['variant'];
};

const Text: FC<TextProps> = ({ style, variant, children }) => {
  return (
    <Typography className={style} variant={variant}>
      {children}
    </Typography>
  );
};

export default Text;
