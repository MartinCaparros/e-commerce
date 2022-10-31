import { StyledContainer } from "./styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Newsletter = () => {
    return ( 
        <StyledContainer>
            <p className="footerNewsletterTitle">suscribite al newsletter</p>
            <div className="suscribeDiv">
                <input className="suscribeInput" placeholder="dejanos tu mail"></input>
                <button className="suscribeButton"><ArrowForwardIcon sx={{fontSize:20}}/></button>
            </div>
            <div className="socials">
                <div className="socialDiv">
                    <InstagramIcon sx={{fontSize:20, color: '#fff'}}/>
                </div>
                <div className="socialDiv">
                    <FacebookRoundedIcon sx={{fontSize:20, color: '#fff'}}/>
                </div>
                <div className="socialDiv">
                    <YouTubeIcon sx={{fontSize:20, color: '#fff'}}/>
                </div>
                <div className="socialDiv">
                    <TwitterIcon sx={{fontSize:20, color: '#fff'}}/>
                </div>
                <div className="socialDiv">
                    <LinkedInIcon sx={{fontSize:20, color: '#fff'}}/>
                </div>
            </div>
        </StyledContainer> 
    );
}
 
export default Newsletter;