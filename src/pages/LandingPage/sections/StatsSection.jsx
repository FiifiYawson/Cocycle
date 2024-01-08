import React from "react"
// import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import Carousel from "../../../components/Carousel"

function StatsSection() {
    return (
        <>
            <Stack
                alignItems="stretch"
                spacing={5}
                justifyContent="space-between"
                direction="row"
                className="px-screen bg-black mt-[100px] py-12 hidden md:flex"
            >
                <div>
                    <State
                        title="100,000 Kg"
                        subTitle="C02 Prevented"
                        subText="into the Atmosphere"
                    />
                </div>
                <Divider
                    variant="middle"
                    color="white"
                    orientation="vertical"
                    flexItem
                />
                <div>
                    <State
                        title="4"
                        subTitle="Countries"
                        subText="Different States"
                    />
                </div>
                <Divider
                    variant="middle"
                    color="white"
                    orientation="vertical"
                    flexItem
                />
                <div>
                    <State
                        title="7"
                        subTitle="Partnering Colleges"
                        subText="Across Countries"
                    />
                </div>
            </Stack>
            <div className="bg-black mt-[100px] block md:hidden">
                <Carousel>
                    <Stack
                        alignItems="stretch"
                        gap={5}
                        justifyContent="space-between"
                        direction="row"
                        className="bg-black py-12"
                    >
                        <div className="my-auto">
                            <State
                                title="100,000 Kg"
                                subTitle="CO2 Prevented"
                                subText="Into the Atmosphere"
                            />
                        </div>
                        <Divider
                            variant="middle"
                            color="white"
                            orientation="vertical"
                            flexItem
                        />
                        <div className="my-auto">
                            <State
                                title="4"
                                subTitle="Countries"
                                subText="Different States"
                            />
                        </div>
                        <Divider
                            variant="middle"
                            color="white"
                            orientation="vertical"
                            flexItem
                        />
                        <div className="my-auto">
                            <State
                                title="7"
                                subTitle="Partnering Colleges"
                                subText="Across Countries"
                            />
                        </div>
                        <Divider
                            variant="middle"
                            color="white"
                            orientation="vertical"
                            flexItem
                        />
                    </Stack>
                </Carousel>
            </div>
        </>
    )
}

const State = ({ title, subTitle, subText }) => {
    return (
        <div className="flex flex-col gap-4">
            <Typography variant="h1" align="center" color="primary">
                {title}
            </Typography>
            <Typography variant="h4" align="center" className="text-white">
                {subTitle}
            </Typography>
            <Typography
                variant="h6"
                align="center"
                className="text-grey"
                fontWeight={400}>
                {subText}
            </Typography>
        </div>
    )
}

export default StatsSection
