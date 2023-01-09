import Colaborador from '../Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    const css = {
        backgroundImage: 'url(/imagens/fundo.png)',
        backgroundColor: hexToRgba(time.cor,'0.6')
    }

    return (
        (colaboradores.length > 0) &&
        <section className='time' style={css}>
            <input 
                type='color' 
                className='input-cor' 
                value={time.cor} 
                onChange={evento => mudarCor(evento.target.value, time.id)}
            />
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            
            <div className='colaboradores'>
                {colaboradores.map( (colaborador, index) => 
                    {
                     return <Colaborador 
                            cor={time.cor} 
                            key={index}       
                            colaborador={colaborador}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    }
                )}
            </div>
        </section>
    )
}

export default Time;