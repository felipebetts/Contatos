import { useRouter } from 'next/router'
import ContactList from '../../components/ContactList'
import { ListContainer, ListLayout } from '../../components/ContactList/styles'
import { Flex, Layout } from '../../components/Containers'
import { userIdKey, userTokenKey } from '../../constants'

const Contatos = () => {

    const router = useRouter()


    return (
        <ListLayout>
            <ListContainer>
                <ContactList />
            </ListContainer>
        </ListLayout>
    )
}

export default Contatos