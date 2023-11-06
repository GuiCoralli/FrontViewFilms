<<<<<<< HEAD
import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme, $isactive }) => $isactive ?
     theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;
=======
import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme, $isactive }) => $isactive ?
     theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;
>>>>>>> f707860f216b5e0c4ff5a3b339bc02f6fb8ce508
`;