/* <link href="https://fonts.googleapis.com/css?family=Lato:300,400,900&display=swap" rel="stylesheet"></link> */
import styled from "styled-components";
import { NavLink} from "react-router-dom";
//Font Style

// font-family: ${font};
export const font = "Lato, sans-serif";

// font-wieght: ${example};
export const bold = "900";
export const regular = "400";
export const light = "300";

// font-size: ${example}
export const h1_font_size = "36px";
export const h2_font_size = "18px";
export const h3_font_size = "16px";
export const h4_font_size = "14px";
export const h5_font_size = "12px";
export const h6_font_size = "10px";
export const p_font_size = "12px";
export const nav_link_font_size = "16px";

//Colors Arranged from Dark to Light and High to Low Saturation
export const Dark_Slate_Green = "#2fbf81";
export const KickStarter_Green = "#05ce78"; //Brand Color
export const Pale_KickStarter = "#48c891";
export const Pale_Sea_Green = "#74d5ab";
export const Mute_Sea_Green = "#abd7c4";
export const Pale_Green_Blue = "#9bcfc9";
export const black = "#000000";
export const white = "#FFFFFF";
export const failure = '#F44336';


//Spacing
export const large = "60px";
export const medium = "30px";
export const smallone = "25px";
export const smalltwo = "20px";

//Text Styles
//Example use <H1 white></H1> | <H1 black></H1> // renders h1 with the perspective color font
export const H1 = styled.h1`
    font-family: ${font};
    font-weight: ${bold};
    font-size: ${h1_font_size};
    ${props => (props.dark ? `color: ${Dark_Slate_Green};` : null)}
    ${props => (props.darkbrand ? `color: ${KickStarter_Green};` : null)}
    ${props => (props.mediumbrand ? `color: ${Pale_KickStarter};` : null)}
    ${props => (props.medium ? `color: ${Pale_Sea_Green};` : null)}
    ${props => (props.lightgreen ? `color: ${Mute_Sea_Green};` : null)}
    ${props => (props.lightblue ? `color: ${Pale_Green_Blue};` : null)}
    ${props => (props.white ? `color: ${white};` : null)}
    ${props => (props.black ? `color: ${black};` : null)}    
`;

export const H2 = styled.h2`
    font-family: ${font};
    font-weight: ${bold};
    font-size: ${h2_font_size};
    ${props => (props.dark ? `color: ${Dark_Slate_Green};` : null)}
    ${props => (props.darkbrand ? `color: ${KickStarter_Green};` : null)}
    ${props => (props.mediumbrand ? `color: ${Pale_KickStarter};` : null)}
    ${props => (props.medium ? `color: ${Pale_Sea_Green};` : null)}
    ${props => (props.lightgreen ? `color: ${Mute_Sea_Green};` : null)}
    ${props => (props.lightblue ? `color: ${Pale_Green_Blue};` : null)}
    ${props => (props.white ? `color: ${white};` : null)}
    ${props => (props.black ? `color: ${black};` : null)}     
`;

export const H3 = styled.h3`
    font-family: ${font};
    font-weight: ${bold};
    font-size: ${h3_font_size};
    ${props => (props.dark ? `color: ${Dark_Slate_Green};` : null)}
    ${props => (props.darkbrand ? `color: ${KickStarter_Green};` : null)}
    ${props => (props.mediumbrand ? `color: ${Pale_KickStarter};` : null)}
    ${props => (props.medium ? `color: ${Pale_Sea_Green};` : null)}
    ${props => (props.lightgreen ? `color: ${Mute_Sea_Green};` : null)}
    ${props => (props.lightblue ? `color: ${Pale_Green_Blue};` : null)}
    ${props => (props.white ? `color: ${white};` : null)}
    ${props => (props.black ? `color: ${black};` : null)}     
`;

export const H4 = styled.h4`
    font-family: ${font};
    font-weight: ${bold};
    font-size: ${h4_font_size};
    ${props => (props.dark ? `color: ${Dark_Slate_Green};` : null)}
    ${props => (props.darkbrand ? `color: ${KickStarter_Green};` : null)}
    ${props => (props.mediumbrand ? `color: ${Pale_KickStarter};` : null)}
    ${props => (props.medium ? `color: ${Pale_Sea_Green};` : null)}
    ${props => (props.lightgreen ? `color: ${Mute_Sea_Green};` : null)}
    ${props => (props.lightblue ? `color: ${Pale_Green_Blue};` : null)}
    ${props => (props.white ? `color: ${white};` : null)}
    ${props => (props.black ? `color: ${black};` : null)}     
`;

export const H5 = styled.h5`
    font-family: ${font};
    font-weight: ${bold};
    font-size: ${h5_font_size};
    ${props => (props.dark ? `color: ${Dark_Slate_Green};` : null)}
    ${props => (props.darkbrand ? `color: ${KickStarter_Green};` : null)}
    ${props => (props.mediumbrand ? `color: ${Pale_KickStarter};` : null)}
    ${props => (props.medium ? `color: ${Pale_Sea_Green};` : null)}
    ${props => (props.lightgreen ? `color: ${Mute_Sea_Green};` : null)}
    ${props => (props.lightblue ? `color: ${Pale_Green_Blue};` : null)}
    ${props => (props.white ? `color: ${white};` : null)}
    ${props => (props.black ? `color: ${black};` : null)}     
`;

export const H6 = styled.h6`
    font-family: ${font};
    font-weight: ${regular};
    font-size: ${h6_font_size};
    ${props => (props.dark ? `color: ${Dark_Slate_Green};` : null)}
    ${props => (props.darkbrand ? `color: ${KickStarter_Green};` : null)}
    ${props => (props.mediumbrand ? `color: ${Pale_KickStarter};` : null)}
    ${props => (props.medium ? `color: ${Pale_Sea_Green};` : null)}
    ${props => (props.lightgreen ? `color: ${Mute_Sea_Green};` : null)}
    ${props => (props.lightblue ? `color: ${Pale_Green_Blue};` : null)}
    ${props => (props.white ? `color: ${white};` : null)}
    ${props => (props.black ? `color: ${black};` : null)}
    ${props => (props.fail ? `color: ${failure};` : null)}        
`;

export const NavStyle = styled(NavLink)`
	font-family: ${font};
	font-weight: ${bold};
	font-size: ${nav_link_font_size};
	color: ${white};
	text-decoration: none;
	margin-left: ${medium};
	&:hover {
		transform: scale(1.1);
	}
`;

export const P = styled.p`
    font-family: ${font};
    font-weight: ${regular};
    font-size: ${p_font_size};
    ${props => (props.dark ? `color: ${Dark_Slate_Green};` : null)}
    ${props => (props.darkbrand ? `color: ${KickStarter_Green};` : null)}
    ${props => (props.mediumbrand ? `color: ${Pale_KickStarter};` : null)}
    ${props => (props.medium ? `color: ${Pale_Sea_Green};` : null)}
    ${props => (props.lightgreen ? `color: ${Mute_Sea_Green};` : null)}
    ${props => (props.lightblue ? `color: ${Pale_Green_Blue};` : null)}
    ${props => (props.white ? `color: ${white};` : null)}
    ${props => (props.black ? `color: ${black};` : null)} 
    ${props => (props.fail ? `color: ${failure};` : null)}      
`;


//Buttons

export const Button = styled.button`
    text-align: center;
    border-radius: 10px;
    width: 170px;
    height:50px;
    font-family: ${font};
    font-weight: ${bold};
    font-size: ${h3_font_size};
    border:none;
	&:hover {
		transform: scale(1.1);
	}
`;

export const ColoredButton = styled(Button)`
    background-color: ${KickStarter_Green};
    color: ${white};
    ${props => (props.small ? `width: 85px; height:25px;` : null)}
    ${props => (props.white ? `color: ${white};` : null)}    
    &:active {
        background-color: ${white};
        color:${KickStarter_Green};
	}
`;

export const WhiteButton = styled(Button)`
    background-color: ${white};
    ${props => (props.dark ? `color: ${Dark_Slate_Green}; border: ${Dark_Slate_Green} 1px solid;` : null)}
    ${props => (props.darkbrand ? `color: ${KickStarter_Green};` : null)}
    ${props => (props.mediumbrand ? `color: ${Pale_KickStarter};` : null)}
    ${props => (props.medium ? `color: ${Pale_Sea_Green};` : null)}
    ${props => (props.lightgreen ? `color: ${Mute_Sea_Green};` : null)}
    ${props => (props.lightblue ? `color: ${Pale_Green_Blue};` : null)}
    ${props => (props.white ? `color: ${white};` : null)}
    ${props => (props.black ? `color: ${black};` : null)}  
    ${props => (props.fail ? `color: ${failure};` : null)}
    ${props => (props.small ? `width: 85px; height:25px;` : null)}       
    &:active {
        background-color: ${KickStarter_Green};
        color: ${white};
	}
`;


export const Card = styled.div`
width: 400px;
margin: 3% auto;
background-color:white;
border-radius: 10px;
padding: 2% 0%;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  box-sizing: border-box;  
`;