import React from "react"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import styled from "@mui/material/styles/styled"

const StyledButton = styled(Button)(({ theme }) => ({
    padding: "11px 49.5px",
    borderRadius: "1000px",
    textTransform: "none",
}))

function CustomButton({ name, link, width, styles }) {
    return (
        <StyledButton
            variant="contained"
            color="primary"
            href={link}
            disableElevation
            className={styles}
            sx={{
                width,
            }}>
            <Typography variant="body1">{name}</Typography>
        </StyledButton>
    )
}

export default CustomButton
