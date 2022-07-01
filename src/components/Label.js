import React,{useState} from 'react'


const Label = props => {
        function Label(){
            const [form,setForm] = useState[{'nome':'','valor':'','motivo':''}];
            return(
                <div>
                <input type='text' name="nomeConta" placeholder='digite nome da conta'></input>
                <input type='number' name="valorConta" placeholder='digite o valor da conta'></input>
                <select name='opcao'>
                <option value='num'> </option>
                <option value='entrada'>Entrada de capital</option>
             <option value='saida'>Saída de Capital</option>
             </select>
                </div>
            )
        }
        
        
        
     
    }
    
    export default Label