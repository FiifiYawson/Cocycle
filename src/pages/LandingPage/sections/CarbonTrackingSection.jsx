import phone from "../../../images/iPhone 12.png"
import Typography from "@mui/material/Typography"
import GooglePlayLinks from "../../../components/GooglePlayLinks"
import PhoneCards from "../../../components/PhoneCards"

function CarbonTrackingSection() {
    return (
        <section className="px-screen mt-[200px]">
            <div className="rounded-regular bg-primary-opacity flex flex-col xl:flex-row justify-center gap-[150px] xl:gap-[100px] p-[70px] px-[11%]">
                <div className="relative flex-1 min-h-[100px] xl:min-w-[300px]">
                    <div
                        className="absolute h-[calc(100%+300px)] translate-x-[calc(100px)] xl:translate-x-0 -top-[150px] w-[200px] xl:w-full xl:max-w-[300px] bg-[center]"
                        style={{
                            backgroundImage: `url("${phone}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                        }}
                    >
                        <PhoneCards
                            title="Weekly Updates"
                            content="You've accumulaed 32 points this week"
                            styles="left-[50%] top-[50%] -translate-y-[50%]"
                        />
                        <PhoneCards
                            title="Weekly Updates"
                            content="You've accumulaed 32 points this week"
                            styles="right-[70%] top-[30%] -translate-y-[50%]"
                        />
                        <PhoneCards
                            title="Weekly Updates"
                            content="You've accumulaed 32 points this week"
                            styles="right-[70%] top-[70%] -translate-y-[50%]"
                        />
                    </div>
                </div>
                <div className="relative z-1 max-w-full backdrop-blur-sm flex flex-col gap-10 items-start">
                    <Typography variant="h2">
                        Track Your{" "}
                        <Typography
                            variant="h2"
                            component="span"
                            className="text-primary"
                        >
                            Carbon
                        </Typography>{" "}
                        Savings
                    </Typography>

                    <Typography
                        variant="body1"
                        className="xl:max-w-[500px] text-text-grey"
                    >
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
