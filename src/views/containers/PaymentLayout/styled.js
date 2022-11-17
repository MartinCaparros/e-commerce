import styled from "styled-components";
import { Badge } from "react-bootstrap";
import { theme } from '../../../styled/index' 

export const StyledContainer = styled.div`
    display:flex;
    flex-direction:row;
    font-weight:700;
    font-size:1rem;
    .leftContainer {
        display:flex;
        width:60%;
        flex-direction:column;
        align-items:center;
        .paymentLogo {
            display:flex;
            width:100%;
            flex-direction:row;
            justify-content:start;
            margin:20px 0px 20px 80px;
            img {
                height:40px;
                width:120px;
            }
        }
        .title {
            font-size:1.5rem;
            cursor:pointer;
            margin: 20px 0px 20px 0px;
            padding:10px 10px 10px 0px;
            color: ${props => theme.yellowCalm} !important;
        }
        .formContainer {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            .form {
                width:600px;
                color: #999999;
            }
            .inputContainer {
                display:flex;
                flex-direction:row;
                width:100%;
                .singleInputContainer {
                    display:flex;
                    flex-direction:column;
                    width:100%;
                    margin: 20px 10px 10px 0px;
                    .zipCodeContainer {
                        display:flex;
                        align-items:center;
                        width:100%;
                        label {
                            width:50%;
                        }
                        .linkContainer {
                            display:flex;
                            justify-content:end;
                            width:50%;
                            a {
                                width:100%;
                                font-size:0.75rem;
                            }
                        }
                    }
                }
                .oneInput {
                    display:flex;
                    flex-direction:column;
                    width:48%;
                    margin: 20px 10px 10px 0px;
                }
                .inputs {
                    border-radius:5px;
                    height:40px;
                    border: 1px solid #DADADA;
                    &:focus {
                        outline-color: ${props => theme.yellowCalm};
                        background-color: #EAEAEA;
                    }
                }
            }
            .buttonContainer {
                display:flex;
                justify-content:center;
                width:100%;
                button {
                    width:80%;
                    margin-top:10px;
                    padding:10px;
                    color: white;
                    background-color: ${props => theme.yellowCalm} !important;
                    border-radius:10px;
                    border:none;
                }
            }
        }
    }
    
`;

export const StyledBadge = styled(Badge)`
    background-color: ${props => theme.yellowCalm} !important;
    color: #ffff;
    border-radius:40px;
    margin-right:10px;
`;