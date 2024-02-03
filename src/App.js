import React, { Component } from "react";
import './estilo.css'

class App extends Component{

    constructor(props){
      super(props);
      this.state = {
          textoFrase: ''
      };
      
      this.frases = [  "Acredite em si mesmo, tudo será possível.",
      "A felicidade está nas pequenas coisas.",
      "Seja grato pelo que você tem.",
      "Siga seus sonhos.",
      "O amor é a força mais poderosa do universo.",
      "A vida é uma jornada, aproveite cada momento.",
      "Aprenda com seus erros.",
      "Perdoe os outros e a si mesmo.",
      "Seja positivo e otimista.",
      "Confie na sua intuição.",
      "Viva o presente.",
      "Cuide da sua saúde física e mental.",
      "Seja honesto e verdadeiro.",
      "Ajude os outros.",
      "Faça a diferença no mundo.",
      "Seja feliz!",
      "Acredite que tudo é possível.",
      "O melhor ainda está por vir.",
      "Você é capaz de realizar grandes coisas.",
      "Nunca desista dos seus sonhos.",
      "Seja forte e corajoso.",
      "Enfrente seus desafios com confiança.",
      "Aprenda com as dificuldades.",
      "Seja resiliente.",
      "Continue tentando, mesmo quando as coisas forem difíceis.",
      "Você nunca sabe o que o futuro reserva.",
      "Esteja aberto a novas experiências.",
      "Abrace a mudança.",
      "Viva a vida ao máximo.",
      "Seja feliz!",
    ]
      this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }
    quebraBiscoito(){
        let state = this.state
        let numAleatório = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[numAleatório];
        this.setState(state);

    }
    render(){
      return(
          <div className="container">
              <img src={require('./Assets/biscoito.png')} className="img"/>
              <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
              <h3 className="txtfrase">{this.state.textoFrase}</h3>
          </div>
      )
  }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}> {this.props.nome} </button>
            </div>
        )
    }
}

export default App;