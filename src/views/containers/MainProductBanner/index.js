import { StyledContainer, StyledPill } from "./styled";
import { theme } from '../../../styled'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Button  from "../Button";

const MainProductBanner = () => {
    return ( 
        <StyledContainer>
            <div className="promotionData">
                <div className="positionDiv">
                    <StyledPill>ALMOHADA DE REGALO</StyledPill>
                    <p className="title">Colchón Calm</p>
                    <p>desde:</p>
                    <div className="priceDiv">
                        <p className="price">$66.500</p>
                        <AddCircleOutlineRoundedIcon className="icon"/>
                    </div>
                    <p className="payments">12 cuotas de: $5.542</p>
                    <Button
                            text='¡lo quiero!'
                            color={props => theme.orangeCalm}
                            backgroundColor={'#fff'}
                            maxHeight = {'40px'}
                            maxWidth = {'215px'}
                            width = {'200px'}
                            height = {'35px'}
                            colorHover = {'#fff'}
                            backgroundColorHover = {props => theme.violetCalm}
                            fontSize = {'1rem'}
                            fontWeight = {400}
                        />
                </div>
            </div>
        </StyledContainer>
    );
}
 
export default MainProductBanner;