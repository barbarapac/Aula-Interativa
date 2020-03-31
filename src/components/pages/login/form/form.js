import React from 'react'
import Input from '../../../input/input'
import Button from '../../../button/button'
import http from '../../../../server/http'

class Form extends React.Component{

    state = {
        email: '',
        sneha: ''
    }

    limpaForm(){
        this.setState({
          email: '',
          senha: ''
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
        const { email, senha } = this.props

        return(
            <div>
                <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                    <form className="pure-form pure-form-stacked" onSubmit={ e => this.enviaForm(e) }>
                        <fieldset>
                            <Input label="E-mail" value={ email } placeholder="E-mail" onChange={ e => this.setState({ email: e.target.value }) } type="email" name="E-mail"/>
                            <Input label="Senha"  value={ senha } placeholder="senha" onChange={ e => this.setState({ senha: e.target.value }) } type="password" name="Comentário"/>
                        </fieldset>
                        <Button type="submit" color="primary" title="Enviar"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default (Form)