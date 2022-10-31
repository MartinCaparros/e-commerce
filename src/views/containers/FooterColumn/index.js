import { StyledContainer } from "./styled";


const FooterColumn = ({items, title}) => {
    return ( 
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
    );
}
 
export default FooterColumn;