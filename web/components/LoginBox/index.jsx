import { H2 } from "../Text"
import { Flex } from "../Containers"
import { Container, InputContainer } from "./styles"
import { useEffect, useState } from "react"
import { Button } from "../Button"
import axios from "axios"
import { _baseUrl, userIdKey } from '../../constants'
import { useRouter } from "next/router"


const LoginBox = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    
    return (
        <Container>
            <Flex column>
                <H2>Acesse ou crie uma conta</H2>
                <Flex column>
                    <InputContainer>
                        <label htmlFor='username'>Usuário</label>
                        <input id='username' value={name} onChange={e => setName(e.target.value)} />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='password'>Senha</label>
                        <input id='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </InputContainer>
                </Flex>
                <Button
                    outlined
                    onClick={() => {
                        // if ( userInput.username && userInput.password) {
                            const reqData = { name, password }
                            console.log('reqData: ', reqData)
                            axios.post(`${_baseUrl}/oapi/register`, reqData)
                                .then(res => {
                                    if (res.data) {
                                        console.log(res.data)
                                        localStorage.setItem(userIdKey, res.data._id)
                                    }
                                })
                                .then(() => {
                                    router.push('/contatos')
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        // }
                    }}
                >
                    Entrar
                </Button>
            </Flex>
        </Container>
    )
}

export default LoginBox