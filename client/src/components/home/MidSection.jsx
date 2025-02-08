import { imageURL } from "../../constants/data";
import Grid from "@mui/material/Grid"; 
import { styled } from "@mui/material"


const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;
const Image = styled('img')(({ theme }) => ({ 
  display: 'flex',
  marginTop: 20,
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('md')]: {
      objectFit: 'cover',
      height: 120
  }
}));
const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

const MidSection = () => {
  return (
    <>
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {
          imageURL.map(image=>(
            <Grid item lg={4} sm={4} md={12} xs={12} >

                    <img src={image} alt="" style={{width:'100%'}} />
                </Grid>
            ))
          }
    </Wrapper>
    <Image src={url} alt="covid" />
    </>
  );
}

// const MidSection = () => {
//   return (
//     <Grid container spacing={2}> {/* ✅ Correct Grid Usage */}
//       {imageURL.map((image, index) => (
//         <Grid item key={index} lg={4} sm={6} xs={12}> {/* ✅ Added key */}
//           <img src={image} alt="" style={{ width: "100%" }} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

export default MidSection;
