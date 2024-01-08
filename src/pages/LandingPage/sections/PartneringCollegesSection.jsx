import React from "react"
import bg from "../../../images/Backgrounds/cardBg_3.png"
import Typography from "@mui/material/Typography"
import kenyon from "../../../images/colleges/Kenyon_College.png"
import ohio from "../../../images/colleges/ohiostate.png"
import denison from "../../../images/colleges/Denison.png"

function PartneringCollegesSection() {
    return (
        <div className="mt-[160px] px-screen flex flex-wrap items-center gap-[50px] justify-around">
            <img src={bg} alt="" />
            <div className="max-w-[550px] flex flex-col gap-10">
                <Typography variant="h2">Partnering Colleges</Typography>
                <Typography variant="body2">
                    Cocycle is proud to announce its ongoing partnerships with a
                    diverse range of distinguished universities, each uniquely
                    committed to environmental stewardship and sustainability.
                    <br />
                    <br />
                    Our collaboration extends to institutions of various sizes,
                    from small liberal arts colleges to large research
                    universities. Among these esteemed partners are Kenyon
                    College, known for its intimate campus setting and dedicated
                    community involvement; Ohio State University, a large and
                    dynamic institution recognized for its extensive research in
                    environmental sciences;
                    <br />
                    <br />
                    Denison University, a medium-sized college renowned for its
                    commitment to sustainability in education; and Tufts
                    University, which has a strong focus on global environmental
                    leadership. These partnerships reflect our mutual dedication
                    to creating a more sustainable future through innovative
                    environmental initiatives on campus and beyond.
                </Typography>
                <div className="flex flex-wrap justify-around">
                    <img src={ohio} alt="" />
                    <img src={kenyon} alt="" />
                    <img src={denison} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PartneringCollegesSection
