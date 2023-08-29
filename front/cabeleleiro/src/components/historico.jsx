// import react from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/App.css';
import '../style/historicoStyle.css';

function historico() {
    const [dadosUser, setDadosUser] = useState([]);

    // pegar id do usuario

    useEffect(() => {
        axios.get('http://localhost:8080/historico/1')
            .then((response) => {
                setDadosUser(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    console.log(dadosUser)

    const historic = () => {
        return (
            dadosUser.map((element, index) => {
                return (
                    <section key={element.idagendamento}>
                        <div>
                            <h1>{element.data_agend}</h1>
                        </div>
                        <ul key={element.descricao}>
                            {element.descricao}
                        </ul>
            </section>
                )
            })
        )
    }


    return (
        <div className='historicoPage'>
            {/* <section>
                <div>
                    <h1>DATA</h1>
                </div>
                <ul>
                    <li>Cortar cablo</li>
                    <li>Pintar cabelo</li>
                </ul>
            </section> */}
            <div className='historicos'>
                {historic()}
            </div>
           
        </div>
    )
} 

export const HistoricoPage = historico