import React from 'react'
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import CustomButton from './CustomButton'
import logo from "../images/Cocycle.svg"
import { useLocation, Link } from 'react-router-dom'
import routes from '../utils/routes'

function NavBar() {
    const location = useLocation()

    return (
        <Stack className="px-screen py-5" direction="row" justifyContent="space-between" alignItems="center">
            <Link to="/"><img src={logo} alt="Cocyle" /></Link>
            <Stack direction="row" >
                {routes.map(({ name, path }, index) =>
                    <Link key={index} to={path}>
                        <div className='flex flex-col items-start'>
                            <Typography variant="body1" className={`${path === location.pathname ? "text-primary" : ""} hover:text-primary`}>{name}</Typography>
                            <div className={`${path === location.pathname ? "w-full" : "w-[0%]"} transition-all h-[2px] bg-primary`} />
                        </div>
                    </Link>
                )}
            </Stack>
            <CustomButton
                name="Sign In"
            />
        </Stack>
    )
}

export default NavBar