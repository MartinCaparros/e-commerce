import styled from "styled-components";

export const StyledButton = styled.div`
    cursor: pointer;
    display:flex;
    font-weight: ${props => props.fontWeight};
    justify-content:center;
    align-items:center;
    background-color: ${props => props.backgroundColor};
    color : ${props => props.color};
    font-size: ${props => props.fontSize};
    height: ${props => props.height};
    border-radius: 8px 8px 8px 8px;
    width: ${props => props.width};
    &:hover {
        background-color: ${props => props.backgroundColorHover};
        color : ${props => props.colorHover};
        transition: all 0.3s ease;
        width: ${props => props.maxWidth};
        height: ${props => props.maxHeight};
    }
`

export const StyledDiv = styled.div`
    height: ${props => props.maxHeight};
    width: ${props => props.maxWidth}
`