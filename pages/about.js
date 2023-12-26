import Head from "next/head";

export default function GetStarted() {
    return (
        <>
            <Head>
                <title>About - Idsny</title>
            </Head>
            <div className="w-full">
                <h1 className="flex text-center items-center justify-center font-extrabold text-4xl md:text-6xl h-96 text-gray-800">Networking the ID Community Of Metropolitan New York</h1>
            </div>
            <div className="grid grid-rows-1 md:grid-cols-2 bg-gray-100">
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">What Do We Do?</h1>
                </div>
                <div className="text-start">
                    <p className="pt-12 pb-3 px-12">
                        Each year, we hold an annual symposium, named to commemorate one of IDSNY's founders, Harold C Neu MD. A scientific session is held in the afternoon for all attendees.  There are several speakers, a trainee poster session, and presentations from the Junior Faculty Research Award winner and the Trainee Basic and Clinical/Translational Research Award winners.  Several times a year,  IDSNY organizes online  Intercity Infectious Disease Rounds and  holds meetings on special topics of interest.
                    </p>
                    <p className="pb-12 px-12">
                        As an organization, we can respond to public health crises with more capability and authority than as individuals. We are a resource of information on infectious diseases for local officials; we are able to serve as a conduit between the NYC Department of Health and ID specialists.
                    </p>
                </div>
            </div>
            <hr />
            <div className="grid grid-rows-1 md:grid-cols-2 bg-gray-200">
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">Our Plans</h1>
                </div>
                <div className="text-start">
                    <p className="p-12">
                        Our plans include sponsoring a research fellowship; organizing a mentorship program; and, issuing position statements on current ID topics, such as bio-terrorism and emerging diseases.
                    </p>
                </div>
            </div>
            <hr />
            <div className="grid grid-rows-1 md:grid-cols-2 bg-gray-100">
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">History</h1>
                </div>
                <div className="text-start">
                    <p className="pt-12 pb-3 px-12">
                        In 1992, a group of physicians decided that the metropolitan New York infectious diseases community needed a local chapter of the Infectious Diseases Society of America. The founders knew each other from Intercity Rounds, as well as by reputation. They believed the metropolitan NY ID community could have a strong voice in shaping public health policy if it were formally organized. They hoped, also, to strengthen the community of ID specialists, and to encourage ID education and research.
                    </p>
                    <p className="pb-3 px-12">
                        In the spring of 1993, IDSNY held its first meeting. Harold C Neu MD was elected President; Donald Armstrong MD President-Elect; Michael L Tapper MD Vice President; and Arthur E Brown MD Secretary/Treasurer. The organization was originally the New York Society of Infectious Diseases; in 2003, the name was modified to make it closer to IDSA and to use the initials as a web address. Harold Neu was ill at the time he assumed the presidency; part of his legacy to the ID community was his founding of IDSNY. He died in 1998. To commemorate Dr Neu's contributions to medicine, infectious diseases, Columbia-Presbyterian Medical Center, and to IDSNY, the annual scientific sessions of IDSNY became the Harold C Neu Symposium.
                    </p>
                    <p className="pb-12 px-12">
                        One of the most critical reasons behind the founding of IDSNY was to create an organization which could react to threats to public health. The World Trade Center attack, bio-terrorism and emerging diseases such as SARS, West Nile, and COVID-19, proved the vision of the founders, and the relevance of IDSNY. For further history of IDSNY leadership, click here.
                    </p>
                </div>
            </div>
        </>
    );
}
