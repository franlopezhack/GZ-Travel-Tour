import React from 'react'
import Coruña from '../../components/Maps/Coruña/Coruña'
import Maps from '../../components/Maps/Pontevedra/Maps'
import NavBar from '../../components/NavBar/NavBar'

function Home() {
    return (
        <>
            <div>Home</div>
            <NavBar/>
            {/* <Maps/> */}
          <Coruña/>
            
        </>
    )
}

export default Home