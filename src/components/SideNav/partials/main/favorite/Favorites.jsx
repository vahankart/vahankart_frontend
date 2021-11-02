import styled from 'styled-components'

const Favorites = styled.div`
    max-height: 70vh;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    @media only screen and (max-width: 950px){
        width: 600px;
    }
    @media only screen and (max-width: 500px){
        width: 100%;
    }
`

export default Favorites