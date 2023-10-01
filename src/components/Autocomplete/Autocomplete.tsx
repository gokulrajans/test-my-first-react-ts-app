// src/components/Autocomplete/Autocomplete.tsx
import React from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { AutocompleteModel } from './Autocomplete.model';

const AutocompleteComponent = (props: AutocompleteModel) => {
  const { options } = props;

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="custom-autocomplete-component"
        disableClearable
        options= {options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
};

export default AutocompleteComponent;
