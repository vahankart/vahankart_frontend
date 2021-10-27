import React from 'react'
import Root from './partials/Root'
import HeadingText from './partials/Headingtext'
import Navlinks from './partials/Navlinks'
import NavlinksActive from './partials/NavlinksActive'
import SpanText from './partials/SpanText'
import Wrapper from './partials/Wrapper'
import Signout from './partials/SignOut'
import PersonIcon from '@mui/icons-material/Person'
import BookIcon from '@mui/icons-material/Book'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SignoutIcon from './assests/signout.svg'


const SideNav =()=> {
    return (
        <Root>
            <HeadingText>
                ACCOUNT DASHBOARD
            </HeadingText>
            <Wrapper>
                <Navlinks>
                    <SpanText><PersonIcon sx={{ fontSize: 25}}/>  </SpanText>
                    <SpanText>Account Information</SpanText>
                </Navlinks>
                <Navlinks top>
                    <SpanText><BookIcon sx={{ fontSize: 25}}/>  </SpanText>
                    <SpanText>Address Book</SpanText>
                </Navlinks>
                <NavlinksActive>
                    <SpanText><ShoppingCartIcon sx={{ fontSize: 25}}/>  </SpanText>
                    <SpanText>My Orders</SpanText>
                </NavlinksActive>
                <Navlinks under>
                    <SpanText><FavoriteIcon sx={{ fontSize: 25}}/>  </SpanText>
                    <SpanText>My Favorites</SpanText>
                </Navlinks>
            </Wrapper>
            <Signout>
                <SpanText>
                    <img src={SignoutIcon}/>
                </SpanText>
                <SpanText>  SIGN OUT</SpanText>
            </Signout>
        </Root>
    )
}

export default SideNav
