import React from "react"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import CustomButton from "../../../components/CustomButton"
import check from "../../../images/tick-circle.svg"
import checkWhite from "../../../images/tick-circle-white.svg"

function ExplorePlansSection() {
    return (
        <div className="px-screen mt-[150px] ">
            <Typography variant="h1" className="text-center mb-[10px]">
                Explore Our Loyalty Plans
            </Typography>
            <Typography
                variant="body1"
                className="text-text-grey w-[600px] max-w-full text-center m-auto mb-[60px]">
                Cocycle's innovative plans are meticulously designed to cater to
                the varying needs of campuses of different sizes, focusing on
                environmental sustainability and efficient resource management.
            </Typography>
            <div className="flex flex-col gap-[20px] items-center lg:flex-row">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        light={card.light}
                        subText={card.subText}
                        subscription={card.subscription}
                        actionText={card.actionText}
                        data={card.data}
                    />
                ))}
            </div>
        </div>
    )
}

const Card = ({ light, title, subText, subscription, data, actionText }) => {
    return (
        <div
            className={`rounded-regular ${
                light ? "bg-primary-opacity" : "bg-primary"
            } p-[40px]`}>
            <div className="mb-[30px]">
                <Typography
                    variant="h3"
                    className={`${light ? "text-black" : "text-white"}`}>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    className={`${
                        light ? "text-text-grey" : "text-light-grey"
                    }`}>
                    {subText}
                </Typography>
            </div>
            <Typography
                variant={light ? "h2" : "h3"}
                className={`${
                    light ? "text-primary" : "text-white"
                } mb-[20px]`}>
                {subscription}
            </Typography>
            <Stack gap="15px">
                {data.map((d, index) => (
                    <Stack
                        direction="row"
                        key={index}
                        alignItems="flex-start"
                        gap="20px">
                        <img src={light ? check : checkWhite} alt="" />
                        <div>
                            <Typography
                                variant="h6"
                                className={`${
                                    light ? "text-black" : "text-white"
                                }`}>
                                {d.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                className={`${
                                    light ? "text-text-grey" : "text-light-grey"
                                }`}>
                                {d.content}
                            </Typography>
                        </div>
                    </Stack>
                ))}
            </Stack>
            <CustomButton
                name={actionText}
                width="100%"
                styles={`mt-[25px] ${
                    light
                        ? "border-none"
                        : "border-[1px] border-solid border-white"
                } rounded-[15px]`}
            />
        </div>
    )
}

const cards = [
    {
        light: true,
        title: "Additional Storage Option",
        subText: "Ideal for Small and Medium Capmuses",
        subscription: "$2,500",
        actionText: "Subscribe Now",
        data: [
            {
                title: "App Access",
                content:
                    "Provides comprehensive access to Cocycle's user-friendly application, facilitating ease of use and engagement.",
            },
            {
                title: "Carbon Reporting",
                content:
                    "Enables campuses to monitor and report their carbon footprint, aligning with sustainability goals..",
            },
            {
                title: "Admin Analytics for CO2 Reduction",
                content:
                    "Offers detailed analytics to track and enhance CO2 reduction effort s.",
            },
            {
                title: "General Input Tracking",
                content:
                    "Provides a comprehensive storage solution to manage and optimize resources more effectively.",
            },
            {
                title: "Details",
                content:
                    "An extra storage capacity option is available for smaller campuses, allowing them to expand their resource management capabilities beyond the LiteGreen Package. ",
            },
        ],
    },
    {
        light: false,
        title: "Green Package",
        subText: "Specifically tailored for Large Campuses",
        subscription: "Enterprise Model",
        actionText: "Contact Us",
        data: [
            {
                title: "App Access",
                content:
                    "Provides comprehensive access to Cocycle's user-friendly application, facilitating ease of use and engagement.",
            },
            {
                title: "Carbon Reporting",
                content:
                    "Enables campuses to monitor and report their carbon footprint, aligning with sustainability goals..",
            },
            {
                title: "Admin Analytics for CO2 Reduction",
                content:
                    "Offers detailed analytics to track and enhance CO2 reduction effort s.",
            },
            {
                title: "General Input Tracking",
                content:
                    "Provides a comprehensive storage solution to manage and optimize resources more effectively.",
            },
            {
                title: "Details",
                content:
                    "An extra storage capacity option is available for smaller campuses, allowing them to expand their resource management capabilities beyond the LiteGreen Package. ",
            },
            {
                title: "Storage Facility",
                content:
                    "Provides a comprehensive storage solution to manage and optimize resources more effectively",
            },
        ],
    },
    {
        light: true,
        title: "LiteGreen Package",
        subText: "Ideal for Small and Medium Campuses",
        subscription: "$2,500/year",
        actionText: "Subscribe Now",
        data: [
            {
                title: "App Access",
                content:
                    "Provides comprehensive access to Cocycle's user-friendly application, facilitating ease of use and engagement.",
            },
            {
                title: "Carbon Reporting",
                content:
                    "Enables campuses to monitor and report their carbon footprint, aligning with sustainability goals..",
            },
            {
                title: "Admin Analytics for CO2 Reduction",
                content:
                    "Offers detailed analytics to track and enhance CO2 reduction effort s.",
            },
            {
                title: "General Input Tracking",
                content:
                    "Provides a comprehensive storage solution to manage and optimize resources more effectively.",
            },
            {
                title: "Details",
                content:
                    "An extra storage capacity option is available for smaller campuses, allowing them to expand their resource management capabilities beyond the LiteGreen Package. ",
            },
        ],
    },
]

export default ExplorePlansSection
