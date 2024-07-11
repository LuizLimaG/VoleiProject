import { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'
import styles from "./Home.module.css"

export default function Home() {
  const [paises, setPaises] = useState([])

  useEffect(() => {
    const url = "./vnl.json"
    fetch(url)
      .then(res => res.json())
      .then(data => setPaises(data))
  })

  paises.map((f) => {
    console.log(f.nome)
  })

  return (
    <>
      <Header header1></Header>
      <section className={styles.section}>
        <div className={styles.paises}>
          {paises.map((paises) => (
            <Card key={paises.id}
              id={paises.id}
              nome={paises.nome}
              ranking={paises.ranking}
              url={paises.bandeira} />
          ))}
        </div>
      </section>
    </>
  )
}