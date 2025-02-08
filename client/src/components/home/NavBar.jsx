import { Box , styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflowX: 'overlay',
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))
const Wrapper=styled(Box)`
padding: 12px 8px;
text-align: center;
`
const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`

const NavBar = () =>{

    return(
        <Component>
  {
    navData.map((data, index) => (
      <Wrapper key={index}> {/* Use a unique key here */}
        <img src={data.url} alt="nav" style={{ width: 64 }} />
        <Text>{data.text}</Text>
      </Wrapper>
    ))
  }
</Component>

    )
}

export default NavBar;