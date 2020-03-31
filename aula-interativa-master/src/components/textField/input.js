import React from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './styles'

class Input extends React.Component {
    render(){
        const { classes } = this.props

        return(
            <div>
                <TextField
                    className={classes.margin}
                    InputLabelProps={{
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    },
                    }}
                    InputProps={{
                    classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                    },
                    }}
                    label={ this.props.label }
                    variant="outlined"
                    id="custom-css-outlined-input"
                />
            </div>
        )
    }
}

export default withStyles(styles)(Input)