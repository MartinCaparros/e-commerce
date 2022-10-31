import { StyledContainer } from "./styled";
import Button  from "../Button";
import { theme } from "../../../styled";

const MainBanner = ({backgroundImage, date, mainInfo : {important, secondary} }) => {

    return ( 
        <StyledContainer
            backgroundImage = {backgroundImage}
        >
            <div className="dataDiv">
                <p className="date">{date}</p>
                <div className="mainInfo">
                    <b>{important}</b>
                    <p>{secondary}</p>
                </div>
                <div className="buttonDiv">
                    <Button
                        text='¡quiero mi colchón!'
                        color={'#fff'}
                        backgroundColor={props => theme.orangeCalm}
                        height = {'65px'}
                        width = {'350px'}
                        maxWidth = {'370px'}
                        maxHeight = {'75px'}
                        colorHover = {props => theme.orangeCalm}
                        backgroundColorHover = {'#fff'}
                        fontSize = {'1.7rem'}
                        fontWeight = {700}
                    />
                </div>
            </div>
        </StyledContainer>
    );
}
 
export default MainBanner;