import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

function PageLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default PageLayout