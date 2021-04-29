import styled from 'styled-components'

export const Button = styled.button`

    background: inherit;
    color: inherit;
    font: inherit;
    font-weight: 500;

    padding: 10px;
    margin: 10px;
    border-radius: 4px;

    cursor: pointer;

    ${(props) =>  {
        if (props.outlined) {
            return `
            border: solid 1px ${props.theme.colors.background.primary};
            color: ${props.theme.colors.background.primary};

            &:hover {
                background: ${props.theme.colors.background.primary};
                color: ${props.theme.colors.font.primary};
            }
        `
        }
    }}
`