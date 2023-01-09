import './ListaSuspensa.css';

const listaSuspensa = (props) => {

    const aoAlterado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoAlterado} required={props.obrigatorio} value={props.valor}>
                <option value=''>Selecione um Time</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default listaSuspensa;