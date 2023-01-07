import { useState, useRef } from "react";
import './styles.sass'

interface musica {
  id: number;
  nome: string;
  autor: string;
  image: string;
  url: string;
}

interface propsPlayer {
  musicaPlaying: musica | null;
  playNext: () => void;
  playPrevious: () => void;
}
export default function Player(props: propsPlayer) {
  const { musicaPlaying, playNext, playPrevious } = props;
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const tooglePlay = () => {
    if(!audioRef.current){
      return;
    }
    if(!isPlaying){
      audioRef.current.play()
      setIsPlaying(true)
    }else{
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const carregou = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setDuration(Math.floor(audioRef.current.duration))
      audioRef.current.addEventListener('timeupdate', () => {
        setProgress(Math.floor(audioRef.current? audioRef.current.currentTime : 0))
      })
    }
  }

  const formatterSeconds = (segundos: number) =>{
    return Math.floor(segundos/60) + ":" + (segundos%60).toString().padStart(2, '0');

  }

  return (
    <div id="playerContainer">
      {musicaPlaying ?
        <div id="containerIsPlaying">
          <div id="containerInfo">
            <img src={musicaPlaying.image} alt="Tocando agora" id="imgMusica"/>
            <div id="infoMusicaAtual">
              <span id="nomeMusica">{musicaPlaying.nome}</span>
              <span id="autorMusica">{musicaPlaying.autor}</span>
            </div>
          </div>
          <div id="playerControles">
            <div id="playerButtonsContainer">
              <button onClick={() => { playPrevious() }} className="playerButtons">
                <img src="../play-back.svg" alt="Ir para musica anterior"/>
              </button>
              <button onClick={() => { tooglePlay() }} className="playerButtons">
                <img src={isPlaying?"../stop.svg":"../play.svg"} style={isPlaying?{}:{padding:'10px'}}alt="Tocar ou pausar musica atual"/>
              </button>
              <button onClick={() => { playNext() }} className="playerButtons">
                <img src="../play-forward.svg" alt="Ir para proxima musica"/>
              </button>
            </div>
            <div id="progressPlayer">
              <div>{formatterSeconds(progress)} : {formatterSeconds(duration)}</div>
              <progress max={100} value={progress/duration*100}>
                {Number((progress/duration).toFixed(2))*100}%
              </progress>
            </div>
          </div>
          <audio
            autoPlay={true}
            onEnded={() => { playNext() }}
            src={musicaPlaying.url}
            ref={audioRef}
            onLoadedMetadata={() => { carregou() }}
          />
        </div> : <></>}
    </div>
  );
}