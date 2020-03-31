import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles';

class Input extends React.Component {
  render(){

    return(
      <div>
        <label label={ this.props.title }>{ this.props.label }</label>
        <input
          id= { this.props.id }
          value= { this.props.value }
          placeholder={ this.props.placeholder }
          onChange={ e => this.props.onChange(e) }
          type={ this.props.type }
          name={ this.props.name }
        />
      </div>
    )
  }
}

export default withStyles(styles)(Input)