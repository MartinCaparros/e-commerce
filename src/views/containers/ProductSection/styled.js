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
        justify-content:center;
        width:60%;
        .imgDiv {
            height:330px;
            width:570px;
            margin:15px;
            border-radius: 16px;
            .img {
                height:100%;
                width:100%;
                border-radius: 16px;
            }
            .text {
                position:relative;
                font-weight:700;
                font-size: 1.5rem;
                z-index:99;
                color: #fff;
                bottom:60px;
                left:35px;                
            }
        }
    }
`