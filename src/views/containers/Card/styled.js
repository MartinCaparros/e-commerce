import { Badge } from "react-bootstrap";
import styled from "styled-components";
import { theme } from '../../../styled';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    font-size:1rem;
    .card {
        border: none;
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 5px;
        height: 350px;
        width: 330px;
        .title {
            margin-top:15px;
            font-size:1.2rem;
            line-height:22px;
        }
        .pill {
            position:relative;
            font-weight:700;
            font-size: 0.75rem;
            z-index:99;
            color: #fff; 
            bottom:235px;    
            left:15px;
        }
        .img {
            width: 100%;
            height: 100%;
            border-radius:10px;
        }
        .onSalePrice {
            text-decoration: line-through;
        }
    }
`
export const StyledPill = styled(Badge)`
    color: #fff;
    font-size: 1rem;
    border-radius: 16px;
    background-color: ${props => theme.violetCalm} !important;
    margin-left: 5px;
    font-weight:400;
`