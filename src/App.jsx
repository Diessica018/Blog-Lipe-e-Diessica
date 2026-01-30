import { useState } from "react";
import "./App.css";
import "./index.css";

const postInitialData = [
  {
    title: "",
    category: "",
    content: "",
  },
  {
    title: "Pastel",
    category: "comclassNameNamea",
    content: "pastel e bom demais",
  },
];

function Post() {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState(null);

  const [filterPost, setfilterPost] = useState(postInitialData);

  function getData() {
    const postUser = {
      title: title,
      category: category,
      content: content,
    };
    const newPost = [...postInitialData, postUser];
    setfilterPost(newPost);
  }

  return (
    <form onSubmit={getData}>
      {filterPost.map((userPost) => {
        <>
          <button type="submit">Criar Post</button>
          <div classNameName="post">
            <div classNameName="top">
              <a classNameName="profile">
                <img classNameName="pfpicture" src="../link.jpeg" alt="" />
              </a>
              <h1 classNameName="user"></h1>
            </div>
            <h1 classNameName="title">Vaga de Emprego</h1>
            <div classNameName="content">
              <p>
                Recentemente eu me candclassNameNameatei para uma vaga de
                programador Junior em uma empresa chamada Cyber Genios, dizem
                que é muito disputada, será que eu consigo entrar?
              </p>
              <img src="" alt="" />
            </div>
            <div classNameName="botton">
              <p classNameName="date"></p>
              <button classNameName="like">Like</button>
            </div>
          </div>
        </>;
      })}
    </form>
  );
}

function PostFake() {
  return (
    <>
      <div classNameName="post">
        <div classNameName="top">
          <a classNameName="profile">F</a>
          <h1 classNameName="user">Felipe Nunes</h1>
        </div>
        <div classNameName="content">
          <p>
            Esse texto fala da imagem abaixo, muito legal né? Isso é apenas um
            teste!
          </p>
          <img src="" alt="" />
        </div>
        <div classNameName="botton">
          <p classNameName="date">26/01/2026</p>
          <p classNameName="time">05:05</p>
        </div>
        <div classNameName="action">
          <button classNameName="like">Like</button>
          <button classNameName="dislike"> Dislike</button>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
    <div className="header ">
      <input className="sidebar" type="text" placeholder="Procure seu blog favorito!"/>
      <button className="botao">Seus Amigos</button>
      <button className="botao">Viagens</button>
      <button className="botao">Comidas</button>
      <button className="botao">Vagas de Emprego</button>
    </div>

    <div className="container">

      <button className="btn-icone">
        <img className="home" src="/botao-home (1).png" alt=""/>
      </button>

      <button className="btn-icone">
        <img className="mais" src="/mais (1).png" alt=""/>
      </button>

      <button className="btn-icone">
        <img className="favorito" src="/favorito.png" alt=""/>
      </button>
    </div>

    <div className="person">
    <button>
      <img className="perfil" src="/do-utilizador.png" alt=""/>
    </button>

    <button>
      <img className="sininho" src="/notificacao.png" alt=""/>
    </button>
  </div>

    <div>
      <Post />
    </div>
      
    </>
  );
}
export default App;
