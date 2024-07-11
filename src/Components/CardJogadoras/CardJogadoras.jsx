import styles from './CardJogadoras.module.css'

export default function CardJogadoras({ imagem, nomejogadora, camisaJogadora, posicaoJogadora }) {

    console.log(nomejogadora)
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>{nomejogadora}</h3>
                </div>
                <div className={styles.cardBody}>
                    <img src={imagem} alt="Foto da Jogadora" />
                    <p><strong>Camisa:</strong> {camisaJogadora}</p>
                    <p><strong>Posição:</strong> {posicaoJogadora}</p>
                </div>
            </div>
        </>
    )
}