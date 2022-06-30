import React from 'react'
import './Rodape.css'

const Rodape = props => {
    return(
<footer id='myFooter'>
        <div className='container'>
            <p className='footer-copyright'>© 2022 Copyright - Marco Venício | Vitor Fernandes.</p>
        </div>
        <div className='footer-social'>
            <a href='https://www.google.com.br/' className='social-icons'><i className='fa fa-facebook'></i></a>
            <a href='https://www.google.com.br/' className='social-icons'><i className='fa fa-instagram'></i></a>
            <a href='https://www.google.com.br/' className='social-icons'><i className='fa fa-youtube'></i></a>
            <a href='https://www.google.com.br/' className='social-icons'><i className='fa fa-twitter'></i></a>
        </div>
    </footer>
     )
    }
    
    export default Rodape