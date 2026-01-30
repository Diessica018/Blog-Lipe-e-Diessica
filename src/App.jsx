import { use, useState, useTransition } from 'react'
import './App.css'

function Post(){
  
  const [title, settitle] = useState(null)
  const [category, setcategory] = useState(null)
  const [content, setcontetn] = useState(null)

  const postInitialData = [{
    title: '',
    category: '',
    content: '',
  },
  {
    title: 'Pastel',
    category: 'comida',
    content: 'pastel e bom demais',
  }]

  const [filterPost, setfilterPost] = useState(postInitialData)

  function getData(){
    const postUser = {
      title: title,
      category: category,
      content: content,
    }
  const newPost = [...postInitialData, postUser]
  setfilterPost(newpost)
  }

return (
    <form onSubmit={getData}>
      {filterPost.map((Blog) => {
        <>
          <button type="submit">Criar Post</button>
          <div id="post">
            <div id="top">
              <a id="profile">
                <img id="pfpicture" src="../link.jpeg" alt="" />
              </a>
              <h1 id="user">{user}</h1>
            </div>
            <h1 id="title">Vaga de Emprego</h1>
            <div id="content">
              <p>
                Recentemente eu me candidatei para uma vaga de programador
                Junior em uma empresa chamada Cyber Genios, dizem que é muito
                disputada, será que eu consigo entrar?
              </p>
              <img src="" alt="" />
            </div>
            <div id="botton">
              <p id="date">{date}</p>
              <button id="like">Like</button>
            </div>
          </div>
        </>;
      })}
    </form>
  );
}

function PostFake() {
  return(
    <>
      <div id='post'>
        <div id='top'>
          <a id='profile'>F</a>
          <h1 id='user'>Felipe Nunes</h1>
        </div>
        <div id='content'>
          <p>Esse texto fala da imagem abaixo, muito legal né? Isso é apenas um teste!</p>
          <img src="" alt="" />
        </div>
        <div id='botton'>
          <p id='date'>26/01/2026</p>
          <p id='time'>05:05</p>
        </div>
        <div id='action'>
          <button id='like'>Like</button>
          <button id='dislike'> Dislike</button>
        </div>
      </div>
    </>
  )
}

function App(){
  return(
    <>
      <div className='container'>
        <Post />
      </div>
    </>
  );
}
export default App
