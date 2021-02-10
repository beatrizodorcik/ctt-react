import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Usuario, Post } from './types/api';


function App() {
  const [usuarios, setUsuario] = useState([]);
  const [selecionado, setSelecionado] = useState<Number>();
  const [posts, setPosts] = useState<any>([]);

  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(response => setUsuario(response.data))
  }, []);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${selecionado}/posts`)
      .then(response => setPosts(response.data))
  }, [selecionado]);


  return (
    <div className="App">
      <h1>Usuários | ID </h1>
      {usuarios?.map((usuario: Usuario) => (
        <ul key={usuario.id}>
          <li><a onClick={() => setSelecionado(usuario.id)}>{usuario.name}  | {usuario.id}</a></li>
        </ul>
      ))}
      
      <h3>Posts</h3>
      {posts?.map((post: Post) => (
        <>
          <ul key={post.id}>
            <p>{post.title}</p>
          </ul>
        </>
      ))}
    </div>
  );
}

export default App;