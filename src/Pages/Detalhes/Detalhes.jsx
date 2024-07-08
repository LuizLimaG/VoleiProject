import { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import styles from './Detalhes.module.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detalhes(){

    const {paisId} = useParams()
    const navigate = useNavigate()
    const [pais, setPais] = useState(null)

    useEffect(() => {
        const url = './vnl.json'
        
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const paisEncontrado = data.find((f) => f.id === parseInt(paisId))
            if (paisEncontrado) {
                setPais(paisEncontrado)
            } else {
                navigate("/")
            }
        })
        .catch((erro) => {
            console.log(erro)
            navigate("/")
        })
    }), [paisId, navigate]

    if (!pais) {
        return <div> Carregando... </div>
    }

    return(
        <>
            <div>
                <h1>{pais.nome}</h1>
                <img src={pais.bandeira} alt={pais.nome} />
            </div>
        </>
    )
}