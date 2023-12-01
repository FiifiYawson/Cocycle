import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import hero from "../../../images/honored_hero.png"

function HonorHerosSection() {
    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            gap="30px"
            justifyContent="space-between"
            alignItems="flex-start"
            className="px-screen my-[200px]">
            <img src={hero} alt="" />
            <div className="w-[700px]">
                <Typography variant="h3">
                    We Honor Our Climate Change Heroes
                </Typography>
                <Stack gap="10px" className="my-[30px]">
                    {sections.map((section, index) => (
                        <div className="text-text-grey px-[15px] border-l-[3px] border-primary border-solid rounded-sm">
                            {section}
                        </div>
                    ))}
                </Stack>
                <div>
                    <Typography
                        variant="body1"
                        className="text-text-grey max-w-full">
                        "Climate change is destroying our path to
                        sustainability. Ours is a world of looming challenges
                        and increasingly limited resources. Sustainable
                        development offers the best chance to adjust our
                        course."
                    </Typography>
                    <Typography
                        variant="body1"
                        className="font-[700] mt-[10px]">
                        Dr Clarke Anderson, Head Of [Position At XYZ College]
                    </Typography>
                </div>
            </div>
        </Stack>
    )
}

const sections = [
    "At the forefront of the battle against climate change on college campuses, we honor the remarkable efforts of individuals like David Heithause, the esteemed Director of the Office of Green Initiatives (OGI) at Kenyon College. A true champion of sustainability, David has been instrumental in fostering a culture of environmental responsibility within the academic community.",

    "The introduction of Cocycle's app under his guidance has been met with resounding approval. This innovative platform has captivated a wide audience, garnering enthusiasm from students, faculty members, and even the broader community.",

    "The app's impressive functionality and its alignment with sustainable goals have been particularly lauded, resonating with David's vision of a greener, more sustainable campus.",

    "David's contributions go beyond mere policy implementation; he has inspired a movement within Kenyon College, galvanizing a community-wide commitment to environmental stewardship. His work serves as a testament to the power of dedicated leadership in effecting positive change and sets a shining example for other campuses to follow.",

    "As we continue to confront the challenges of climate change, the dedication of individuals like David Heithause remains a beacon of hope and a catalyst for meaningful action.",
]

export default HonorHerosSection
