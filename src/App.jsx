import { useState } from "react";
import "./App.css";
import "./index.css";

const postInitialData = [
  {
    userName: "",
    title: "/Aqui ficará o titulo do seu post/",
    content: "/Aqui ficará o texto principal do seu post/",
  }
];

function Post() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [user, setUser] = useState(null);
  const [isModalOn, setIsModalOn] = useState(false);
  const [filterPost, setfilterPost] = useState(postInitialData);

  function getData() {
    const postUser = {
      userName: user,
      title: title,
      content: content,
    };
    
    turnModalOff()

    const newPost = [postUser];
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
  function onChangeUserName(event){
    setUser(event.target.value)
  }

  return (
    <>
    <div class="main">
      <button className="addPost" onClick={turnModalOn}>ADICIONAR POST</button>
        {isModalOn && (<div className="modal">
              <input onChange={onChangeTitle} className="question1" type="text" placeholder="Digite o título do Post..." />
              <input onChange={onChangeUserName} className="question1" type="text" placeholder="Digite o seu nome de usuário..." />
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
                  <img className="pfpicture" src="./user.jpg" alt="" />
                </a>
                <h1 className="user">{user}</h1>
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
      <div className="fakePost">
        <div className="post">
          <div className="top">
            <a className="profile">
              <img className="pfpicture" src="./link.jpeg" alt="" />
            </a>
            <h1 className="user">Victor Pinheiro</h1>
          </div>
          <h1 className="title">Vaga de Emprego</h1>
          <div className="content">
            <p>
              Achei uma vaga de emprego numa empresa que se chama Cyber Gênios, ouvi dizer muito bem sobre, dizem que o chefe e o treinador sao muito gente boa, vou me candidatar
            </p>
            <img src="" alt="" />
          </div>
          <div className="botton">
            <p className="date"></p>
          </div>
        </div>
      </div>
      <div className="fakePost">
        <div className="post">
          <div className="top">
            <a className="profile">
              <img className="pfpicture" src="./gui.jpg" alt="" />
            </a>
            <h1 className="user">Guilherme Vieira</h1>
          </div>
          <h1 className="title">Colocaram outra skin doidona no Fortnite</h1>
          <div className="content">
            <p>
              Hoje lançou uma skin do South Park no Fortnite, tipo, o que esses caras tem na cabeça pra colocar esses personagens num jogo de tiro??? Dito isso, eu comprei todos...
            </p>
            <img src="" alt="" />
          </div>
          <div className="botton">
            <p className="date"></p>
          </div>
        </div>
      </div>
      <div className="fakePost">
        <div className="post">
          <div className="top">
            <a className="profile">
              <img className="pfpicture" src="./pedro.jpg" alt="" />
            </a>
            <h1 className="user">Pedro Paschoal</h1>
          </div>
          <h1 className="title">Madrid é um país lindo</h1>
          <div className="content">
            <p>
              A Espanha abriga a cidade de Madrid, que reside um povo muito educado e uma cultura muito bela, com certeza eu voltaria!
            </p>
            <img src="" alt="" />
          </div>
          <div className="botton">
            <p className="date"></p>
          </div>
        </div>
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
        <img className="home" src="./home.png" alt=""/>
      </button>

      <button className="btn-icone">
        <img className="mais" src="./more.png" alt=""/>
      </button>

      <button className="btn-icone">
        <img className="favorito" src="./fvr.png" alt=""/>
      </button>
    </div>

    <div className="person">
    <button>
      <img className="perfil" src="./profile.png" alt=""/>
    </button>

    <button>
      <img className="sininho" src="./alert.png" alt=""/>
    </button>
  </div>
  <div class="main">
  <p>Novo post</p>
  </div>
  <div class="caixa2">
    <h1 className="amigos">Amigos</h1>
    <p className="amgInfo"> Você ainda não tem amigos :(</p>
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