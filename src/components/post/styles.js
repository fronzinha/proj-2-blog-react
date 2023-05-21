import styled from "styled-components";
import { whiteBlue, blue } from "../../theme";

export const Container = styled.div`
    background-color: ${whiteBlue};
    border: solid ${blue};
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;
export const Title = styled.span`
    font-size: 18px;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
`;

export const Author = styled.span`
    font-size: 16px;
    margin-top: 1rem;
`;
