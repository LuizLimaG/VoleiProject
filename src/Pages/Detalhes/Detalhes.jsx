import { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import styles from './Detalhes.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import CardDetalhes from '../../Components/CardDetalhes/CardDetalhes'

export default function Detalhes(){

    const {paisId} = useParams()
    const navigate = useNavigate()
    const [pais, setPais] = useState(null)

    useEffect(() => {
        const url = '/vnl.json'
        
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
        .catch((error) => {
            console.log(error)
            navigate("/")
        })
    }, [paisId, navigate])

    if (!pais) {
        return <div> Carregando... </div>
    }

    return(
        <>
            <Header header2 nomePais={pais.nome} />
            <section className={styles.cardDetalhes}>
                <CardDetalhes id={pais.id} anoFunacao={pais.ano_fundacao} cidade={pais.cidade} tecnico={pais.tecnico}>
                    
                </CardDetalhes>
            </section>
        </>
    )
}