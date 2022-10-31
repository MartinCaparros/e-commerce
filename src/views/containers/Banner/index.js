import { StyledBanner } from "./styled";

const Banner = ({
    height,
    width,
    backgroundColor,
    textAlign,
    color,
    fontWeight,
    fontSize,
    display,
    justifyContent,
    alignItems,
    text,
    image
}) => {
    return (
        <StyledBanner
            height = {height}
            width = {width}
            backgroundColor = {backgroundColor}
            textAlign = {textAlign}
            color = {color}
            fontWeight = {fontWeight}
            fontSize = {fontSize}
            display = {display}
            justifyContent = {justifyContent}
            alignItems = {alignItems}   
        >
            { text ??
            
                <div className="bannerImage">
                    <img  src={image} alt='imagen'/>
                </div>
            }
        </StyledBanner>    
    );
}
 
export default Banner;