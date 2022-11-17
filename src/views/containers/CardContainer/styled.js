import styled from "styled-components";
import { theme } from '../../../styled';

export const StyledContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    color: ${props => theme.orangeCalm};
    font-size: 2rem;
    margin-top: 40px;
    .cardHolder {
        display:flex
    }
`