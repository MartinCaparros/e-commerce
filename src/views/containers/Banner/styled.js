import styled from "styled-components";

export const StyledBanner = styled.div`
    height : ${props => props.height};
    width: ${props => props.width};
    background-color: ${props => props.backgroundColor};
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    display: ${props => props.display};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};

    .bannerImage {
        display: flex;
        justify-content:center;
        align-items:center;
        height:100%;
        width: 550px; 
        img {
            max-width:100%;
            max-height:100%
        }
    }
`;