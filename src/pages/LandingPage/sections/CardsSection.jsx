import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import CustomButton from "../../../components/CustomButton"
import leaf from "../../../images/Leaf.svg"
import check from "../../../images/check.svg"
import googleWhite from "../../../images/Google_play_white.svg"
import appStore from "../../../images/Apple_store.svg"
import user from "../../../images/users/requst_user.png"
import telegram from "../../../images/telegram_white.svg"
import cartBg1 from "../../../images/Backgrounds/cardBg_1.png"
import cartBg2 from "../../../images/Backgrounds/cardBg_2.png"
import cartBg3 from "../../../images/Backgrounds/cardBg_3.png"
import Denison from "../../../images/colleges/Denison.png"
import Kenyon from "../../../images/colleges/Kenyon_College.png"
import ohioState from "../../../images/colleges/ohiostate.png"
import Carousel from "../../../components/Carousel"
import "../../../styles/cards.css"

function CardsSection() {
    return (
        <>
            <div id="cards" className="mt-10 hidden md:grid">
                <ContentCard header="Overall Carbon footprint">
                    <Stack
                        direction="row"
                        gap="30px"
                        justifyContent="space-between"
                    >
                        <div>
                            <Typography variant="body1" className="font-[700]">
                                2,562 Kg
                            </Typography>
                            <Typography variant="subtitle1">
                                Carbon Footprint
                            </Typography>
                        </div>
                        <div>
                            <Stack direction="row">
                                <img src={leaf} alt="" />
                                <Typography
                                    variant="body1"
                                    className="font-[700]">
                                    456
                                </Typography>
                            </Stack>
                            <Typography variant="subtitle1">Posints</Typography>
                        </div>
                        <div>
                            <Typography variant="body1" className="font-[700]">
                                14
                            </Typography>
                            <Typography variant="subtitle1">
                                Items Donated
                            </Typography>
                        </div>
                    </Stack>
                    <Stack gap="15px" className="my-4">
                        <Stack direction="row" alignItems="center" gap="7px">
                            <img src={check} alt="" />
                            <Typography variant="body2">
                                Earn carbon points for every item you share or
                                donate an item
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap="7px">
                            <img src={check} alt="" />
                            <Typography variant="body2">
                                Earn carbon points for every item you share or
                                donate an item
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap="7px">
                            <img src={check} alt="" />
                            <Typography variant="body2">
                                Earn carbon points for every item you share or
                                donate an item
                            </Typography>
                        </Stack>
                    </Stack>
                    <CustomButton
                        width="100%"
                        name={
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap="10px"
                            >
                                <Typography variant="body1">
                                    Get the App
                                </Typography>
                                <img src={googleWhite} width="25" alt="" />
                                <img src={appStore} width="30" alt="" />
                            </Stack>
                        }
                    />
                </ContentCard>
                <ContentCard header="Make A Request">
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap="10px"
                        className="mb-2"
                    >
                        <img src={user} alt="" />
                        <div>
                            <Typography variant="body1">Parker</Typography>
                            <Typography variant="subtitle1">
                                West Side
                            </Typography>
                        </div>
                    </Stack>
                    <Typography variant="subtitle1">
                        I need a/an Econ 102 Text book
                    </Typography>
                    <Stack direction="row" justifyContent="space-between">
                        <Stack direction="row" gap="5px" className="w-min">
                            <div className="rounded-full p-[5px] py-[2px] text-white bg-[#F6F6F633]">
                                <Typography variant="subtitle1">
                                    Sorry
                                </Typography>
                            </div>
                            <div className="rounded-full p-[5px] py-[2px] text-white bg-[#FFDD5533]">
                                <Typography color="#FFDD55" variant="subtitle1">
                                    2022
                                </Typography>
                            </div>
                        </Stack>
                        <img src={telegram} alt="" />
                    </Stack>
                </ContentCard>
                <PictureCard
                    picture={cartBg1}
                    header="Donate An Item"
                    subHeader="Help us fight climate change problem. Every item you donate help our fight"
                />
                <PictureCard
                    picture={cartBg2}
                    header="Request For an Item"
                    subHeader="Make a request for an item you will need and receive it in less that 24 hours from 
                a colleague in your school"
                />
                <PictureCard
                    picture={cartBg3}
                    header="Discover Schools and Students With the Highest Donation and Contribution"
                />
                <ContentCard header="Featured Colleges">
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        gap="15px"
                    >
                        <img
                            src={ohioState}
                            width="50"
                            alt="Ohio State Universiyt"
                            className="rounded-full"
                        />
                        <img src={Kenyon} width="50" alt="Kenyon University" />
                        <img
                            src={Denison}
                            width="50"
                            alt="Denison University"
                            className="rounded-full"
                        />
                    </Stack>
                </ContentCard>
            </div>
            <div className="mt-10 block md:hidden">
                <Carousel>
                    <PictureCard
                        picture={cartBg1}
                        header="Donate An Item"
                        subHeader="Help us fight climate change problem. Every item you donate help our fight"
                        carousel
                    />
                    <PictureCard
                        picture={cartBg2}
                        header="Request For an Item"
                        subHeader="Make a request for an item you will need and receive it in less that 24 hours from 
                a colleague in your school"
                        carousel
                    />
                    <PictureCard
                        picture={cartBg3}
                        header="Discover Schools and Students With the Highest Donation and Contribution"
                        carousel
                    />
                </Carousel>
                <Carousel reverse>
                    <ContentCard header="Overall Carbon footprint">
                        <Stack
                            direction="row"
                            gap="30px"
                            justifyContent="space-between"
                        >
                            <div>
                                <Typography
                                    variant="body1"
                                    className="font-[700]">
                                    2,562 Kg
                                </Typography>
                                <Typography variant="subtitle1">
                                    Carbon Footprint
                                </Typography>
                            </div>
                            <div>
                                <Stack direction="row">
                                    <img src={leaf} alt="" />
                                    <Typography
                                        variant="body1"
                                        className="font-[700]">
                                        456
                                    </Typography>
                                </Stack>
                                <Typography variant="subtitle1">
                                    Posints
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="body1"
                                    className="font-[700]">
                                    14
                                </Typography>
                                <Typography variant="subtitle1">
                                    Items Donated
                                </Typography>
                            </div>
                        </Stack>
                        <Stack gap="15px" className="my-4">
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap="7px"
                            >
                                <img src={check} alt="" />
                                <Typography variant="body2">
                                    Earn carbon points for every item you share
                                    or donate an item
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap="7px"
                            >
                                <img src={check} alt="" />
                                <Typography variant="body2">
                                    Earn carbon points for every item you share
                                    or donate an item
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap="7px"
                            >
                                <img src={check} alt="" />
                                <Typography variant="body2">
                                    Earn carbon points for every item you share
                                    or donate an item
                                </Typography>
                            </Stack>
                        </Stack>
                        <CustomButton
                            width="100%"
                            name={
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap="10px"
                                >
                                    <Typography variant="body1">
                                        Get the App
                                    </Typography>
                                    <img src={googleWhite} width="25" alt="" />
                                    <img src={appStore} width="30" alt="" />
                                </Stack>
                            }
                        />
                    </ContentCard>
                    <ContentCard header="Make A Request">
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap="10px"
                            className="mb-2"
                        >
                            <img src={user} alt="" />
                            <div>
                                <Typography variant="body1">Parker</Typography>
                                <Typography variant="subtitle1">
                                    West Side
                                </Typography>
                            </div>
                        </Stack>
                        <Typography variant="subtitle1" className="w-[200px]">
                            I need a/an Econ 102 Text book Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. A aperiam vero ad
                            natus iusto ipsum ipsa, magni esse, cupiditate
                            eligendi molestiae consequatur dolores hic atque sed
                            corporis modi enim quidem! Reiciendis nihil, soluta
                        </Typography>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack direction="row" gap="5px" className="w-min">
                                <div className="rounded-full p-[5px] py-[2px] text-white bg-[#F6F6F633]">
                                    <Typography variant="subtitle1">
                                        Sorry
                                    </Typography>
                                </div>
                                <div className="rounded-full p-[5px] py-[2px] text-white bg-[#FFDD5533]">
                                    <Typography
                                        color="#FFDD55"
                                        variant="subtitle1">
                                        2022
                                    </Typography>
                                </div>
                            </Stack>
                            <img src={telegram} alt="" />
                        </Stack>
                    </ContentCard>
                    <ContentCard header="Featured Colleges">
                        <Stack
                            // direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            gap="15px"
                        >
                            <img
                                src={ohioState}
                                width="70"
                                alt="Ohio State Universiyt"
                                className="rounded-full"
                            />
                            <img
                                src={Kenyon}
                                width="70"
                                alt="Kenyon University"
                            />
                            <img
                                src={Denison}
                                width="70"
                                alt="Denison University"
                                className="rounded-full"
                            />
                        </Stack>
                    </ContentCard>
                </Carousel>
            </div>
        </>
    )
}

function ContentCard({ header, children }) {
    return (
        <div className="bg-black text-white rounded-regular p-[30px]">
            <div className="mb-5">
                <Typography variant="h5" className="whitespace-nowrap">
                    {header}
                </Typography>
                <div className="w-full h-[1px] bg-white" />
            </div>
            {children}
        </div>
    )
}

function PictureCard({ picture, header, subHeader, headerSize, carousel }) {
    return (
        <div
            className={`relative text-white rounded-regular p-[30px] min-h-[200px] font-[700] ${
                carousel ? "w-[400px]" : ""
            }`}
            style={{
                background: `url(${picture}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center 60%",
            }}>
            <div className="absolute top-0 left-0 w-full h-full rounded-regular bg-[#00000050]" />
            <div className="absolute bottom-[30px] left-[30px] w-[calc(100%-60px)]">
                <Typography
                    variant={!headerSize ? "h3" : null}
                    style={{
                        fontSize: headerSize,
                    }}>
                    {header}
                </Typography>
                {subHeader && (
                    <Typography variant="body2">{subHeader}</Typography>
                )}
            </div>
        </div>
    )
}

export default CardsSection
