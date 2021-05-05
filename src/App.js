import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [codigo, setCodigo] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [status, setStatus] = useState([])

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/cidadealta/exercise/db')
      .then(data => {
        setCodigo(data.data.codigopenal)
        setUsuarios(data.data.usuarios)
        setStatus(data.data.status)
      })
  }, [])

  return (
    <div>
      {codigo.map(item =>
        <li>{item.nome}</li>
      )}

      <br />

      {usuarios.map(item =>
        <li>{item.nome}</li>
      )}

      <br />

      {status.map(item =>
        <li>Descrição: {item.descricao}</li>
      )}
    </div>
  )
}

export default App;