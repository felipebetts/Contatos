import { H1 } from '../Text'
import { AddContactButton, ArrowContainer, ContactContainer, ContactName, TitleContainer } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { userIdKey, userTokenKey, _baseUrl } from '../../constants'
import { useEffect, useState } from 'react'
import { Flex } from '../Containers'
import { Button } from '../Button'

const ContactList = ({ children }) => {

    const [ contacts, setContacts ] = useState(null)

    const router = useRouter()

    useEffect(async () => {
        const userId = localStorage.getItem(userIdKey)
        await axios.post(`${_baseUrl}/oapi/contacts`, { userId })
            .then(res => {
                if (res.data) {
                    setContacts(res.data)
                }
            })
    }, [])

    if (contacts === null) {
        return (
            <>  
            <TitleContainer>
                <H1>Lista de Contatos</H1>
                
            </TitleContainer>
            <Flex margin='20px'>
                <h3>A sua sessão não foi iniciada.</h3>
                <Link href='/'>
                    <h4>Clique aqui apra entrar na sua conta</h4>
                </Link>
            </Flex>
        </>
        )
    }

    if (!contacts[0]) {
        return (
            <>  
            <TitleContainer>
                <H1>Lista de Contatos</H1>
                <Flex margin='0'>
                    <Button
                        outlined
                        onClick={() => {
                            localStorage.removeItem(userIdKey)
                            localStorage.removeItem(userTokenKey)
                            return router.push('/')
                        }}    
                    >
                        Logout
                    </Button>
                    <Link href='/contatos/adicionar'>
                        <AddContactButton>
                        <ion-icon name="add-outline"></ion-icon>
                        </AddContactButton>
                    </Link>
                </Flex>
            </TitleContainer>
            <Flex margin='20px'>
                <h3>Para criar novos contatos clique no + localizado no canto superior direito!</h3>
            </Flex>
        </>
        )
    }

    return (
        <>  
            <TitleContainer>
                <H1>Lista de Contatos</H1>
                <Flex margin='0'>
                    <Button
                        outlined
                        onClick={() => {
                            localStorage.removeItem(userIdKey)
                            localStorage.removeItem(userTokenKey)
                            return router.push('/')
                        }}    
                    >
                        Logout
                    </Button>
                    <Link href='/contatos/adicionar'>
                        <AddContactButton>
                        <ion-icon name="add-outline"></ion-icon>
                        </AddContactButton>
                    </Link>
                </Flex>
            </TitleContainer>
            { contacts.map((e, i) => (
                <Link href={`/contatos/${e.uuid}`} key={i}>
                <ContactContainer 
                    key={i} 
                    >
                    <div style={{ display: 'flex' }}>
                        <ContactName>{e.name} </ContactName>
                        <ContactName surname>{e.surname}</ContactName>
                    </div>
                    <ArrowContainer>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </ArrowContainer>
                </ContactContainer>
            </Link>
            ))}
        </>
    )
}

export default ContactList