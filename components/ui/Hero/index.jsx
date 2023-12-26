import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-32 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-6xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Welcome to THE
                </h1>
                <h3 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-5xl">
                    Infectious Diseases Society of <br /> New York
                </h3>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Get started
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero