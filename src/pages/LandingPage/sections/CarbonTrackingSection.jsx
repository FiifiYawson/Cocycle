import React from "react"
import phone from "../../../images/iPhone 12.png"
import Typography from "@mui/material/Typography"
import GooglePlayLinks from "../../../components/GooglePlayLinks"

function CarbonTrackingSection() {
    return (
        <section className="px-screen mt-[200px]">
            <div className="rounded-regular bg-primary-opacity flex justify-center gap-[150px] p-[70px] px-[10%] flex-wrap">
                <div className="relative flex-1 min-w-[300px]">
                    <img
                        src={phone}
                        alt=""
                        className="absolute h-[calc(100%+300px)] -top-[150px]"
                    />
                </div>
                <div className="relative z-1 max-w-full backdrop-blur-sm flex flex-col gap-10 items-start">
                    <Typography variant="h2">
                        Track Your{" "}
                        <Typography
                            variant="h2"
                            component="span"
                            className="text-primary">
                            Carbon
                        </Typography>{" "}
                        Savings
                    </Typography>

                    <Typography
                        variant="body1"
                        className="max-w-[500px] text-text-grey">
                        We believe that seeing your impact is essential for
                        motivation. Our app provides visual representations of
                        your carbon savings, such as the number of trees
                        planted, equivalent car miles not driven, or the
                        reduction in your carbon footprint over time. You can
                        watch your positive impact grow.
                    </Typography>

                    <GooglePlayLinks />
                </div>
            </div>
        </section>
    )
}

export default CarbonTrackingSection
