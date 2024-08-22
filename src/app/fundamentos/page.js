import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Link from 'next/link'
import React from 'react'
import { Alert, Container } from 'react-bootstrap'

export default function Fundamentos() {

  return (
    <>
      <Cabecalho titulo="Cabeçalho" />

      <Container>
        <Alert className="bg-danger text-white w-50">ALERTA ALERTA ALERTA ALERTA!!!!!!!!!!!!!!!!!!!!!!1</Alert>
        <h2>Meio da pagina</h2>
        <Link href="/">Pagina Principal</Link><br/>
        <Link href="/clientes">Clientes</Link>
      </Container>
    </>
  )
}
