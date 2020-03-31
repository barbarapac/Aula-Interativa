export default theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'grey',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'grey',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'grey',
    },
  },
  notchedOutline: {}
})