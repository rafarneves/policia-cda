import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const colunas = [
  {
    dataField: 'id',
    text: 'ID'
  },
  {
    dataField: 'nome',
    text: 'Nome'
  },
  {
    dataField: 'senha',
    text: 'Senha'
  }
];

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      codigo: [],
      usuarios: [],
      coluns: colunas
    }
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/cidadealta/exercise/db')
      .then(data  => {
        const codigo = data.data.codigopenal;
        const usuarios = data.data.usuarios;
        this.setState({ codigo, usuarios });
      })
  }

  render() {
    const { codigo, usuarios } = this.state
    return (
      <div>
        {codigo.map(item => 
          <li>{item.nome}</li>
        )}
        <br />
        {usuarios.map(item => 
          <li>{item.nome}</li>
        )}
      </div>
    )
  }
}

export default App;