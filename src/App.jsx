import { useState } from "react";
import "./App.css";
import "./index.css";

const postInitialData = [
  {
    title: "",
    content: "",
  },
  {
    title: "Pastel",
    content: "Pastel é bom demais",
  }
];

function Post() {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState(null);
  const [user, setuser] = useState("Lipe N");
  const [isModalOn, setIsModalOn] = useState(false);

  const [filterPost, setfilterPost] = useState(postInitialData);

  function getData() {
    const postUser = {
      title: title,
      content: content,
    };
    
    turnModalOff()

    const newPost = [postUser, ...postInitialData];
    setfilterPost(newPost);
  }
  function turnModalOn(){
      setIsModalOn(true)
    }
  function turnModalOff(){
      setIsModalOn(false)
    }

  function onChangeTitle(event){
    setTitle(event.target.value)
  }

  function onChangeContent(event){
    setContent(event.target.value)
  }

  return (
    <>
    <div class="main">
      <button className="addPost" onClick={turnModalOn}>ADICIONAR POST</button>
        {isModalOn && (<div className="modal">
              <input onChange={onChangeTitle} className="question1" type="text" placeholder="Digite o título do Post..." />
              <br />
              <textarea onChange={onChangeContent} className="question2" type="text" placeholder="Digite o Conteúdo do Post..." />
              <button onClick={getData}>Criar Post</button>
            </div>)}
    </div>
    <div className="feed">
      <h1 className="mainTitle">Posts</h1>
      {filterPost.map((postData)=>{
        return(
          <>
            <div className="post">
            <div className="top">
              <a className="profile">
                <img className="pfpicture" src="../link.jpeg" alt="" />
              </a>
              <h1 className="user">Lipe N</h1>
            </div>
            <h1 className="title">{postData.title}</h1>
            <div className="content">
              <p>
                {postData.content}
              </p>
              <img src="" alt="" />
            </div>
            <div className="botton">
              <p className="date"></p>
            </div>
          </div>
        </>
      )})}
  </div>   
  </>
  );
}

function App() {
  return (
    <>
    <div className="header ">
      <input className="sclassNameebar" type="text" placeholder="Procure seu blog favorito!"/>
      <button className="botao">Seus Amigos</button>
      <button className="botao">Viagens</button>
      <button className="botao">ComclassNameas</button>
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
  <div class="main">
  <p>Novo post</p>
  </div>
  <div class="caixa2">
    <p>Who to follow</p>
  </div>
  <div className="feed">
    <h1 className="mainTitle">Posts</h1>
  </div>
    <div>
      <Post />
    </div>
      
    </>
  );
}
export default App;