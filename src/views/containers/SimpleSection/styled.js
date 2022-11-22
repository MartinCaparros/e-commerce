import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { theme } from "../../../styled/index";

export const StyledContainer = styled.div`
    display:flex;
    margin-top:25px;
    align-items:center;
    flex-direction:column;
    color: ${props => theme.strongOrangeCalm};
    .title {
        font-size: 2rem;
        margin-bottom:10px;
    }
    .dataDiv {
        display:flex;
        flex-direction:row;
        width:60%;
        .infoDivs {
            margin-right:25px;
            margin-left:25px;
            .titleData {
                font-size : 1.5rem
            }
            .description {
                color: ${props => theme.blackCalm};
            }
        }
    }
    `
export const StyledDropdown = styled(Dropdown)`
    width:100%;
    .toggleContainer {
        width:100%;
        padding:15px;
        display:flex;
        justify-content:space-between;
        .iconContainer {
        }
    }
    .dropdownDiv {
        display:flex;
        justify-content:center;
        color:#666666;
        font-size:13px;
        padding:0px 30px 0px 30px;
    }
`
export const StyledDropdownToggle = styled(Dropdown.Toggle)`
    display:flex;
    font-size:1rem;
    padding:0px;
    background-color: #fff;
    color: ${props => theme.strongOrangeCalm};
    border:none;
    &::after {
        content:none
    }
`
