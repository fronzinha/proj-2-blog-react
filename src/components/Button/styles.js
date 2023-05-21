import styled from "styled-components";
import { blue } from "../../theme";

export const StyledButton = styled.button`
    outline: none;
    background-color: ${(props) => props.secondary ? "white" : "blue"};
    color: ${(props) => props.secondary ? blue : 'white'};
    border: 2px solid ${blue};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: filter .2s;

    :hover {
        filter: brightness(95%);
    }

    :active {
        filter: brightness(90%);
    }
`;
