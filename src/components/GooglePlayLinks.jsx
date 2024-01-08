import React from "react"
import Stack from "@mui/material/Stack"
import Typograpy from "@mui/material/Typography"
import googleWhite from "../images/Google_play_white.svg"
import googleBlack from "../images/Google_play_black.svg"
import appStore from "../images/Apple_store_black.svg"

function GooglePlayLinks() {
    return (
        <Stack
            direction="row"
            gap="16px"
            justifyContent="center"
            flexWrap="wrap">
            <Stack
                direction="row"
                gap="15px"
                alignItems="center"
                className="rounded-[12px] p-[12px] bg-primary text-white">
                <img src={googleWhite} alt="Google Play" />
                <div>
                    <Typograpy variant="body1">Get On</Typograpy>
                    <Typograpy variant="h6">Google Play</Typograpy>
                </div>
            </Stack>
            <Stack
                direction="row"
                gap="15px"
                alignItems="center"
                className="rounded-[12px] p-[12px] border-[1px] border-dark-grey">
                <img src={appStore} alt="Google Play" width="50" />
                <div>
                    <Typograpy variant="body1">Download From</Typograpy>
                    <Typograpy variant="h6">Apple Store</Typograpy>
                </div>
            </Stack>
        </Stack>
    )
}

export default GooglePlayLinks
