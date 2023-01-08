import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from './componentes/Formulario'
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
   // console.log(`Colaborador => ${JSON.stringify(colaborador)}`);
  };

  const times = [
    {nome: 'Programação', 
      corSecundaria: '#D9F7E9', 
      corPrimaria: '#57C278'
    },
    {nome: 'Front-End', 
      corSecundaria: '#E8F8FF', 
      corPrimaria: '#82CFFA'
    },
    {nome: 'Data-Science', 
      corSecundaria: '#F0F8E2', 
      corPrimaria: '#A6D157'
  },
    {nome: 'Dev-Ops', 
      corSecundaria: '#FDE7E8', 
      corPrimaria: '#E06B69'
  },
    {nome: 'UX e Design', 
      corSecundaria: '#FAE9F5', 
      corPrimaria: '#DB6EBF'
  },
    {nome: 'Mobile', 
      corSecundaria: '#FFF5D9', 
      corPrimaria: '#FFBA05'
  },
    {nome: 'Inovação e Gestão', 
      corSecundaria: '#FFEEDF', 
      corPrimaria: '#FF8A29'
  }
  ]

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)}  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(times => 
        <Time key={times.nome} 
          nome={times.nome}
          corSecundaria={times.corSecundaria}
          corPrimaria={times.corPrimaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)}
        />
      )}
      <Rodape/>
      </div>
  );
}

export default App;

