import React from 'react';
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer=styled(Box)`
background:white;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputSearchBase=styled(InputBase)`
padding-left:10px;
width:100%;
`
const SearchIconWrapper=styled(Box)`
color:blue;
margin-top:6px;
`

const Search = () =>{
    return( 
            <SearchContainer>
            <InputSearchBase placeholder='Search for brands, products and more'/>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            </SearchContainer>
    
    )
}
export default Search;