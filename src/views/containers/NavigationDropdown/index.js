import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { 
    StyledToggle,
    StyledItem,
    StyledPill,
    StyledDropdownHeader,
    StyledDropdownMenu,
    StyledLeftContainer, 
    StyledRightContainer,
    StyledImageContainer,
    StyledDropdownToggle
} from "./styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavigationDropdown = ({items, name, header, images}) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})

    return (<>
        {isLG &&
            <StyledToggle>
                { name }<KeyboardArrowDownIcon/>
                <StyledDropdownMenu>
                    <StyledLeftContainer>
                        {header ? <StyledDropdownHeader>{header}</StyledDropdownHeader> : null}
                        { items.map( ({name, pill:{enabled, value}}) => {
                            return (
                                <div key={name}>
                                    <StyledItem
                                        to='#'
                                    > {name} 
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
        }
        {
            isSM &&
            <StyledToggle>
                <div className="toggleContainer">
                    <StyledDropdownToggle>
                        {name}
                    </StyledDropdownToggle>
                    <div className="iconContainer">
                        {showDropdown
                            ? <KeyboardArrowUpIcon/>
                            : <KeyboardArrowDownIcon/>
                        }
                    </div>
                </div>
            </StyledToggle>
        }
    </>)
}

export default NavigationDropdown