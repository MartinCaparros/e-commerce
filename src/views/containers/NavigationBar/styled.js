import styled from "styled-components";
import { theme } from "../../../styled";

export const StyledNavbar = styled.div`
    display:flex;
    justify-content:end;
    font-size: ${props => theme.fontSizeSmall};
    margin:8px;
`;

export const StyledNavLink = styled.a`
    color: ${props => theme.blackCalm};
    margin-right: 8px;
    margin-left: 8px;
    margin-top: 5px;
    text-decoration: none;
    :hover {
        color: ${props => theme.yellowCalm};
        text-decoration: underline;
    }
`;

export const StyledContainer = styled.div`
    display:flex;
    justify-content:end;
    margin-right:50px;
    margin-left:50px;
    width: 35%;
`