import styled from 'styled-components';
import { theme } from '../../../styled/index' 

export const StyledContainer = styled.div `
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    margin-top:25px;
    margin-bottom:10px;
    .title {
        font-size: 1.75rem;
        color: ${props => theme.greyCalm}
    }
    .iconDivs {
        display:flex;
        .awardDiv {
            width:170px;
            padding:5px;
            margin: -4px 0px 0px ;
            height:100px;
            font-size:0.9rem;
            color: ${props => theme.greyCalm};
            font-weight: 400;
            text-align:center;
            .img {
                width:100%;
                height:60%;
            }
            .SBD{
                height: 45px;
                width: 86px;
            }
            .star {
                height:45px;
                width:50px;
            }
        }
    }
`