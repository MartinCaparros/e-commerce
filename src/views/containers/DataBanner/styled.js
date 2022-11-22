import styled from "@emotion/styled";
import { theme } from '../../../styled';

export const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    font-size: 1rem;
    font-weight:700;
    .cardHolder {
        display:flex;
        justify-content:center;
        width:100%;
        .card {
            border:none;
            margin:10px;
            width:480px;
            color: ${props => theme.strongOrangeCalm};
            .imgContainer {
                height:320px;
                width:480px;
                .img {
                    height:100%;
                    width:100%;
                    border-radius:30px;
                }
            }
            .title {
                font-size:1.5rem;
            }
            .description {
                margin-top:auto;
                margin-bottom:auto;
                font-size:0.8rem;
                font-weight:400;
                color: ${props => theme.blackCalm};
            }
        }
    }
    @media (max-width:500px) {
        flex-direction:column;
        .cardHolder {
            flex-direction:column;
        }
    }
`