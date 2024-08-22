import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Button variant="danger">Botao</Button>
      <Cabecalho titulo="Pagina Inicial" sub="Testeteste"/>
      <Cabecalho titulo="Cabecalho1" sub="Testeteste1"/>
      <Cabecalho titulo="Cabecalho2" sub="Testeteste2"/>
      <Cabecalho titulo="Cabecalho3" sub="Testeteste3"/>
      <Cabecalho titulo="Cabecalho4" sub="Testeteste4"/>
      <Link href="/fundamentos">Fundamentos</Link><br/>
      <Link href="/clientes">Clientes</Link>
    </main>
  );
}
