import '../style/App.css'
import '../style/agendamentoStyle.css'
import axios from 'axios';
import { useState } from 'react';

function agendamento() {

    let idUser = 1

    const [formData, setFormData] = useState({
        "descricao": "",
        "status": "Agendado",
        "data": "",
        "hora": "",
        "preco": "20.50"
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

        console.log('iai')

        try {
          await axios.post(`http://localhost:8080/agendar/${1}`, formData)
          .then(res => console.log(res))
        } catch (error) {
          return error;
        }
      };

    return (
        <div className='page'>
            <div className='pageAgendamento'>
            <h1>Agendamento</h1>

            <form onSubmit={handleSubmit} className='divForm'>
            <label>
                <input name="descricao" type="text"  onChange={handleInputChange} placeholder="Descricao" />
            </label>
            <label>
                <input name="data" type="date"  onChange={handleInputChange}/>
            </label>
            <label>
                <input name="hora" type="time"  onChange={handleInputChange} />
            </label>

            <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
    )
} 


// idusuario, descricao, status, data, hora, servicos, preco

export const AgendamentoPage = agendamento