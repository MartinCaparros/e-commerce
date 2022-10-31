import styled from "styled-components";

import { theme } from "../../../styled";

export const StyledContainer = styled.div`
    display:flex;
    position:relative;
    height:350px;
    background-color: ${props => theme.beigeCalm};
    justify-content:space-evenly;
`;

