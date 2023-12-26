import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Who Are We?" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Who Are We?
                        </h2>
                        <p className="mt-3 text-gray-600">
                            IDSNY brings together the community of infectious diseases specialists of the metropolitan NY area. Our membership is comprised of physicians, researchers and others with a strong interest in ID. IDSNY is an independent society, founded in 1993 and recognized as a regional arm of the Infectious Diseases Society of America.
                        </p>
                        <NavLink
                            href="/about"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Read more about what we do
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA