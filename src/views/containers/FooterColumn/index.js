import { StyledContainer } from "./styled";
import { useMediaQuery } from "react-responsive";

const FooterColumn = ({items, title}) => {

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})
    
    return ( <>
        { isLG && 
        <StyledContainer className= {!title && 'noTitle'}>
            <div className="footerTitle"> {title} </div>
            { items.map(({header, links}) => {
                return (
                    <>
                        <p className="footerItemHeader"> {header}</p>
                        { links.map( ({text, href}) => {
                            return (
                                <a className="footerItemLink" href={href} >{text}</a>
                            )
                        })}    
                    </>
                )
            })}
        </StyledContainer>
        }
        { isSM &&
            <StyledContainer className= {!title && 'noTitle'}>
                <div className="footerColumn">
                    <div className="footerTitle"> {title} </div>
                    { items.map(({header, links}) => {
                        return (
                            <>
                                <p className="footerItemHeader"> {header}</p>
                                { links.map( ({text, href}) => {
                                    return (
                                        <a className="footerItemLink" href={href} >{text}</a>
                                    )
                                })}    
                            </>
                        )
                    })}
                </div>
            </StyledContainer>
        }
    </>
    );
}
 
export default FooterColumn;