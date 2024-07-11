import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from './CardDetalhes.module.css'

export default function CardDetalhes({ id, anoFunacao, cidade, tecnico }) {

    const navigate = useNavigate()

    const goToPlayers = () => {
        navigate(`/jogadoras/${id}`)
    }

    return (
        <>
            <div className={styles.cardDetalhes}>
                <div className={styles.subCard}>
                    <div className={styles.infoSection}>
                        <h1 className={styles.titleDetalhes}>
                            Ano de fundação
                        </h1>
                        <span>{anoFunacao}</span>
                    </div>
                </div>

                <div className={styles.subCard}>
                    <div className={styles.infoSection}>
                        <h1 className={styles.titleDetalhes}>
                            Cidade
                        </h1>
                        <span>{cidade}</span>
                    </div>
                </div>

                <div className={styles.subCard}>
                    <div className={styles.infoSection}>
                        <h1 className={styles.titleDetalhes}>
                            Técnico
                        </h1>
                        <span>{tecnico}</span>
                    </div>
                </div>

                <div className={`${styles.subCard} ${styles.playersButton}`}>
                    <div className={styles.infoSection}>
                        <h1 className={styles.titleDetalhes}>
                            Jogadoras
                        </h1>
                        <button onClick={goToPlayers} className={styles.jogadorasBotao}>
                            Ver Jogadoras ➡
                        </button>
                    </div>
                </div>

                <div className={`${styles.subCard} ${styles.backButton}`}>
                    <Link to={'/'} className={styles.voltarBotao}>
                        Voltar
                    </Link>
                </div>
            </div>
        </>
    )
}