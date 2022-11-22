import Button  from '../Button'
import { StyledHolder } from "./styled";
import { useQuery } from "@apollo/client";
import { useMediaQuery } from "react-responsive";
import { getDonationBanner } from "../../core/apolloServices/DonationBanner";



const DonationBanner = () => {

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})

    const {loading, error, data} = useQuery(getDonationBanner)
    if (error) return <p>Error : ${error}</p>;
    
    return ( 
        <>
            { loading   
                ?<p>Loading...</p>
                :<>
                { isLG &&
                    data.donationBanners.map(({ID, css, button, image, mainText, secondaryText, buttonColor:{hex}, buttonColorHover}) => {
                        // let styles = {}
                        // Object.entries(css).forEach(([key, value]) => {return styles[key] = value});
                        return <StyledHolder 
                            key={ID}
                        >
                            <div className="imgContainer">
                                <img src={image} alt={button} className='img'/>
                            </div>
                            <div className="container">
                                <p className="mainText">{mainText}</p>
                                <p>{secondaryText}</p>
                                <div className="buttonDiv">
                                    <Button 
                                        text={button}
                                        backgroundColor={hex}
                                        color={'#fff'}
                                        fontSize={'1rem'}
                                        height ={'50px'}
                                        width={'250px'}
                                        backgroundColorHover={buttonColorHover.hex}
                                        colorHover={'#5700F'}
                                        maxHeight={'50px'}
                                        maxWidth={'250px'}
                                        fontWeight={'700'}
                                        borderRadius={'50px'}
                                    />
                                </div>
                            </div>
                        </StyledHolder>
                    })
                }
                {isSM &&
                    data.donationBanners.map(({ID, css, button, image, mainText, secondaryText, buttonColor:{hex}, buttonColorHover}) => {
                        let styles = {}
                        Object.entries(css).forEach(([key, value]) => {return styles[key] = value});
                        return <StyledHolder 
                            key={ID}
                        >
                            <div className="imgContainer">
                                <img src={image} alt={button} className='img'/>
                            </div>
                            <div className="container">
                                <p className="mainText">{mainText}</p>
                                <p>{secondaryText}</p>
                                <div className="buttonDiv">
                                    <Button 
                                        text={button}
                                        backgroundColor={'#FFB800'}
                                        color={'#fff'}
                                        fontSize={'1rem'}
                                        height ={'50px'}
                                        width={'250px'}
                                        backgroundColorHover={buttonColorHover.hex}
                                        colorHover={'#5700F'}
                                        maxHeight={'50px'}
                                        maxWidth={'250px'}
                                        fontWeight={'700'}
                                        borderRadius={'50px'}
                                    />
                                </div>
                            </div>
                        </StyledHolder>
                    })
                }
            </>
            }  
        </>
    );     
}
 
export default DonationBanner;


