// src/components/Autocomplete/Autocomplete.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Autocomplete';
import { AutocompleteModel } from './Autocomplete.model';
const AutocompleteComponent: Meta<typeof Autocomplete> = {
    component: Autocomplete,
    title: 'Components/Autocomplete',
    argTypes: {

    }
};
export default AutocompleteComponent;

type Story = StoryObj<AutocompleteModel>;

export const CustomAutocomplete: Story = {
    args: {
        options: ['first', 'second', 'third'   ]
    }
}
