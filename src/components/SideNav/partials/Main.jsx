import react, { useState, useEffect } from 'react'
import MainStyle from "./main/Main"
import FavoritesComponent from "./main/favorite/FavoriteComponent"
import AccountInfo from "./main/Accountinfo/Accountinfo"


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
     }else {
         return(
             <div>
                 <h1>not yet made</h1>
             </div>
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