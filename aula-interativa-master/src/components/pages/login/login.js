import React from 'react'
import Form from './form/form'
import Menu from '../../menu/menu'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import styles from './styles'
import Rodape from '../../rodape/rodape'

class Login extends React.Component {
  render(){
    const{ classes } = this.props
    return(
      <div>
        <div className={ classes.root }>
            <Menu />
            <Grid item xs={ 6 } className={ classes.textArea }>
              <Grid item xs={ 12 } md={ 12 } lg={6}>
              <Typography variant="display1" gutterBottom className={ classes.typography }>Login</Typography>
                <Paper className={ classes.paper }>
                    <Form />
                </Paper>
              </Grid>
            </Grid>
            <Rodape />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Login)