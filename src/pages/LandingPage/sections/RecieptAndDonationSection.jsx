import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import bg from "../../../images/Bg-woman.png"

function RecieptAndDonationSection() {
    return (
        <Grid
            container
            className="px-screen mt-[200px]"
            alignItems="flex-start"
            gap={1}
            justifyContent="space-around"
        >
            <Grid item xs={12} md={5.5}>
                <img src={bg} alt="" className="m-auto" />
            </Grid>
            <Grid item xs={12} md={5.5}>
                <Typography variant="h2" className="text-center">
                    Receive receipts for Charity Donations Tax Deduction
                </Typography>
            </Grid>
        </Grid>
    )
}

export default RecieptAndDonationSection
