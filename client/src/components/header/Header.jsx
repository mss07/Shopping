// import { AppBar, Toolbar,Box ,Typography,IconButton ,Drawer, List,listItem,styled } from "@mui/material";
// import { Link } from "react-router-dom"
// import { Menu } from '@mui/icons-material';
// import { useState } from "react";

// //components
// import Search from "./Search";
// import CustomButtons from "./CustomButton";

// //IF U WANT TO CHNG THE CSS OF MUI MATERIAL COMPONENTS CHNG IT THIS WAY..
// const Styledheader=styled(AppBar)`
// background: #2874f0;
// height: 55px;
// `
// const Components=styled(Link)`
// margin-left:12%;
// line-height:0;
// text-decoration:none;
// color:inherit;
// `
// const Subheading=styled(Typography)`
// font-size:10px;
// font-style:italic;
// `
// const MenuButton = styled(IconButton)(({ theme }) => ({
//     display: 'none',
//     [theme.breakpoints.down('sm')]: {
//         display: 'block'
//     }
// }));

// const handleOpen = () => {
//     setOpen(true);
// }
// const handleClose = () => {
//     setOpen(false);
// }
// const list = () => (
//     <Box style={{ width: 250 }} onClick={handleClose}>
//         <List>
//             <listItem button>
//                 <CustomButtons />
//             </listItem>
//         </List>
//     </Box>
// );




// const Header = () => {
//     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
//     const [open, setOpen] = useState(false);

//     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
//     return (
//         <div>
//             <Styledheader>
//             <Toolbar style={{ minHeight: 55}}>
//             <MenuButton
//                     color="inherit"
//                     onClick={handleOpen}
//                 >
//                     <Menu />
//                 </MenuButton>

//                 <Drawer open={open} onClose={handleClose}>
//                     {list()}
//                 </Drawer>
                
//                     <Components to='/'>
//                         <img src={logoURL} alt="Logo" style={{width:75}} />
                        
//                         <Box style={{display:"flex"}}>
//                             <Subheading>
//                                 Explore <Box component="span" style={{color:'yellow'}}> Plus  </Box> 
//                             </Subheading>
//                             <img src={subURL} alt="URL" style={{width:"8px",height:"8px",margin:"4px",display:"flex"}} />
//                         </Box>
//                     </Components>
//                     <Search/>
//                     <Box style={{marginLeft:'auto', marginRight:"5%"}}>
//                         <CustomButtons/>
//                     </Box>
//                 </Toolbar>
//             </Styledheader>
//         </div>
//     );
    
// };

// export default Header;

import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';

import { Link } from 'react-router-dom';

//components
import CustomButtons from './CustomButton';
import Search from './Search';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    


    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <Component to='/'>
                    <img src={logoURL} style={{ width: 75 }} alt='logo'/>
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;

    
