import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import IconButton from '@mui/material/IconButton';

interface Props {
  label?: string;
  id?: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleClickIcon: () => void;
  icon: React.ReactNode | null;
}

const TextInputComp = ({
  value,
  label = 'TextField',
  id = 'input-with-icon-textfield',
  handleChange,
  handleClickIcon,
  icon,
}: Props) => {
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickIcon}
              onMouseDown={handleMouseDown}
              edge="end"
            >
              {icon}
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default TextInputComp;
