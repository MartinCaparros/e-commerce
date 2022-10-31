import { theme } from '../../../styled/index'
import { StyledContainer } from './styled';
import Button  from '../Button'

const PromotionBanner = () => {
    return ( 
        <StyledContainer>
            <div className='promotionDiv'>
                <div className='positionDiv'>
                    <div className='dataDiv'>
                        <p className='promInfo'>30 % Off</p>
                        <p><b>en la segunda unidad </b> <br/> de ropa de cama</p>
                    </div>
                    <Button
                        text={'¡vestí tu colchón!'}
                        backgroundColor={props => theme.violetCalm}
                        color = {'#fff'}
                        height = {'57px'}
                        maxHeight = {'70px'}
                        width = {'275px'}
                        maxWidth = {'290px'}
                        backgroundColorHover = {'#fff'}
                        colorHover = {props => theme.orangeCalm}
                        fontSize = {'1.5rem'}
                        fontWeight = {700}
                    />
                </div>
            </div>
        </StyledContainer>
    );
}
 
export default PromotionBanner;