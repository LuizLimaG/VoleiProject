import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

export default function Card({ id, nome, ranking, url }) {

    const navigate = useNavigate()

    const goToDetails = () => {
        navigate(`/detalhes/${id}`)
    }

    return (
        <div className={styles.card} key={id}>
            <div className={styles.rightCard}>
                <img src={url} alt={nome} />
            </div>
            <div className={styles.leftCard}>
                <h1 className={styles.nome}>{nome}</h1>
                <h4 className={styles.ranking}>Ranking: {ranking}</h4>
                
            <button onClick={goToDetails} className={styles.detailsBtn}>
                Ver Detalhes ➡
            </button>
            </div>
        </div>
    )
}