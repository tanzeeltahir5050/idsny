import Head from "next/head";

export default function Login() {
    return (
        <>
            <Head>
                <title>Thank You - Idsny</title>
            </Head>
            <div className="flex items-center justify-center h-[65vh]">
                <h1 className="tex-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">THANK YOU</h1>
            </div>
            <div className="grid grid-rows-1 bg-gray-100">
                <div className="flex items-center justify-center">
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">THANK YOU TO OUR SPONSORS</h1>
                </div>
                <div className="text-center">
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        On behalf of the entire organization, We would like to express our heartfelt gratitude for your generous contribution. Your support has made a tremendous impact on our ability to fulfill our mission. Thanks to your selflessness and kindness.
                    </p>
                </div>
            </div>
            <hr />
            <div className="mt-2 grid grid-rows-1 bg-gray-200">
                <div className="flex items-center justify-center">
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">GIVING CIRCLE, BRONE: $5000 AND UP</h1>
                </div>
                <div className="text-center">
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Anonymous - in honor of Dr. Pearl-Ellen Gordon
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Aria Development Group
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Paratek Pharmaceuticals
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Ronald and Mary Skates
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Victrix Investments LLC
                    </p>
                </div>
            </div>
            <hr />
            <div className="mt-2 grid grid-rows-1 bg-gray-100">
                <div className="flex items-center justify-center">
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">GIVING CIRCLE: $2000 - $4999</h1>
                </div>
                <div className="text-center">
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Christopher Ortega
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        IMMY
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Karius, Inc.
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Melinta Therapeutics
                    </p>
                </div>
            </div>
            <hr />
            <div className="mt-2 grid grid-rows-1 bg-gray-200">
                <div className="flex items-center justify-center">
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">GIVING CIRCLE: $1000 - $1999</h1>
                </div>
                <div className="text-center">
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Anonymous
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Avery Hall
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Jason Strauss
                    </p>
                </div>
            </div>
            <hr />
            <div className="mt-2 grid grid-rows-1 bg-gray-100">
                <div className="flex items-center justify-center">
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">GIVING CIRCLE: $100 - $999</h1>
                </div>
                <div className="text-center">
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Trevor Day School - in honor of Dr. Pearl-Ellen Gordon
                    </p>
                    <p className="mt-2 pb-3 px-12 font-semibold font-lg">
                        Jamie Lester
                    </p>
                </div>
            </div>
            <hr />
        </>
    );
}
