import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Botao from '@material-ui/core/Button';
import styles from './styles'

class Button extends React.Component {
    render(){
        const { classes } = this.props

        return(
            <div>
                <Botao type={ this.props.type } variant="outlined" color={ this.props.color } className={classes.button}>
                    { this.props.title }
                </Botao>
            </div>
        )
    }
}

export default  withStyles(styles)(Button)