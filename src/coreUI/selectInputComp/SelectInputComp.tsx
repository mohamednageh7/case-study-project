import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  value: string;
  label?: string;
  id?: string;
  handleChange: (e: SelectChangeEvent<any>) => void;
  options:
    | { id: string | number; text: string; value: string | number }[]
    | null;
  name: string;
};

const SelectInputComp = ({
  value,
  label = 'label',
  id = 'select_id',
  handleChange,
  options,
  name,
}: Props) => {
  return (
    <div>
      <FormControl sx={{ width: '100%', textAlign: 'left' }}>
        {label && <InputLabel id={id}>{label}</InputLabel>}
        <Select
          labelId={id}
          id={id}
          value={value}
          onChange={handleChange}
          autoWidth
          label={label}
          name={name}
        >
          <MenuItem value={'none'}>None</MenuItem>
          {options?.map((items) => (
            <MenuItem key={items.id} value={items.text}>
              {items.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInputComp;
