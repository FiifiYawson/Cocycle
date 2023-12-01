import React from "react"
import Typography from "@mui/material/Typography"
import GooglePlayLinks from "../../../components/GooglePlayLinks"

function Header() {
    return (
        <div className="px-screen mt-[100px]">
            <Typography variant="h1" className="text-center">
                Reducing Your{" "}
                <Typography variant="h1" component="span" color="primary">
                    Carbon Footprint
                </Typography>
                <br /> Share{" "}
                <Typography variant="h1" component="span" color="primary">
                    Items
                </Typography>{" "}
                to be Used
            </Typography>
            <Typography
                variant="body1"
                className="text-text-light-grey text-center w-[700px] max-w-full m-auto mt-3">
                Join us in the journey to a greener, more sustainable world.
                Take the first step towards minimizing your carbon footprint and
                making a lasting impact on the planet. Our app is here to help
                you make a difference."
            </Typography>
            <div className="mt-7">
                <GooglePlayLinks />
            </div>
        </div>
    )
}

export default Header
