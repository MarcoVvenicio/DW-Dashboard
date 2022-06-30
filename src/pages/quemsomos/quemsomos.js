import React from 'react'
import Marco from '../../img/marco.jpeg'
import Vytor from '../../img/vitor.jpeg'

const QuemSomos = props => {
    return (
        <div>


            <section className='corpo'>
                <h2><strong>QUEM SOMOS</strong></h2>
                <div className='quemsomos'>
                    <h3>A MarVit surgiu da ideia de auxiliar um dos cofundadores no controle de suas finanças pessoais, trazendo de forma simples uma experiência única para o úsuario. Este pensamento surgiu por
                        meio da necessidade do momento onde a grande maioria dos brasileiros necessitam de um controle mais rigoroso de suas finanças.
                        Sem fins lucrativos esta página busca apenas servir de ferramenta para ajudar a população em suas gestões pessoais, onde podem ver de maneira interativa a entrada e saída de seu capital.
                        <br /><br />'Ao infinito e além.' - Buzz Lightyear</h3>
                </div>
                <br /><br />
                <section className='equipe'>
                    <h2><strong>NOSSA EQUIPE</strong></h2>
                    <div className='row text-center'>


                        <div className='col-md-6 mb-2'>
                            <h2 className='my-5 h2'>Marco Venício</h2>
                            <img className='rounded-circle' alt='100x100' src={Marco}
                                data-holder-rendered='true' />
                            <p className='title'>Cofundador</p>
                            <p className='description'>Responsável pela área de finanças e orçamentos.</p>
                            <p className='description'>CP3007723</p>
                        </div>

                        <div className='col-md-6 mb-2'>
                            <h2 className='my-5 h2'>Vitor Fernandes</h2>
                            <img className='rounded-circle' alt='100x100' src={Vytor}
                                data-holder-rendered='true' />
                            <p className='title'>Cofundador</p>
                            <p className='description'>Responsável pela área de contratos e papeladas.</p>
                            <p className='description'>CP3007723</p>
                        </div>



                    </div>
                </section>
            </section>


        </div>
    )
}

export default QuemSomos