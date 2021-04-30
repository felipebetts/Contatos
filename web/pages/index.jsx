import { Flex, Layout } from "../components/Containers"
import LoginBox from "../components/LoginBox"
import { H1 } from "../components/Text"


const Main = () => {
    return (
        <Layout>

        <Flex column>
            <H1 title>Contatos.</H1>
            <LoginBox />
        </Flex>
        </Layout>
    )
}

export default Main