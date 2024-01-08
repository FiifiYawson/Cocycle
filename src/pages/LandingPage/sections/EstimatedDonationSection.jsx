import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

function EstimatedDonationSection() {
    return (
        <div className="mt-[200px] px-screen">
            <div className="rounded-regular bg-grey py-[50px] px-[20px]">
                <Typography variant="h2" className="text-center mb-[60px]">
                    Estimated Donation Values
                </Typography>
                <Stack direction="row" gap="60px" className="overflow-auto">
                    {donations.map((donation, index) => (
                        <TableLayout
                            key={index}
                            name={donation.name}
                            values={donation.values}
                        />
                    ))}
                </Stack>
            </div>
        </div>
    )
}

function TableLayout({ name, values }) {
    return (
        <div className="rounded-regular border-[1px] py-[10px] border-grey-opacity min-w-max w-[300px] ">
            <div className="px-[15px] py-[10px] border-b-[1px] border-grey-opacity">
                <Typography variant="h6">{name}</Typography>
            </div>
            <div className="flex flex-col px-[15px] py-[10px]">
                <div className="flex gap-10 py-[10px] px-[15px] mb-[5px] rounded-full bg-white text-text-grey">
                    <div className="flex-1">
                        <Typography variant="body1" className="font-[700]">
                            {" "}
                            Item{" "}
                        </Typography>
                    </div>
                    <div className="flex-1">
                        <Typography variant="body1" className="font-[700]">
                            {" "}
                            Amount{" "}
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-col gap-5 py-[10px] px-[15px]">
                    {Object.keys(values).map((value, index) => (
                        <div key={index} className="flex gap-10">
                            <div className="flex-1">
                                <Typography variant="body1">{value}</Typography>
                            </div>
                            <div className="flex-1">
                                <Typography
                                    variant="body1"
                                    className="whitespace-nowrap">{`$${values[value][0]} - $${values[value][1]}`}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const ElectronicsDonations = {
    name: "Electronics",
    values: {
        Television: [20, 80],
    },
}

const donations = [
    ElectronicsDonations,
    ElectronicsDonations,
    ElectronicsDonations,
    ElectronicsDonations,
]

export default EstimatedDonationSection
