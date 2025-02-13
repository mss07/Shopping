import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";
import { styled } from "@mui/material";
//different way to use styled because img is used 
const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('md')]: {
      objectFit: 'cover',
      height: 180
  }
}));

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () =>{
    return (
       <Carousel
            responsive={responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            >
        {
            bannerData.map((data, index) => (
              <Image key={index} src={data.url} alt="banner" />
          ))
          
        }
       </Carousel>
    )
}

export default Banner;