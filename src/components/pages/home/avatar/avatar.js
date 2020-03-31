import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import styles from './styles'

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <div className={ classes.root }>
        <div>
          <Avatar alt="Remy Sharp" src={require('./images/simone.jpeg')} className={ classes.bigAvatar }/>
          <label className={ classes.labelAvatar }>Simone Borges</label>
          <div>
            <a href="https://www.linkedin.com/in/simone-borges-0b8a535/" alt="Icon Linkedin."><img className= { classes.imgLinkedin } src={require('./images/icon-linkedin.png')} /></a>
            {/* <a href="" alt="Icon Lattes."><img className= { classes.imgLattes } src={require('./images/icon-lattes.png')} /></a> */}
          </div>
        </div>
        <p>
          Orientadora do projeto. Graduada em Tecnologia em Informática pela Universidade do Estado de Minas Gerais (2001). Mestre em Ciência da Computação pela Universidade Federal de São Carlos (2008). Doutora em Ciências da Computação e Matemática Computacional pela Universidade de São Paulo (2017), com estágio sanduíche de um ano no Japan Advanced Institute of Science and Technology, Japan. Possui experiência na área de Ciência da Computação, com ênfase em Engenharia de Software, atuando principalmente nos temas: Gerência de Configuração de Software, Manutenção e Qualidade de Software; e em Computação Aplicada à Educação, nas seguintes áreas de interesse: Tecnologia Persuasiva, Gamificação, Game-based learning, Computer-Supported Collaborative Learning (CSCL) e Interação Humano-Computador.
        </p>
      </div>

      <div className={ classes.root }>
        <div>
          <Avatar alt="Remy Sharp" src={require('./images/barbara.jpeg')} className={ classes.bigAvatar } />
          <label className={ classes.labelAvatar }>Bárbara Pacheco</label>
          <div>
            <a href="https://www.linkedin.com/in/b%C3%A1rbara-antunes-pacheco-51b379b8/" alt="Icon Linkedin."><img className= { classes.imgLinkedin } src={require('./images/icon-linkedin.png')} /></a>
            {/* <a href="" alt="Icon Lattes."><img className= { classes.imgLattes } src={require('./images/icon-lattes.png')} /></a> */}
          </div>
        </div>
        <p>
          Graduanda do curdo de Eng. de Software na UTFPR. Iniciou a carreira na área de TI com 16 anos, através da oportunidade disponibilizada pela empresa CISS S.A. O projeto era voltado para formação de programadores PowerBuilder, dentre 8 pessoa, 4 destacados seriam contratados para estagio. Trabalhou por 5 anos na empresa, se destacou na area de banco de dados, onde desenvolveu inicialmente relatórios SQL para o sistema legado da empresa. Em evolução ao desenvolvimento SQL, migrou para a areá e conversão de banco de dados e configuração/manutenção de servidores, no setor de implantação e fabrica de software. Com sede de mudança, buscou novas oportunidades na área de desenvolvimento web, onde atualmente se dedica às tecnologias React, VUE.js, JS, CSS3, HTML5(front-end). Tecnologias utilizadas na empresa em que trabalha atualmente.
        </p>
      </div>

      <div className={ classes.root }>
        <div>
          <Avatar alt="Remy Sharp" src={require('./images/joao.jpeg')} className={ classes.bigAvatar } />
          <label className={ classes.labelAvatar }>João Fonseca</label>
          <div>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-visaco-de-queiroz-fonseca-36748a9a/" alt="Icon Linkedin."><img className= { classes.imgLinkedin } src={require('./images/icon-linkedin.png')} /></a>
            {/* <a href="" alt="Icon Lattes."><img className= { classes.imgLattes } src={require('./images/icon-lattes.png')} /></a> */}
          </div>
        </div>
        <p>
          Graduando em Engenharia de Software na UTFPR - câmpus Dois Vizinhos, técnico formado em Manutenção de Aeronaves na Escola Técnica (Etec) Alberto Santos Dumont - Guarujá, bolsista por um ano no projeto de protagonismo estudantil da UTFPR-DV no projeto Site Acessível em Libras, estágio interno na UTFPR-DV por 2 anos, atualmente trabalhando na empresa LeoSoft Cia com Desenvolvimento de Apps Android Nativo, vinculado ao projeto CoopCredWeb.
        </p>
      </div>

      <div className={ classes.root }>
        <div>
          <Avatar alt="Remy Sharp" src={require('./images/lucas.jpeg')} className={ classes.bigAvatar } />
          <label className={ classes.labelAvatar }>Lucas Tomazoni</label>
          <div>
            <a href="https://www.linkedin.com/in/lucas-thomazoni-b81009170/" alt="Icon Linkedin."><img className= { classes.imgLinkedin } src={require('./images/icon-linkedin.png')} /></a>
            {/* <a href="" alt="Icon Lattes."><img className= { classes.imgLattes } src={require('./images/icon-lattes.png')} /></a> */}
          </div>
        </div>
        <p>
          Orintadora do projeto Simone Borges. Graduada em Tecnologia em Informática pela Universidade do Estado de Minas Gerais (2001). Mestre em Ciência da Computação pela Universidade Federal de São Carlos (2008). Doutora em Ciências da Computação e Matemática Computacional pela Universidade de São Paulo (2017), com estágio sanduíche de um ano no Japan Advanced Institute of Science and Technology, Japan. Possui experiência na área de Ciência da Computação, com ênfase em Engenharia de Software, atuando principalmente nos temas: Gerência de Configuração de Software, Manutenção e Qualidade de Software; e em Computação Aplicada à Educação, nas seguintes áreas de interesse: Tecnologia Persuasiva, Gamificação, Game-based learning, Computer-Supported Collaborative Learning (CSCL) e Interação Humano-Computador.
        </p>
      </div>
    </Grid>
  );
}

export default withStyles(styles)(ImageAvatars);