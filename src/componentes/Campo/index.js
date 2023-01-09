import './Campo.css'
const Campo =  ({type = 'text', valor, obrigatorio, label, placeholder, aoAlterado}) => {
    const placeholderModificada = `${placeholder}...`
    
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

 return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio}  
                name={label} 
                placeholder={placeholderModificada}

            />
        </div>
    )
}

export default Campo