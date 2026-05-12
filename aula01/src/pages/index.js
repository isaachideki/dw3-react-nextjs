import Descricao from "@/components/Descricao";
import MeuComponente from "@/components/MeuComponente";
import User from "@/components/User";
import Dog from "@/components/Dog";
import Contador from "@/components/Contador";
import Form from "@/components/Forms";

export default function Home() {
  return (
    <>
    <br/>
      <br />
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao meu primeiro site em React.</p>
      <br/>
      <MeuComponente/>
      <br/>
      <User/>
      <br/>
      {/* Chamando os componentes Descricao e passando os dados externos para ele*/}
      <Descricao cidade="Jacupiranga" idade={19}/>
      <br />
      {/* Desestruturação de Props */}
      <Dog nome="Rex" raca="Pitbull" idade={5}/>

      {/* Hook useState */}
      <Contador />

      <Form />
    </>
  );
}