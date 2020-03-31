
import React from 'react'

import '../../../../css/pure-min.css'
import '../../../../css/marketing-old-ie.css'
import '../../../../css/marketing.css'

import Input from '../../../../components/input/input'
import Button from '../../../button/button'
import http from '../../../../server/http'
class FormContato extends React.Component {

  state= {
    nome: '',
    email: '',
    comentario: ''
  }

  limpaForm(){
    this.setState({
      nome: '',
      email: '',
      comentario: ''
    })
  }

  componentWillMount(){
    this.limpaForm()
  }

  enviaForm(e){
    e.preventDefault()

    const { ...other } = this.state
    http.post('',{ ...other })
      .then(() => this.limpaForm())
      .catch(err => { console.log("Erro ao gravar") })
  }

  render(){
      const { nome, email, comentario } = this.state

      return(

        <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
          <form className="pure-form pure-form-stacked" onSubmit={ e => this.enviaForm(e) }>
            <fieldset>
              <Input label="Nome" id="nome" value={ nome } placeholder="Nome" onChange={ e => this.setState({ nome: e.target.value }) } type="text" name="Nome"/>
              <Input label="E-mail" id="email" value={ email } placeholder="E-mail" onChange={ e => this.setState({ email: e.target.value }) } type="email" name="E-mail"/>
              <Input label="Comentário" id="comentatio" value={ comentario } placeholder="Comentário" onChange={ e => this.setState({ comentario: e.target.value }) } type="text" name="Comentário"/>

              <Button type="submit" color="primary" title="Enviar"/>
            </fieldset>
          </form>
        </div>
      )
  }
}

export default (FormContato)