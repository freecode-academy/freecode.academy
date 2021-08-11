import {
  AutocompleteItem,
  ReactAutocompleteProps,
} from './ReactAutocomplete/interfaces'

export type AutocompleteProps = Partial<ReactAutocompleteProps> & {
  classes?: Record<string, any>
  items: AutocompleteItem[]
  value: string
  // onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
  // onSelect: () => void,
  onDelete?: () => void
  viewHandler?: () => void
  addHandler?: () => void
  saveHandler?: () => void
  viewElement?: Record<string, any>
  getItemText?: (item: AutocompleteItem) => string
  fullWidth?: boolean
  style?: Record<string, any>
}
