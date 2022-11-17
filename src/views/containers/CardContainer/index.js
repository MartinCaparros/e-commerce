import Card from "../Card";
import { Query } from "@apollo/client/react/components";
import { getProductCards } from "../../core/apolloServices/ProductCards";
import { StyledContainer} from "./styled";

const CardContainer = ({text: {normal, important } }) => {
    return ( 
        <StyledContainer>
            <p>{normal}<b> {important}</b></p>
            <Query query={getProductCards}>
                {({loading, error, data}) => {

                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error : ${error}</p>;
                    
                    return <div className="cardHolder">
                      {  data.productCards.map(({ ID, title, boldTitle, productImage, price, onSale, onSalePrice, textColor: {hex}, pill}) => {
                        return<Card
                                key={ID}
                                ID = {ID}
                                title = {title}
                                boldTitle = {boldTitle}
                                productImage = {productImage}
                                price = {price}
                                onSale= {onSale}
                                onSalePrice = {onSalePrice}
                                hex = {hex}
                                pill = {pill}
                            />
                    })}
                    </div>
                }}
            </Query>
        </StyledContainer>
    );
}
 
export default CardContainer;





