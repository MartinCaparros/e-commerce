import { useState, useEffect } from "react";
import { StyledContainer } from "./styled";
import { services } from "../../core/Products/services";


const CardContainer = ({text: {normal, important } }) => {
    
    const [products, setProducts] = useState([]);
    const { getAll } = services;

    useEffect(() => {
        const getData = async () => {
            const { data } = await getAll();
            const response = data.slice(491);
            setProducts(JSON.parse(response));
            console.log('DATA:', products)
        };
        getData();
    }, []);
    
    return ( 
        <StyledContainer>
            <p>{normal}<b> {important}</b></p>
        </StyledContainer>
    );
}
 
export default CardContainer;