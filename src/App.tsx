import { useState } from "react";
import Player from './components/Player';
import ListaMusicas from "./components/ListaMusicas";
import Header from "./components/Header"
import './App.css';

interface musica {
  id: number;
  nome: string;
  autor: string;
  image: string;
  url: string;
}


function App() {
  const [musicaPlaying, setMusicaPlaying] = useState<musica | null>(null);
  const listaMusicas: musica[] = [
    {
      id: 1,
      nome: "In The End",
      autor: "Linkin Park",
      image: "../end.png",
      url: "../inTheEnd.mp3"
    },
    {
      id: 2,
      nome: "Numb",
      autor: "Linkin Park",
      image: "../numb.webp",
      url: "../numb.mp3"
    },
    {
      id: 3,
      nome: "In The End",
      autor: "Linkin Park",
      image: "../end.png",
      url: "../inTheEnd.mp3"
    },
    {
      id: 4,
      nome: "Numb",
      autor: "Linkin Park",
      image: "../numb.webp",
      url: "../numb.mp3"
    }
    ,{
      id: 5,
      nome: "In The End",
      autor: "Linkin Park",
      image: "../end.png",
      url: "../inTheEnd.mp3"
    },
    {
      id: 6,
      nome: "Numb",
      autor: "Linkin Park",
      image: "../numb.webp",
      url: "../numb.mp3"
    }
    ,{
      id: 7,
      nome: "In The End",
      autor: "Linkin Park",
      image: "../end.png",
      url: "../inTheEnd.mp3"
    },
    {
      id: 8,
      nome: "Numb",
      autor: "Linkin Park",
      image: "../numb.webp",
      url: "../numb.mp3"
    }
    ,{
      id: 9,
      nome: "In The End",
      autor: "Linkin Park",
      image: "../end.png",
      url: "../inTheEnd.mp3"
    },
    {
      id: 10,
      nome: "Numb",
      autor: "Linkin Park",
      image: "../numb.webp",
      url: "../numb.mp3"
    }
  ]

  const playNext = () => {
    if(musicaPlaying){
      const index = listaMusicas.findIndex((musica)=> musica.id === musicaPlaying.id)
      console.log(listaMusicas)
      console.log(musicaPlaying)
      if(index === listaMusicas.length - 1){
        setMusicaPlaying(listaMusicas[0])
      }else{
        setMusicaPlaying(listaMusicas[index + 1])
      }
    }
  }

  const playPrevious = () => {
    if(musicaPlaying){
      const index = listaMusicas.findIndex((musica)=> musica.id === musicaPlaying.id)
      if(index === 0){
        setMusicaPlaying(listaMusicas[listaMusicas.length - 1])
      }else{
        setMusicaPlaying(listaMusicas[index - 1])
      }
    }
  }

  const playMusica = (index: number) => {
    setMusicaPlaying(listaMusicas[index])
  }


  return (
    <div className="App">
      <Header />
      <div id="colunaFlex">
      <ListaMusicas
        listaMusicas={listaMusicas}
        musicaPlaying={musicaPlaying}
        playMusica={playMusica}
      />
      <Player
        musicaPlaying={musicaPlaying}
        playNext={playNext}
        playPrevious={playPrevious}
      />
      </div>
    </div>
  );
}

export default App;
