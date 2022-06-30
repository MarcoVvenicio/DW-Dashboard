import React from 'react'
import './faleconosco.css'

const faleconosco = props => {
    return (
        <section className="corpo">
            <h2><strong>FALE CONOSCO</strong></h2 >
            <h3>Participe da nossa plataforma. Seu comentário é importante para nós!</h3>

            <div id="body">

                <h4>Nome:</h4>
                <div>
                    <input type="text" id="nome" placeholder="Digite seu nome Completo" />
                </div>
                <h4>Email:</h4>
                <div>
                    <input type="text" id="email" placeholder="Digite seu email" />
                </div>
                <h4>Comentário:</h4>
                <div>
                    <input type="text" id="comentario" placeholder="Digite seu comentário" />
                </div>
                <div>
                    <button >Enviar</button>
                </div>
            </div>
        </section >
    )
}

export default faleconosco





