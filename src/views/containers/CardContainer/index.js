import Card from "../Card";
import { StyledContainer} from "./styled";
import { useQuery } from "@apollo/client";
import { useMediaQuery } from "react-responsive";


const CardContainer = ({text: {normal, important }, query}) => {

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})

    const {loading, error, data} = useQuery(query);

    if (error) return console.log(error);
    return ( <>
        {loading
            ?<p>Cargando</p>
            :<>
                {isLG && 
                    <StyledContainer>
                        <p>{normal}<b> {important}</b></p>
                        <div className="cardHolder">
                            {query.definitions[0].name.value === 'getCards'
                                ?data.productCards.map(({ ID, title, boldTitle, productImage, price, onSale, onSalePrice, textColor: {hex}, pill}) => {
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
                                })
                                :data.newProductCards.map(({card:{ID, title, boldTitle, productImage, price, onSale, onSalePrice, textColor: {hex}, pill}}) => {
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
                                })
                            }   
                        </div>
                    </StyledContainer>
                }
                {isSM &&
                    <StyledContainer>
                        <p>{normal}<b> {important}</b></p>
                        <div style={{display:'flex', flexDirection:'row', overflowX:'scroll', maxWidth:'100%', marginBottom:'20px'}}>
                        {query.definitions[0].name.value === 'getCards'
                                ?data.productCards.map(({ ID, title, boldTitle, productImage, price, onSale, onSalePrice, textColor: {hex}, pill}) => {
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
                                })
                                :data.newProductCards.map(({card:{ID, title, boldTitle, productImage, price, onSale, onSalePrice, textColor: {hex}, pill}}) => {
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
                                })
                            }   
                        </div>
                    </StyledContainer>
                }
            </>
        }
    </>);
}
 
export default CardContainer;





