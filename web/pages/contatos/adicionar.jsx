import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { ListContainer, ListLayout, TitleContainer } from '../../components/ContactList/styles'
import { Flex } from '../../components/Containers'
import { AddForm, InputContainer } from '../../components/form/styles'
import { H1 } from '../../components/Text'
import { userIdKey, _baseUrl } from '../../constants'

const AdicionarContato = () => {

    const [ formValues, setFormValues ] = useState({
        Nome: '',
        Sobrenome: '',
        Celular: '',
        ['Data de Nascimento']: '',
        Endereço: '',
        Email: ''
    })

    const router = useRouter()

    const keys = Object.keys(formValues)

    return (
        <ListLayout>
            <ListContainer>
                <TitleContainer>
                    <H1>Adicionar Contato</H1>
                </TitleContainer>
                <AddForm>
                    <Flex column width="80%">
                        { keys.map((e, i) => (
                            <InputContainer key={i}>
                                <label htmlFor={e}>{e}</label>
                                <input
                                    type="text"
                                    id={e}
                                    name={e}
                                    value={formValues[e]}
                                    onChange={(e) => setFormValues({
                                        ...formValues,
                                        [e.target.name]: e.target.value
                                    })}
                                />
                            </InputContainer>
                        ))}
                    </Flex>
                </AddForm>
                <Flex>
                    <Button
                        outlined
                        onClick={() => {
                            const {
                                Nome,
                                Sobrenome,
                                Celular,
                                Endereço,
                                Email
                            } = formValues
                            const reqData = {
                                userId: localStorage.getItem(userIdKey),
                                name: Nome,
                                surname: Sobrenome,
                                phone: Celular,
                                dob: formValues['Data de Nascimento'],
                                adress: Endereço,
                                email: Email
                            }
                            axios.post(`${_baseUrl}/oapi/add_contact`, reqData)
                                .then(res => {
                                    if (res.data) {
                                        router.push('/contatos')
                                    }
                                })
                        }}
                    >
                        Adicionar Contato
                    </Button>
                </Flex>
            </ListContainer>
        </ListLayout>
    )
}

export default AdicionarContato