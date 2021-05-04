import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
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
      data: [],
      coluns: colunas
    }
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/cidadealta/exercise/usuarios')
      .then(({ data }) => {
        this.setState({ data })
      })
  }

  render() {
    const { data, coluns } = this.state
    return (
      <div>
        <Table bordered responsive>
          <thead>
            <tr>
              {coluns.map(key =>
                <th style={{textAlign: 'left'}}>{key.text}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => 
              <tr>
                <td key={index}>{item.id}</td>
                <td key={index}>{item.nome}</td>
                <td key={index}>{item.senha}</td>
              </tr>
            )}
          </tbody>
        </Table>
        
      </div>
    )
  }
}

export default App;