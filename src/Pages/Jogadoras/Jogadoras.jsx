import Header from '../../Components/Header/Header'
import CardJogadoras from '../../Components/CardJogadoras/CardJogadoras'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
                } else {
                    navigate("/")
                }

            })
            .catch((error) => {
                console.log(error)
                navigate("/")
            })
    }, [paisId, navigate])

    useEffect(() => {
        const url = '/vnl.json'

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setJogadoras(data.jogadoras)
                console.log(data.jogadoras)
            })
    }, [])

    if (!pais) {
        return <div> Carregando... </div>
    }

    return (
        <>
            <Header header3 nomePais={pais.nome} />
            {jogadoras.map(jogadora => {
                <CardJogadoras key={jogadora.nome}
                    nomejogadora={jogadora.nome}
                    camisaJogadora={jogadora.numero_camisa}
                    posicaoJogadora={jogadora.posicao} />
            })}
        </>
    )
}