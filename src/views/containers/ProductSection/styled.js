import styled from "styled-components";
import { theme } from "../../../styled/index";
import { Badge } from "react-bootstrap";

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
    .infoContainer {
        position:relative;
        color:#fff;
        font-weight:700;
        bottom: 40px;
        left:20px;
        div {
            width:90%;
            display:flex;
            flex-direction:column;
            .pillHolder {
                position:relative;
                bottom:20px;
            }
            .spanHolder {
                position:relative;
                bottom:20px;
            }
        }
    }
    @media (max-width:500px) {
        .productsHolder {
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap:10px;
            grid-auto-rows: minmax(auto, 200px);
            .img {
                height:100%;
                width:100%;
                border-radius:20px;
            }
        }
    }
`

export const StyledPill = styled(Badge)`
    color: #fff;
    font-size: 1rem;
    border-radius: 16px;
    background-color: ${props => theme.orangeCalm} !important;
    font-weight:400;
    @media (max-width:500px) {
        font-size:0.6rem;
        font-weight:700;
    }
`