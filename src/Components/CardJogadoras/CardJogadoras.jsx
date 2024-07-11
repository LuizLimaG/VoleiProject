import styles from './CardJogadoras.module.css'

export default function CardJogadoras({ nomejogadora, camisaJogadora, posicaoJogadora }) {

    console.log(nomejogadora)
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <h3>{nomejogadora}</h3>
                </div>
                <div className={styles.card_body}>
                    <img src="caminho/para/a/foto.jpg" alt="Foto da Jogadora" />
                    <p><strong>Camisa:</strong> {camisaJogadora}</p>
                    <p><strong>Posição:</strong> {posicaoJogadora}</p>
                </div>
            </div>
        </>
    )
}