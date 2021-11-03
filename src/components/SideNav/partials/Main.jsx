import { useState, useEffect } from 'react'
import MainStyle from "./main/Main"
import FavoritesComponent from "./main/favorite/FavoriteComponent"
import AccountInfo from "./main/Accountinfo/Accountinfo"
import Address from './main/AdressBook/Address'
import Order from './main/Order/Order'
const Main = ({currentPage})=>{
    const [ MainView, setMainView] = useState(currentPage)
    useEffect(() => {
        setMainView(currentPage)
    }, [currentPage])
    const ReturnPage = ({prop})=>{
     if (prop === 'account') {
         return(
            <AccountInfo />
         )
     } else if(prop === 'favorite'){
         return(
            <FavoritesComponent />
         )
     } else if(prop === 'address'){
         return(
             <Address />
         )
     } else if(prop === 'order'){
         return(
            <Order />
         )
     }
    }
    return(
        <MainStyle>
            <ReturnPage prop={MainView}/>
        </MainStyle>
    )
}

export default Main