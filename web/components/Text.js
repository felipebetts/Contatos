import styled from 'styled-components'

export const H1 = styled.h1`

${(props) => {
    if (props.title) {
        return `
        font-size: 7rem;
        margin-top: 0;

        @media(max-width: 800px) {
            font-size: 4rem;
        }
        `
    }
}}
    
    
`

export const H2 = styled.h2`

    margin-top: 0;
    font-size: 2rem;
`