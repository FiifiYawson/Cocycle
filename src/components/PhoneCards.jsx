import React from "react"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"

function PhoneCards({ title, content, styles }) {
    return (
        <Stack
            direction="row"
            alignItems="center"
            className={`absolute bg-white p-2 gap-[clamp(10px,1vw,50px)] border-[3px] border-grey border-solid w-max rounded-[10px] ${styles}`}
        >
            <div className="w-[clamp(20px,3vw,50px)] h-[clamp(20px,3vw,50px)] rounded-full bg-grey"></div>
            <div>
                <Typography
                    variant="body1"
                    className="font-[700] text-[clamp(10px,0.7vw,50px)]"
                >
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    className="text-[clamp(8px,0.7vw,50px)]"
                >
                    {content}
                </Typography>
            </div>
        </Stack>
    )
}

export default PhoneCards
