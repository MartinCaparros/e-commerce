import React from "react";
import { 
    StyledToggle,
    StyledItem,
    StyledPill,
    StyledDropdownHeader,
    StyledDropdownMenu,
    StyledLeftContainer, 
    StyledRightContainer,
    StyledImageContainer
} from "./styled";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NavigationDropdown = ({items, name, header, images}) => {

    return (
            <StyledToggle>
                { name }<KeyboardArrowDownIcon/>
                <StyledDropdownMenu>
                    <StyledLeftContainer>
                        {header ? <StyledDropdownHeader>{header}</StyledDropdownHeader> : null}
                        { items.map( ({name, pill:{enabled, value}}) => {
                            return (
                                <div>
                                    <StyledItem> {name} 
                                    { enabled ? <StyledPill>{value}</StyledPill> : null}
                                    </StyledItem>
                                </div>
                            )
                        })}
                    </StyledLeftContainer>
                    <StyledRightContainer>
                        { images.map( ({src, text}) => {
                            return (
                                <div>
                                    <StyledImageContainer
                                        src= {src}
                                    />
                                    <div>
                                        {text}
                                        <ArrowForwardIcon
                                            sx={{fontSize:10}}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </StyledRightContainer>
                </StyledDropdownMenu>
            </StyledToggle>
    )
}

export default NavigationDropdown