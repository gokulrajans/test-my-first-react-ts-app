// src/components/Autocomplete/Autocomplete.model.tsx

export interface AutocompleteModel {

    // Array of available options for the Autocomplete
    options: string[],

    // Currently selected option
    selectedOption: null,

    // Function to handle option selection
    onOptionSelect: () => void,

    // Add other properties and functions as needed for your Autocomplete
  }
