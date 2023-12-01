import React from "react"
import Typography from "@mui/material/Typography"
import mobile from "../../../images/Mobile Template.png"
import search from "../../../images/search.svg"
import task from "../../../images/task.svg"
import monitor from "../../../images/monitor.svg"
import donate from "../../../images/donate.svg"
import "../../../styles/howItWorks.css"

function HowItWorks() {
    return (
        <section className="px-screen">
            <Typography variant="h2" align="center" className="mt-20">
                How{" "}
                <Typography
                    variant="h2"
                    component="span"
                    className="text-primary">
                    Cocycle
                </Typography>{" "}
                Works
            </Typography>
            <Typography
                variant="body1"
                align="center"
                className="text-text-light-grey text-center max-w-full w-[700px] m-auto mt-3">
                With Cocycle, giving and reducing your carbon footprint are
                seamlessly integrated into one meaningful experience. Start
                making a difference today by downloading our app and taking the
                first step toward a brighter, cleaner, and kinder future for
                all.
            </Typography>
            <div id="phone-grid">
                <div className="flex flex-col items-end grid-content max-w-[300px] m-auto gap-2">
                    <img src={search} alt="" />
                    <Typography variant="h5" className="text-right">
                        Explore Donations
                    </Typography>
                    <Typography
                        variant="body1"
                        className="text-text-grey text-right">
                        Your generous donations fuel our mission to [state the
                        mission or cause of your organization], and every
                        contribution
                    </Typography>
                </div>
                <div className="flex flex-col items-start grid-content max-w-[300px] m-auto gap-2">
                    <img src={task} alt="" />
                    <Typography variant="h5">
                        Track Your Carbon Savings
                    </Typography>
                    <Typography variant="body1" className="text-text-grey">
                        Here's where our app takes a unique approach. As soon as
                        you make a donation, our carbon footprint tracker kicks
                        into action.
                    </Typography>
                </div>
                <img src={mobile} alt="" id="phone-img" />
                <div className="flex flex-col items-end grid-content max-w-[300px] m-auto gap-2">
                    <img src={donate} alt="" />
                    <Typography variant="h5" className="text-right">
                        Make a Donation
                    </Typography>
                    <Typography
                        variant="body1"
                        className="text-text-grey text-right">
                        Once you've chosen your cause, you can make a secure and
                        convenient donation directly from the app.{" "}
                    </Typography>
                </div>
                <div className="flex flex-col items-start grid-content max-w-[300px] m-auto gap-2">
                    <img src={monitor} alt="" />
                    <Typography variant="h5">Visualize Your Impact</Typography>
                    <Typography variant="body1" className="text-text-grey">
                        We believe that seeing your impact is essential for
                        motivation. Our app provides visual representations of
                        your carbon savings
                    </Typography>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
