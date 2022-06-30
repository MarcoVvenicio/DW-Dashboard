import React,{useState} from 'react'
import {link} from 'react-router-dom'


const Menu = props => {
    return(
        <nav className='menu'>
            <ul>
                <li><a href='/' title='Tela inicial'>HOME</a></li>
                <li><a href='/quemsomos' title='Quem somos'>QUEM SOMOS</a></li>
                <li><a href='/faleconosco' title='Fale Conosco'>FALE CONOSCO</a></li>
            </ul>
                 
        </nav>
        
        
        
     )
    }
    
    export default Menu