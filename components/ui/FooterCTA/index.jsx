import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-4xl font-semibold sm:text-4xl">
                    Next Event
                </h2>
                <p className="mt-3 text-gray-600">
                    IDSNY Intercity Rounds <br />
                    January 24th, 2024
                    5:30 - 7:00 PM
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Register Here
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA