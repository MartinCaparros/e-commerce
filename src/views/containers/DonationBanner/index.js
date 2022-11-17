import { Query } from "@apollo/client/react/components";
import { getDonationBanner } from "../../core/apolloServices/DonationBanner";
import { StyledContainer } from "./styled";


const DonationBanner = () => {

    return ( 
        <>
        <Query query={getDonationBanner}>
                {({loading, error, data}) => {

                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error : ${error}</p>;
                    
                    return<>
                        { 
                            data.donationBanners.map(({ID, css, button, image, mainText, secondaryText, buttonColor, buttonColorHover}) => {
                                let styles = {}
                                Object.entries(css).forEach(([key, value]) => {return styles[key] = value});
                                return <div 
                                    key={ID}
                                    style={styles}
                                >
                                    <div style={{width:'500px'}}>
                                        <img src={image} alt={button} style={{height:'250px'}}/>
                                    </div>
                                    <StyledContainer>
                                        <p className="mainText">{mainText}</p>
                                        <p>{secondaryText}</p>
                                        <div className="buttonDiv">
                                            <button className="donateButton" buttonColor={buttonColor}>{button}</button>
                                        </div>
                                    </StyledContainer>


                                </div>
                            })
                        }
                    </>
                }}
            </Query>
        </>
    );     
}
 
export default DonationBanner;


