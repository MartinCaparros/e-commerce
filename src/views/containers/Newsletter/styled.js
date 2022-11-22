import styled from "styled-components";
import {theme} from '../../../styled/index'

export const StyledContainer = styled.div`
    display: flex;
    justify-content:start;
    flex-direction: column;
    margin-bottom:auto;
    margin-top: 30px;
    height:300px;

    .footerNewsletterTitle {
        color: ${props => theme.blackCalm};
        font-size: 1.25rem;
        font-weight:700;
    }
    
    .suscribeDiv {
        display: flex;
        flex-direction:row;
        height: 40px;
        margin-top:10px;
        .suscribeButton {
            border:none;
            background-color: ${props => theme.blackCalm};
            color: #fff;
            width:50px;
            border-radius: 0 8px 8px 0px;
        }
        .suscribeInput {
            position:relative;
            border:none;
            border-radius: 8px 0 0 8px;
            width:300px;
            padding:15px;
            font-size:0.9rem;
        }
    }
    .socials {
        display:flex;
        justify-content:center;
        margin-top:25px;
        .socialDiv {
            background-color: ${props => theme.blackCalm};
            border-radius: 50px;
            height:30px;
            width:30px;
            display:flex;
            justify-content:center;
            align-items:center;
            margin:5px;
        }
    }

    @media (max-width: 500px) {
        align-items:center;
        height:100%;
    }
`;