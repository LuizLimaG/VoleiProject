import Header from '../../Components/Header/Header'
import CardJogadoras from '../../Components/CardJogadoras/CardJogadoras'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Jogadoras.module.css'

export default function Jogadoras() {

    const { paisId } = useParams()
    const navigate = useNavigate()
    const [pais, setPais] = useState(null)
    const [jogadoras, setJogadoras] = useState([])

    useEffect(() => {
        const url = '/vnl.json'

        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                const paisEncontrado = data.find((f) => f.id === parseInt(paisId))
                if (paisEncontrado) {
                    setPais(paisEncontrado)
                    setJogadoras(paisEncontrado.jogadoras)
                } else {
                    navigate("/")
                }

            })
            .catch((error) => {
                console.log(error)
                navigate("/")
            })
    }, [paisId, navigate])

    jogadoras.map((f) => {
        console.log(f.nome)
    })

    if (!pais) {
        return <div> Carregando... </div>
    }

    return (
        <>
            <Header header3 nomePais={pais.nome} />
            <section className={styles.playersSection}>
                {jogadoras.map(j => (
                    <CardJogadoras key={j.nome}
                        imagem={pais.bandeira}
                        nomejogadora={j.nome}
                        camisaJogadora={j.numero_camisa}
                        posicaoJogadora={j.posicao} />
                ))}
            </section>
        </>
    )
}