import { Query } from "@apollo/client/react/components";
import { getDataBanner } from "../../core/apolloServices/DataBanner";
import { StyledContainer } from "./styled";

const DataBanner = () => {
    return (
        <div>
            <Query query={getDataBanner}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error : ${error}</p>;
                    
                    if (data) return <StyledContainer> {
                        data.informationCards.map(({image, title, buttonText, description}) => {
                            return <div>
                                <div className="imgContainer">
                                    <img className="img" src={image} alt='imageb'></img>
                                </div>
                                <p className="title">{title}</p>
                                <p className="description">{description}</p>
                                <button>{buttonText}</button>
                            </div>
                        })
                    }
                    </StyledContainer>
                }}
            </Query>
        </div>
    );
}
 
export default DataBanner;