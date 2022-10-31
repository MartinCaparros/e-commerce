import { Badge } from "react-bootstrap";
import styled from "styled-components";
import { theme } from "../../../styled";

export const StyledDropdown = styled.div`
`;

export const StyledToggle = styled.div`
    color: ${props => theme.blackCalm};
    cursor:pointer;
    display:flex;
    margin-right: 8px;
    margin-left: 8px;
    margin-top:5px;
    background-color:white;
    &:hover {
        background-color:white;
        text-decoration:underline;
        color: ${props => theme.yellowCalm};
        div {
            visibility: visible;
            opacity: 1;
            z-index: 1;
            transition: all 0.3s ease;
        }
    };

`;
export const StyledDropdownMenu = styled.div`
    display:flex;
    flex-direction:row;
    margin: 0 auto;
    position: absolute;
    visibility: hidden;
    opacity: 0.5;
    top: 75px;
    left: 200px;
    right: 300px;
    width: 80%;
    height:300px;
    z-index: -1;
    background-color: white;
    transition: all 0.3s linear;
`;

export const StyledDropdownHeader = styled.p`
    margin-top:10px;
    color: ${props => theme.greyCalm};
    width: fit-content;
    margin-left: 3rem;
`;

export const StyledItem = styled.a`
    color: ${props => theme.blackCalm};
    text-decoration: none;
    width: fit-content;
    margin-left: 3rem;
    :hover {
        color: ${props => theme.yellowCalm};
        background-color: white;
    }
`

export const StyledPill = styled(Badge)`
    color: ${props => theme.greyCalm};
    font-size: 9px;
    background-color: #e5e5e5 !important;
    margin-left: 5px;
`

export const StyledLeftContainer  = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    width:25%;
`
export const StyledRightContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:90%;
    font-size: ${props => theme.fontSizeXS};
    div:first-child{
        margin-right:30px;
    }
    > div > div {
        color: ${props => theme.blackCalm}
    }
`

export const StyledImageContainer = styled.img`
    height:250px;
    width:430px;
    margin-top:10px;
    border-radius:20px;
`