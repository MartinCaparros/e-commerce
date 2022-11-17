import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styled";

export const StyledContainer = styled(Link)`
    position: absolute;
    text-decoration:none;
    top: 0;
    left: 80px;
    font-size: 2.25rem;
    font-weight:700;
    color: #fff;
    background-color: ${props => theme.yellowCalm};
    display: flex;
    justify-content:center;
    align-items: flex-end;
    z-index: 99;
    height: 140px;
    width: 120px;
    border-radius: 0px 0px 10px 10px;
    &:hover {
        color: #fff;
    }
`;