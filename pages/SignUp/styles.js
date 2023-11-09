import styled from 'styled-components'

import background from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    
    > h1 { //RocketFilms
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.SALMON};
    
    }

    > h2 { //Faça seu Login
        font-size: 24px;
        margin: 48px 0;
        margin-right: 118px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {// Aplicação para...
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a { //Cadastrar
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.SALMON};
    }
`;


export const Background = styled.div`
    flex: 1; //Ocupa todo o espaço disponível
    background: url(${background}) no-repeat center center;
    background-size: cover;
`;
