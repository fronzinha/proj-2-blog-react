import styled from "styled-components";
import { whiteBlue } from "../../theme";

export const HeaderContainer = styled.header`
    display: flex;
    background-color: ${whiteBlue};
    padding: 1rem 2rem;
    align-items: center;
`;

export const Title = styled.span`
    font-weight: 600;
    font-size: 22px;
`;

export const LinksContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: auto;
`;
