import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header({ header1, header2, header3, nomePais }) {

    return (

        <>
            {header1 && (
                <header>
                    <h1 className={styles.title}>
                        Vôlei Feminino nas Olimpíadas
                    </h1>
                    <div className={styles.flex}>
                        <div className={styles.linha}></div>
                        <h5 className={styles.subTitle}>
                            GRUPO B
                        </h5>
                        <div className={styles.linha}></div>
                    </div>
                </header>
            )}
            {header2 && (
                <header>
                    <h1 className={styles.title}>
                        Detalhes do time de volêi
                    </h1>
                    <div className={styles.flex}>
                        <div className={styles.linha}></div>
                        <h5 className={`${styles.subTitle} ${styles.fontSize}`}>
                            {nomePais}
                        </h5>
                        <div className={styles.linha}></div>
                    </div>
                </header>
            )}
            {header3 && (
                <header>
                    <Link to={'/'} className={styles.backButton}>
                        ⬅ Voltar
                    </Link>
                    <h1 className={styles.title}>
                        Jogadoras
                    </h1>
                    <div className={styles.flex}>
                        <div className={styles.linha}></div>
                        <h5 className={`${styles.subTitle} ${styles.fontSize}`}>
                            {nomePais}
                        </h5>
                        <div className={styles.linha}></div>
                    </div>
                </header>
            )}

        </>
    )
}