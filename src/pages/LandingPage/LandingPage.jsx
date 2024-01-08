import Header from "./sections/Header"
import CardsSection from "./sections/CardsSection"
import StatsSection from "./sections/StatsSection"
import HowItWorksSection from "./sections/HowItWorksSection"
import RecieptAndDonationSection from "./sections/RecieptAndDonationSection"
import EstimatedDonationSection from "./sections/EstimatedDonationSection"
import CarbonTrackingSection from "./sections/CarbonTrackingSection"
import ExploreFootpringSection from "./sections/ExploreFootpringSection"
import PartneringCollegesSection from "./sections/PartneringCollegesSection"
import ExplorePlansSection from "./sections/ExplorePlansSection"
import HonorHerosSection from "./sections/HonorHerosSection"

function LandingPage() {
    return (
        <>
            <Header />
            <CardsSection />
            <StatsSection />
            <HowItWorksSection />
            <RecieptAndDonationSection />
            <EstimatedDonationSection />
            <CarbonTrackingSection />
            <ExploreFootpringSection />
            <PartneringCollegesSection />
            <ExplorePlansSection />
            <HonorHerosSection />
        </>
    )
}

export default LandingPage
