import React from 'react'
import Lugo from '../../components/Maps/Lugo/Lugo'
import Ourense from '../../components/Maps/Ourense/Ourense'
// import Coruña from '../../components/Maps/Coruña/Coruña'
// import Maps from '../../components/Maps/Pontevedra/Maps'

import NavBar from '../../components/NavBar/NavBar'

function Home() {
    return (
        <>
            <div>Home</div>
            <NavBar/>
            {/* <Maps/> */}
          {/* <Coruña/> */}
            <Ourense/>
            <Lugo/>
        </>
    )
}

export default Home