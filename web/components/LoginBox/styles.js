import styled from 'styled-components'

export const Container = styled.div`
    margin: 5%;
    margin-top: 0;
    padding: 2rem;

    width: 50%;

    border-radius: 5px;

    background: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.font.secondary};
`

export const InputContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-end;
    width:100%;

    margin: 10px 0px;

    label {
        margin-right: 8px;
        font: inherit;
        font-weight: 500;
    }
    
    input {
        background: inherit;
        color:inherit;
    
        font:inherit;
        font-size: 1.2rem;

        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
        
        &:hover {
            border: 1px solid #aaa;
            
        }
    
    }
`