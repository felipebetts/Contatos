import styled from 'styled-components'

export const AddForm = styled.form`

    display: flex;
    align-items: center;

    flex-direction: column;

    margin: 30px;
`

export const InputContainer = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width:100%;

    flex-direction: column;

    
    margin: 20px 0px;

    label {
        margin-bottom: 10px;
        font: inherit;
        font-weight: 500;
    }
    
    input {
        background: inherit;
        color:inherit;
        width: 100%;
    
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