import '../style/App.css'
import '../style/agendamentoStyle.css'
import axios from 'axios';
import { useState } from 'react';

function agendamento() {

    const [formData, setFormData] = useState({
        "idusuario": "2",
        "descricao": "",
        "status": "",
        "data": "",
        "hora": "",
        "preco": ""
      });
      
    

      const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSubmit = async event => {
        event.preventDefault();
        
        console.log(formData)

        try {
          const response = await axios.post('http://localhost:8080/agendar', formData);
          console.log('Resposta do servidor:', response.data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className='page'>
            <div className='pageAgendamento'>
            <h1>Agendamento</h1>

            <form className='divForm'>
            <label>
                <input name="descricao" type="text"  onChange={handleInputChange} placeholder="Seu nome" />
            </label>
            <label>
                <input name="status" type="text"  onChange={handleInputChange} placeholder="Seu melhor email" />
            </label>
            <label>
                <input name="data" type="date"  onChange={handleInputChange} placeholder="Seu numero" />
            </label>
            <label>
                <input name="hora" type="time"  onChange={handleInputChange} placeholder="Uma senha forte" />
            </label>
            <label>
                <input name="preco" type="text"  onChange={handleInputChange} placeholder="Uma senha forte" />
            </label>

            <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
    )
} 


// idusuario, descricao, status, data, hora, servicos, preco

export const AgendamentoPage = agendamento