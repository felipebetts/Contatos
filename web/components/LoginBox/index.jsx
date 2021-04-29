import { H2 } from "../Text"
import { Flex } from "../Containers"
import { Container, InputContainer } from "./styles"
import { useEffect, useState } from "react"
import { Button } from "../Button"


const LoginBox = () => {

    const [userInput, setUserInput] = useState({
        username: null,
        password: null
    })

    const handleChange = e => {
        setUserInput({
            ...userInput,
            [e.target.name]: [e.target.value]
        })
    }

    useEffect(() => {

    }, [userInput])

    return (
        <Container>
            <Flex column>
                <H2>Entre na sua conta</H2>
                <Flex column>
                    <InputContainer>
                        <label htmlFor='username'>Usuário</label>
                        <input id='username' value={userInput.username} onChange={e => handleChange(e)} />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='password'>Senha</label>
                        <input id='password' type='password' value={userInput.password} onChange={e => handleChange(e)} />
                    </InputContainer>
                </Flex>
                <Button outlined>Entrar</Button>
            </Flex>
        </Container>
    )
}

export default LoginBox