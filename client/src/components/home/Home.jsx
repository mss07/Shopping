import { useEffect } from 'react';
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Slide }  from './Slide';
import MidSection from "./MidSection";  
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch , useSelector} from 'react-redux';


import { Box, styled } from "@mui/material";

const Wrapper = styled(Box)`
padding : 10px;
background : #F2F2F2;
`

 const Home = () =>{

        const { products } = useSelector(state=>state.getProducts); 
        
        const dispatch=useDispatch();

        useEffect(()=>{
            dispatch(getProducts())
        },[dispatch])
        //useEffect(function,kab kab call kerna h fuction)
        return(
            <>
            <NavBar/>
            <Wrapper>
                <Banner/>
                <Slide products={products} title="Deal Of The Day" timer={true} />
                <MidSection/>
                <Slide products={products} title="Discounts For You" timer={false} />
                <Slide products={products} title="Suggested Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommended Items" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Season's Top Picks" timer={false} />
                <Slide products={products} title="Top Deals On Accessories" timer={false} />
            </Wrapper>
            </>
        )
 }
 
 export default Home;