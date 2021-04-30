import styled from 'styled-components'

export const Layout = styled.div`

    margin: 5%;

`

export const Flex = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;
    ${(props) => props.column ? 'flex-direction: column;' : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}
`