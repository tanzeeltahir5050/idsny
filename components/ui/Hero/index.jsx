import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-32 text-gray-600 slider">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold mx-auto sm:text-6xl">
          INFECTIOUS DISEASES SOCIETY OF NEW YORK
        </h1>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/get-started"
            className="text-white border hover:bg-gray-50"
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
