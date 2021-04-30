import styled from 'styled-components'

export const ListLayout = styled.div`
    width: 100%;


    display: flex;
    align-items: center;
    justify-content: center;

`

export const ListContainer = styled.div`
    background: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.font.secondary};

    width: 50%;
    max-width: 800px;
    min-height: 100vh;

    @media(max-width: 800px) {
        width:100%;
    }
    `
    
export const TitleContainer = styled.div`
    top: 0;
    padding: 10px;
    position: -webkit-sticky; 
    position: sticky;
    background: inherit;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: solid 2px ${({ theme }) => theme.colors.background.primary};
`

export const AddContactButton = styled.button`
    font-size: 30px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.background.primary};

    border-radius: 50%;
    border: none;
    background: inherit;
    cursor: pointer;

    &:hover {
        background: #ddd;
    }

`

export const ContactContainer = styled.div`

    display: flex;
    align-items:center;
    justify-content: space-between;

    padding: 5px 15px;
    padding-left: 5%; 

    border-top: solid 1px #aaa; 
    &:last-child {
        border-bottom: solid 1px #aaa; 
    }

    &:hover {
        background: #ddd;
    }

`

export const ContactName = styled.p`
    font-weight: 600;
    font-size: 1.1rem;

    ${(props) => props.surname ? 'font-weight: 400; margin-left: 5px;' : ''}
`

export const ArrowContainer = styled.div`
    color: ${({ theme }) => theme.colors.background.primary};

`