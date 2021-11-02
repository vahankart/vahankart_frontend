import React, {useState} from 'react'
import Root from './partials/nav/Root'
import HeadingText from './partials/nav/Headingtext'
import Navlinks from './partials/nav/Navlinks'
import SpanText from './partials/nav/SpanText'
import Wrapper from './partials/nav/Wrapper'
import Signout from './partials/nav/SignOut'
import Main from './partials/Main'
import Nav from './partials/nav/Nav'
import PersonIcon from '@mui/icons-material/Person'
import BookIcon from '@mui/icons-material/Book'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const SideNav =()=> {
    const [first, setfirst] = useState('top')
    const [account, setaccount] = useState('active')
    const [address, setaddress] = useState('under')
    const [myoOder, setMyOrder] = useState('normal')
    const [favorite, setfavorite] = useState('normal')
    const [last, setlast] = useState('normal')
    const [mainView, setmainView] = useState('account')

    const changePage = (e)=>{
        if (e === 'account') {
            setfirst('top')
            setaccount('active')
            setaddress('under')
            setMyOrder('normal')
            setfavorite('normal')
            setlast('normal')
            setmainView('account')
        } else if(e === 'address'){
            setfirst('normal')
            setaccount('top')
            setaddress('active')
            setMyOrder('under')
            setfavorite('normal')
            setlast('normal')
            setmainView('address')
        } else if(e === 'order'){
            setfirst('normal')
            setaccount('normal')
            setaddress('top')
            setMyOrder('active')
            setfavorite('under')
            setlast('normal')
            setmainView('order')
        } else if(e === 'favorite'){
            setfirst('normal')
            setaccount('normal')
            setaddress('normal')
            setMyOrder('top')
            setfavorite('active')
            setlast('under')
            setmainView('favorite')
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
                        <ExitToAppIcon color="error" fontSize="small"/>
                    </SpanText>
                    <SpanText> SIGN OUT</SpanText>
                </Signout>
            </Nav>
            <Main currentPage={mainView}/>
        </Root>
    )
}

export default SideNav
