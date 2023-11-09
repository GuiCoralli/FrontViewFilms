import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.SALMON};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;
    font-weight: 500;

    &:disabled { /* &  significa para o botão ficar desabilitando*/
        opacity: 0.5;
    }
`;
