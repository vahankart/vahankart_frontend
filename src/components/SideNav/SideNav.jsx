import React, {useState} from 'react'
import Root from './partials/Root'
import HeadingText from './partials/Headingtext'
import Navlinks from './partials/Navlinks'
import SpanText from './partials/SpanText'
import Wrapper from './partials/Wrapper'
import Signout from './partials/SignOut'
import Main from './partials/Main'
import Nav from './partials/Nav'
import PersonIcon from '@mui/icons-material/Person'
import BookIcon from '@mui/icons-material/Book'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SignoutIcon from '../../images/signout.svg'


const SideNav =()=> {
    const [first, setfirst] = useState('top')
    const [account, setaccount] = useState('active')
    const [address, setaddress] = useState('under')
    const [myoOder, setMyOrder] = useState('normal')
    const [favorite, setfavorite] = useState('normal')
    const [last, setlast] = useState('normal')

    const changePage = (e)=>{
        if (e === 'account') {
            setfirst('top')
            setaccount('active')
            setaddress('under')
            setMyOrder('normal')
            setfavorite('normal')
            setlast('normal')
        } else if(e === 'address'){
            setfirst('normal')
            setaccount('top')
            setaddress('active')
            setMyOrder('under')
            setfavorite('normal')
            setlast('normal')
        } else if(e === 'order'){
            setfirst('normal')
            setaccount('normal')
            setaddress('top')
            setMyOrder('active')
            setfavorite('under')
            setlast('normal')
        } else if(e === 'favorite'){
            setfirst('normal')
            setaccount('normal')
            setaddress('normal')
            setMyOrder('top')
            setfavorite('active')
            setlast('under')
        }
    }

    return (
        <Root>
            <Nav>
                <HeadingText>
                    ACCOUNT DASHBOARD
                </HeadingText>
                <Wrapper>
                    <Navlinks st={first} onClick={()=>changePage('first')}>
                    </Navlinks>
                    <Navlinks st={account} onClick={()=>changePage('account')}>
                        <SpanText><PersonIcon sx={{ fontSize: 25}}/>  </SpanText>
                        <SpanText>Account Information</SpanText>
                    </Navlinks>
                    <Navlinks st={address} onClick={()=>changePage('address')}>
                        <SpanText><BookIcon sx={{ fontSize: 25}}/>  </SpanText>
                        <SpanText>Address Book</SpanText>
                    </Navlinks>
                    <Navlinks st={myoOder} onClick={()=>changePage('order')}>
                        <SpanText><ShoppingCartIcon sx={{ fontSize: 25}}/>  </SpanText>
                        <SpanText>My Orders</SpanText>
                    </Navlinks>
                    <Navlinks st={favorite} onClick={()=>changePage('favorite')}>
                        <SpanText><FavoriteIcon sx={{ fontSize: 25}}/>  </SpanText>
                        <SpanText>My Favorites</SpanText>
                    </Navlinks>
                    <Navlinks st={last} onClick={()=>changePage('last')}>
                    </Navlinks>
                </Wrapper>
                <Signout>
                    <SpanText>
                        <img src={SignoutIcon} alt='Signout'/>
                    </SpanText>
                    <SpanText>SIGN OUT</SpanText>
                </Signout>
            </Nav>
            <Main>
                <h1>My Orders</h1>
            </Main>
        </Root>
    )
}

export default SideNav
