import { StyledButton, StyledDiv } from "./styled";

const Button = ({text, backgroundColor, color, fontSize, height, width, backgroundColorHover, colorHover, maxHeight, maxWidth, fontWeight, borderRadius, border}) => {
    return ( 
        <StyledDiv
            maxHeight = {maxHeight}
            maxWidth = {maxWidth}
        >
            <StyledButton
                backgroundColor={backgroundColor}
                color={color}
                fontSize={fontSize}
                height={height}
                width={width}
                backgroundColorHover={backgroundColorHover}
                colorHover = {colorHover}
                fontWeight = {fontWeight}
                maxHeight = {maxHeight}
                maxWidth = {maxWidth}
                borderRadius = {borderRadius}
                border = {border}
            >
                {text}
            </StyledButton> 
        </StyledDiv>
    
    );
}
 
export default Button;