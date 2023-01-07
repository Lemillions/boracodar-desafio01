import './styles.sass'
interface musica {
  id: number;
  nome: string;
  autor: string;
  image: string;
  url: string;
}

interface propsLista {
  listaMusicas: musica[];
  musicaPlaying: musica | null;
  playMusica: (id: number) => void;
}
export default function ListaMusicas(props: propsLista) {
  const { listaMusicas, musicaPlaying, playMusica } = props;
  return (
    <div id="containerLista">
      {listaMusicas.map((musica: musica, index: number) => {
        return (
          <div
            className="musicaContainer"
            key={musica.id}
            onClick={() => { playMusica(index) }}
            style={musicaPlaying?.id === musica.id ? { backgroundColor: '#8257E5' } : {}}
          >
            <img src={musica.image} alt={musica.nome} className="imgMusica" />
            <div className="infoMusica">
              <span className="nomeMusica">{musica.nome}</span>
              <span className="autorMusica">{musica.autor}</span>
            </div>
          </div>
        )
      })}
    </div>
  );
}