import ContactList from '../../components/ContactList'
import { AddContactButton, ListContainer, ListLayout, TitleContainer } from '../../components/ContactList/styles'
import { Flex, Layout } from '../../components/Containers'
import { H1 } from '../../components/Text'
import { useRouter } from 'next/router'
import axios from 'axios'
import { userIdKey, _baseUrl } from '../../constants'
import { useEffect, useState } from 'react'
import { InputContainer } from '../../components/form/styles'
import { Button } from '../../components/Button'
import Link from 'next/link'

const Contatos = () => {

    const router = useRouter()
    const { id } = router.query

    const [contact, setContact] = useState(null)
    const [formValues, setFormValues] = useState(null)

    const keys = formValues === null ? null : Object.keys(formValues)

    useEffect(async () => {
        if (id) {
            const reqData = {
                uuid: id,
                userId: localStorage.getItem(userIdKey)
            }
            await axios.post(`${_baseUrl}/oapi/contact`, reqData)
                .then(res => {
                    if (res.data) {
                        setContact(res.data)
                    }
                })
        }
    }, [id])

    useEffect(() => {
        if (contact !== null) {

            const {
                name,
                surname,
                phone,
                dob,
                adress,
                email
            } = contact
            setFormValues({
                Nome: name,
                Sobrenome: surname,
                Celular: phone,
                ['Data de Nascimento']: dob,
                Endereço: adress,
                Email: email
            })
        }
    }, [contact])

    if (formValues === null) {
        return (
            <ListLayout>
                <ListContainer>
                    <H1>id nâo existe.</H1>
                </ListContainer>
            </ListLayout>
        )
    }
    return (
        <ListLayout>
            <ListContainer>
                <TitleContainer>
                    <Flex margin='0'>
                        <Link href='/contatos'>
                    <AddContactButton style={{ marginRight: '15px'}}>
                    <ion-icon name="chevron-back-outline"></ion-icon>

                    </AddContactButton>
                        </Link>
                    <H1>{`${contact.name} ${contact.surname}`}</H1>

                    </Flex>
                    <AddContactButton
                        onClick={() => {
                            const reqData = {
                                userId: localStorage.getItem(userIdKey),
                                uuid: id
                            }
                            axios.post(`${_baseUrl}/oapi/delete_contact`, reqData)
                                .then(res => {
                                    if (res.data) {
                                        router.push('/contatos')
                                    }
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }}
                    >
                        <ion-icon name="trash-outline"></ion-icon>
                    </AddContactButton>
                </TitleContainer>
                <Flex column width="80%">
                    {keys.map((e, i) => (
                        <InputContainer key={i}>
                            <label htmlFor={e}>{e}</label>
                            <input
                                type="text"
                                id={e}
                                name={e}
                                value={formValues[e]}
                                onChange={e => {
                                    setFormValues({
                                        ...formValues,
                                        [e.target.name]: e.target.value
                                    })
                                }}
                            />
                        </InputContainer>
                    ))}
                    <Button
                        outlined
                        onClick={() => {
                            const reqData = {
                                userId: localStorage.getItem(userIdKey),
                                uuid: contact.uuid,
                                name: formValues.Nome,
                                surname: formValues.Sobrenome,
                                phone: formValues.Celular,
                                dob: formValues['Data de Nascimento'],
                                adress: formValues.Endereço,
                                email: formValues.Email
                            }
                            console.log('reqData', reqData)
                            axios.post(`${_baseUrl}/oapi/edit_contact`, reqData)
                                .then(res =>{
                                    if (res.data) {
                                        router.reload()
                                    }
                                })
                        }}
                    >
                        Editar
                        </Button>
                </Flex>

            </ListContainer>
        </ListLayout>
    )
}

export default Contatos