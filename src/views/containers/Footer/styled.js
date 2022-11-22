import styled from "styled-components";

import { theme } from "../../../styled";

export const StyledContainer = styled.div`
    display:flex;
    position:relative;
    height:100%;
    background-color: ${props => theme.beigeCalm};
    justify-content:space-evenly;
    @media (max-width:500px) {
        flex-direction:column;
        .twoColumns{
            display:flex;
            flex-direction:row;
            width:100%;
        }
    }
`;

