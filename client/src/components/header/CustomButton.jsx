import { Box , Button ,Typography, styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState , useContext} from "react";
import { DataContext } from "../../context/DataProvider";


//componnents
import LoginDialog from "../login/LoginDiaglog";
import Profile from "./Profile";

const Wrapper=styled(Box)`
display:flex;
background: "white";  
margin: 0 3% 0 auto;
& > Button, & > p , & > div{
margin-right:40px;
font-size : 16px;
align-items:center;
}
`
const Loginbutton=styled(Button)`
color:#2874f0;
background:white;
padding:5px 40px;
text-transform:none;
border-radius:2px;
box-shadow:none;
font-weight:600;
height :32px;
`


const CustomButtons = ()=>{
    const [open, setOpen] = useState(false);
    const {account , setAccount} = useContext(DataContext);
    const OpenDialog = ()=>{
        setOpen(true);
    }
    return( 
        <Wrapper>
           {
                account ? <Profile account={account} setAccount={setAccount}/>:
            <Loginbutton variant="contained" onClick={()=>OpenDialog()}>
                Login
            </Loginbutton>
           }
            <Typography style={{ marginTop : 3 , width:135}}>Become a Seller </Typography> 
            <Typography style={{ marginTop : 3}}>More </Typography> 

            <Box style={{display:"flex"}}>


                <ShoppingCartIcon/>
                <Typography> Cart</Typography>
            </Box>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}
export default CustomButtons;