import React from "react"
import Typography from "@mui/material/Typography"
import GooglePlayLinks from "../../../components/GooglePlayLinks"
import phone from "../../../images/iPhone 13 Mockup.png"

function ExploreFootpringSection() {
    return (
        <div className="px-screen mt-[200px] max-w-[100vw] overflow-hidden flex flex-wrap items-center gap-[60px] justify-around">
            <div className="flex flex-col items-start gap-10 max-w-[100vw] overflow-x-hidden w-[500px]">
                <Typography variant="h2">
                    Explore The{" "}
                    <Typography variant="h2" component="span" color="primary">
                        Carborn
                    </Typography>{" "}
                    Footprints Of Colleges
                </Typography>

                <Typography variant="body2" className="text-text-grey">
                    Earn carbon points for every item you share and receive.
                    Points also go to the college's involvement in climate
                    action.
                    <br />
                    <br />
                    Compare the statistics of colleges available in your
                    district to see which college has a lower or higher carbon
                    footprint.
                    <br />
                    <br />
                    Analyze the data to identify areas where each college can
                    reduce its carbon footprint. This could include energy
                    efficiency upgrades, promoting sustainable transportation
                    options, or implementing waste reduction programs.
                </Typography>

                <GooglePlayLinks />
            </div>

            <img src={phone} alt="" className="translate-x-[50px] md:inline" />
        </div>
    )
}

export default ExploreFootpringSection
