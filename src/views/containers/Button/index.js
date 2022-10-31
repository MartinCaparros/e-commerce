import { StyledButton, StyledDiv } from "./styled";

const Button = ({text, backgroundColor, color, fontSize, height, width, backgroundColorHover, colorHover, maxHeight, maxWidth, fontWeight}) => {
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
            >
                {text}
            </StyledButton> 
        </StyledDiv>
    
    );
}
 
export default Button;