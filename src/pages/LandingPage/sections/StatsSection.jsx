import React from 'react'
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"

function StatsSection() {
    return (
        <Grid container alignItems="stretch" spacing={5} justifyContent="space-between"className="px-screen bg-black mt-[100px] py-12">
            <Grid item xs={12} md={3.3}>
                <State
                    title= "10+ Years"
                    subTitle= "Furniture Design Experiance"
                    subText= "Across Medical Staff"
                />
            </Grid>
            <Divider variant="middle" color="white" orientation='vertical'  flexItem />
            <Grid item xs={12} md={3.3}>
                <State
                    title= "10+"
                    subTitle= "Gym Instructors"
                    subText= "Supplied Across the Country"
                />
            </Grid>
            <Divider variant="middle" color="white" orientation='vertical' flexItem />
            <Grid item xs={12} md={3.3}>
                <State
                    title= "7"
                    subTitle= "Partnering Companies"
                    subText= "Across Medical Continent"
                />
            </Grid>
        </Grid>
    )
}

const State = ({title, subTitle, subText }) => {
    return (
        <div className="flex flex-col gap-4">
            <Typography variant="h1" align="center"  color="primary">{title}</Typography>
            <Typography variant="h4" align="center"  className="text-white">{subTitle}</Typography>
            <Typography variant="h6" align="center" className="text-grey" fontWeight={400} >{subText}</Typography>
        </div>
    )
}

export default StatsSection