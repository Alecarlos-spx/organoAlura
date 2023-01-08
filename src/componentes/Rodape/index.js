import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>

            {/* <div className='sites'>
                <img src='/imagens/fb.png' alt='Facebook' />
                <img src='/imagens/tw.png' alt='Twitter' />
                <img src='/imagens/ig.png' alt='Instagran' />
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='Logo Organo' />
            </div>
            <div className='criado'>
                <h2>Desenvolvido por Alura.</h2>

            </div> */}

        </footer>

    )
}

export default Rodape