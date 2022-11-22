import Button  from "../Button";
import { theme } from '../../../styled'
import { useQuery } from "@apollo/client";
import { useMediaQuery } from "react-responsive";
import { StyledContainer, StyledPill, StyledButtonContainer } from "./styled";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { getMainProductBanner } from "../../core/apolloServices/MainProductBanner";

const MainProductBanner = ({bannerId}) => {

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})

    const {loading, error, data} = useQuery(getMainProductBanner,{ 
        variables: {id: bannerId}
    });
    
    if (error) return console.log(error);

    return ( <>
    {
        loading
        ? <p>Cargando</p>
        :(
            <>
                { isLG &&
                    <StyledContainer
                        backgroundImage={data.mainProductBanner.backgroundImage}
                    >
                        <div className="promotionData">
                            <div className="positionDiv">
                                <StyledPill>{data.mainProductBanner.pillText}</StyledPill>
                                <p className="title">{data.mainProductBanner.title}</p>
                                <p>desde:</p>
                                <div className="priceDiv">
                                    { data.mainProductBanner.onSale
                                        ?<> 
                                            <p className="onSalePrice">${data.mainProductBanner.price}</p> 
                                            <p className="price">${data.mainProductBanner.onSalePrice}</p> 
                                            <AddCircleOutlineRoundedIcon className="icon"/> 
                                        </>
                                        :<>
                                            <p className="price">${data.mainProductBanner.price}</p>
                                            <AddCircleOutlineRoundedIcon className="icon"/>
                                        </>
                                    }
                                </div>
                                <p className="payments">12 cuotas de: ${data.mainProductBanner.paymentsPrice}</p>
                                <Button
                                    text={data.mainProductBanner.buttonText}
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
                                    borderRadius ={'10px'}
                                />
                            </div>
                        </div>
                    </StyledContainer>
                }
                { isSM &&<>
                    <StyledContainer
                        backgroundImage={data.mainProductBanner.backgroundImage}
                    >
                        <div className="promotionData">
                            <div className="positionDiv">
                                <StyledPill>{data.mainProductBanner.pillText}</StyledPill>
                                <p className="title">{data.mainProductBanner.title}</p>
                                <p>desde:</p>
                                <div className="priceDiv">
                                    { data.mainProductBanner.onSale
                                        ?<> 
                                            <p className="onSalePrice">${data.mainProductBanner.price}</p> 
                                            <p className="price">${data.mainProductBanner.onSalePrice}</p> 
                                            <AddCircleOutlineRoundedIcon className="icon"/> 
                                        </>
                                        :<>
                                            <p className="price">${data.mainProductBanner.price}</p>
                                            <AddCircleOutlineRoundedIcon className="icon"/>
                                        </>
                                    }
                                </div>
                                <p className="payments">12 cuotas de: ${data.mainProductBanner.paymentsPrice}</p>
                            </div>
                        </div>
                    </StyledContainer>
                    <StyledButtonContainer>
                        <div>
                            <Button
                                text={data.mainProductBanner.buttonText}
                                color='#fff'
                                backgroundColor={props => theme.violetCalm}
                                maxHeight = {'40px'}
                                maxWidth = {'215px'}
                                width = {'200px'}
                                height = {'55px'}
                                colorHover = {'#fff'}
                                backgroundColorHover = {props => theme.violetCalm}
                                fontSize = {'1.5rem'}
                                fontWeight = {700}
                                borderRadius ={'10px'}
                            />
                        </div>
                    </StyledButtonContainer>
                </>}
            </>
        )
    }
    </>);
}
 
export default MainProductBanner;