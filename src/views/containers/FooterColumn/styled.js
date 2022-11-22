import styled from "styled-components";
import {theme} from '../../../styled/index'

export const StyledContainer = styled.div`
    display: flex;
    justify-content:start;
    flex-direction: column;
    margin-bottom:auto;
    margin-top: 30px;
    height:300px;
    
    &.noTitle {
        padding-top: 30px;
    }

    .footerTitle {
        color: ${props => theme.blackCalm};
        font-size: 1.25rem;
        font-weight:700;
    }
    .footerItemHeader {
        color: ${props => theme.greyCalm};
        font-size: 0.8rem;
        font-weight:700;
    }
    .footerItemLink {
        color: ${props => theme.blackCalm};
        font-size: 0.8rem;
        text-decoration: none;
    }

    @media (max-width:500px) {
        height:100%;
        width:50%;
        margin-bottom:0px;
        margin-top:15px;
        margin-left:20px;
        .footerColumn {
            display:flex;
            flex-direction:column;
        }
    }
`;