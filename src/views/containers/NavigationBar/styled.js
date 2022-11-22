import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styled";

export const StyledNavbar = styled.div`
    display:flex;
    justify-content:end;
    font-size: ${props => theme.fontSizeSmall};
    width:100%;
    margin:8px;
    @media (max-width: 500px) {
        justify-content:center;
        .menuContainer {
            display:flex;
            margin-right:auto;
            .burguer-menu {
                height:100%;
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                justify-content:center;
                .burguer {
                    width:2em;
                    margin:2px;
                    height: 0.2em;
                    background-color: black;
                    border-radius:15px;
                }
                .burguer.clicked:nth-child(1) {
                    transform: rotate(45deg) translate(33%, 100%);
                    transition: ease-out 0.5s
                }
                .burguer.clicked:nth-child(2) {
                    transform: scale(0.1);
                }
                .burguer.clicked:nth-child(3) {
                    transform: rotate(135deg) translate(-24%, 50%);
                    transition: ease-out 0.5s;
                }
                .burguer.unclicked {
                    transform: rotate(0) translate(0);
                    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
                }
            }
        }
        .menu {
            height:auto;
            margin-bottom:5px;
            width:100%;
            background-color:#fff;
            position:absolute;
            top:90px;
            z-index:99;
            .dropdown {
                transition: all 0.3s linear;
                display:flex;
                flex-direction:column;
            }
        }

        .hidden {
            display:none;
        }
        
        .visible {
            display:block;
        }
    }
`;

export const StyledNavLink = styled(Link)`
    color: ${props => theme.blackCalm};
    margin-right: 8px;
    margin-left: 8px;
    margin-top: 5px;
    text-decoration: none;
    :hover {
        color: ${props => theme.yellowCalm};
        text-decoration: underline;
    }
    @media (max-width: 500px) {
        padding:10px 10px 10px;
    }
`;

export const StyledContainer = styled.div`
    display:flex;
    justify-content:end;
    margin-right:50px;
    margin-left:50px;
    width: 35%;
`