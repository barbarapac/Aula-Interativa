import React, { Component } from 'react'

import '../../../css/pure-min.css'
import '../../../css/marketing-old-ie.css'
import '../../../css/marketing.css'

import Menu from '../../menu/menu'
import FormContato from './form/formContato'
import Avatar from './avatar/avatar'
import { Link } from 'react-router-dom'
import Rodape from '../../rodape/rodape'

class App extends Component {
    render() {
        const{ classes } = this.props

        return (
        <div>
            <Menu />
            <div className="splash-container">
                <img className="splash-container pure-img-responsive" width="100%" alt="Imagem de inicio site" src={require('../../images/home.jpg')} ></img>
                <div className="splash">
                    <Link to="/aluno">
                       <h1 className="splash-head pure-button" >Clique para jogar</h1>
                    </Link>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="content">
                    <h2 className="content-head is-center">Sobre</h2>

                    <div className="pure-g">
                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                            <h3 className="content-subhead">
                                <i className="fa fa-rocket"></i>
                                Quem somos?
                            </h3>
                            <p>
                                Somos um grupo de alunos, graduantes dos cursos de 'Engenharia de Bioprocessos e Bio Técnologia' e 
                                'Engenharia de software' da Universidade Técnologica Fereral do Paraná.
                            </p>
                        </div>
                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                <i className="fa fa-mobile"></i>
                                Qual o objetivo do jogo?
                            </h3>
                            <p>
                                {/* O Jogo esta voltado à apoiar o processo de ensino na disciplina de biologia, onde o professor orienta seus estudantes a utilizarem a plataforma como forma  de revisar e fixar o conteúdo previamente estudado, maximizando assim as chances de que o processo de aprendizagem ocorra de forma diferenciada e eficaz. */}
                                O cenário atual do ensino brasileiro, principalmente em escolas públicas  de ensino médio, apresentam diversos problemas relacionados ao uso efetivo das Tecnologias da Informação e Comunicação (TICs) onde um dos grandes desafios encontrados pelos docentes é manter o foco dos discentes em seu aprendizado.
                            </p>
                            <p>
                                Analisando o cenário descrito anteriormente, optou-se por abordar inicialmente o conteúdo da disciplina de biologia, por ser uma das disciplinas onde os estudantes encontram maior dificuldade em vestibulares e outros exames como o Exame Nacional do Ensino Médio (ENEM), e também pela afinidade da equipe com o conteúdo.
                            </p>
                            <p>
                                Neste contexto, surgiu esta proposta de desenvolvimento de  uma aplicação que possa ser implementada como forma de aumentar a absorção do conteúdo da disciplina, utilizando-se do conceito de sala de aula invertida.
                            </p>
                            <p>
                                Como contribuição em vista a minimizar tal problema, esta proposta consiste  no desenvolvimento de uma aplicação que será utilizada para apoiar o processo de ensino na disciplina de biologia, onde o professor orienta seus estudantes a utilizarem a plataforma como forma de revisar e fixar o conteúdo previamente estudado, maximizando assim as chances de que o processo de aprendizagem ocorra de forma diferenciada e eficaz.
                            </p>
                            <p>
                                Desta forma, o estudante terá acesso ao conteúdo de aula, além do conteúdo extra disponível, o qual deve ser utilizado como base e também terá acesso a exercícios, em forma de jogo, para testar os conhecimentos obtidos em sala de aula em conjunto com o material auxiliar disponibilizado através da aplicação
                            </p>
                        </div>
                    </div>
                </div>

                <div className="ribbon l-box-lrg pure-g">
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
                        <h2 className="content-head content-head-ribbon">Desenvolvedores</h2>
                    </div>
                    <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                        <Avatar width="193" />
                    </div>
                </div>

                <div className="content">
                    <h2 className="content-head is-center">Alguma dúvida, sugestões?</h2>
                    <div className="pure-g">
                        <FormContato />
                    </div>
                </div>

                <Rodape />
            </div>
        </div>
        )
    }
}

export default (App);
