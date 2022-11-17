import { StyledPill, StyledContainer } from "./styled";

const Card = ({ID, hex, onSale, productImage, title, boldTitle, pill, price, onSalePrice}) => {
    return (  
        <StyledContainer>
            <div className="card" style={{color:hex}} key={ID}>
                {
                    onSale 
                    ? <>
                        <div>
                            <img src={productImage} alt={`${title} ${boldTitle}`} className="img"/>
                            <StyledPill className="pill">{pill}</StyledPill>
                        </div>
                        <p className="title">{title}<br/><b>{boldTitle}</b></p>
                        <p>desde: <b className="onSalePrice">${price}</b></p>
                        <b>${onSalePrice}</b>
                    </>
                    :<>
                        <div>
                            <img src={productImage} alt={`${title} ${boldTitle}`} className="img"/>
                        </div>
                        <p className="title">{title}<br/><b>{boldTitle}</b></p>
                        <p>desde: <b>${price}</b></p>
                    </>
                }
            </div> 
        </StyledContainer>
    );
}
 
export default Card;