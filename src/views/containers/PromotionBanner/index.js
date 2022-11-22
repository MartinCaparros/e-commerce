import { theme } from '../../../styled/index'
import { StyledContainer } from './styled';
import Button  from '../Button'
import { useMediaQuery } from 'react-responsive';

const PromotionBanner = () => {

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})

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
                        height = {isLG ? '57px' : '40px'}
                        maxHeight = {'70px'}
                        width = { isLG ? '275px' : '200px'}
                        maxWidth = {'290px'}
                        backgroundColorHover = {'#fff'}
                        colorHover = {props => theme.orangeCalm}
                        fontSize = {isLG ? '1.5rem' : '1rem'}
                        fontWeight = {700}
                        borderRadius ={'15px'}
                    />
                </div>
            </div>
        </StyledContainer>
    );
}
 
export default PromotionBanner;