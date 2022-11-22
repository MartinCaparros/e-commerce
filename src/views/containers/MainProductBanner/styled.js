import styled from "styled-components";
import { theme } from '../../../styled'
import { Badge } from "react-bootstrap";

export const StyledContainer = styled.div`
    display: flex;
    font-size: 1rem;
    margin-top:30px;
    height:500px;
    background-image: url(https://calmessimple.com.ar/wp-content/uploads/2022/05/1593x1307px-colchon-extendido.webp);
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    .promotionData {
        display:flex;
        align-items:center;
        justify-content:center;
        background-color: ${props => theme.yellowCalm};
        height:100%;
        width:40%;
        color:#fff;        
        border-radius: 0px 50px 50px 0px;
        font-weight:700;
        .positionDiv {
            .title {
                font-size: 3.5rem;
            }
            .priceDiv {
                display:flex;
                align-items:center;
                .price {
                    font-weight:400;
                    font-size:1.75rem;
                    margin-right:10px;
                }
                .onSalePrice {
                    text-decoration: line-through;
                }
            }
            .payments {
                font-size: 0.75rem;
                font-weight:400;
            }
            .icon {
                cursor:pointer;
            }
        }
    }
    
    @media (max-width:500px) {
        background-position:bottom center;
        background-size: cover;
        .promotionData {
            width:100%;
            color: #303030;
            position:relative;
            top:20px;
            right:30px;
            justify-content:start;
            flex-direction:column;
            background-color:transparent;
            .positionDiv {
                .title{
                    font-size:3rem;
                }
                .priceDiv {
                    display:flex;
                    align-items:center;
                .price {
                    font-weight:400;
                    font-size:1.75rem;
                    margin-right:10px;
                }
                .onSalePrice {
                    text-decoration: line-through;
                }
                }
                .payments {
                    font-size: 0.75rem;
                    font-weight:400;
                }
            }
        }
    }
`;

export const StyledPill = styled(Badge)`
    color: #fff;
    font-size: 1rem;
    border-radius: 16px;
    background-color: ${props => theme.violetCalm} !important;
    margin-left: 5px;
    font-weight:400;

`

export const StyledButtonContainer = styled.div`
    display:flex;
    div {
        position:relative;
        bottom:30px;
        left:30px
    }
`