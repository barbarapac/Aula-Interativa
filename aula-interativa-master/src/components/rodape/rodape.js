import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import styles from './styles'
import '../../css/pure-min.css'
import '../../css/marketing-old-ie.css'
import '../../css/marketing.css'

class Rodape extends React.Component {
  render(){
    const { classes } = this.props
    return(
        <div className="footer l-box is-center pure-menu-heading">
          <img width="90" className="pure-img-responsive" className={ classes.imagemFooter } src={require('../images/logoUtf.png')}></img>
          <img width="90" className="pure-img-responsive" className={ classes.imagemFooter } src={require('../images/logoSoftware.png')}></img>
      </div>
    )
  }
}

export default withStyles(styles)(Rodape)