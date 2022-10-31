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