import { useState } from "react"

const Form = () => {
    // criando os estados
    const[nome, setNome] = useState("")
    const[sobrenome, setSobrenome] = useState("")
    const[email, setEmail] = useState("")

    // função que cuidara da submissão do formulário
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(nome)
        console.log(sobrenome)
        console.log(email)
    }


    return(
        <>
        <br />
        <h3>Formulário de cadastro: </h3>
        <br />
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Insira seu nome" 
                value={nome}
                // quando o valor da inpunt mudar, pegue o novo valor (e.target.value) e atualize o estado com este valor
                onChange={(e) => setNome(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Insira seu sobrenome" 
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Insira seu email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button type="submit">Enviar</button>

        </form>
        <br />
        {nome}<br />
        {sobrenome}<br />
        {email}<br />
        </>
    )
}

export default Form