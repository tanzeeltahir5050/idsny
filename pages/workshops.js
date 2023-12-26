import Head from "next/head";


export default function Login() {
    return (
        <>
            <Head>
                <title>IDSNY Intercity Rounds - Idsny</title>
            </Head>
            <div className="flex items-center justify-center h-[85vh]">
                <h1 className="tex-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">IDSNY INTERCITY ROUNDS</h1>
            </div>
            <hr />
            <div className="flex items-center justify-center flex-col h-[55vh] bg-gray-200">
                <h2 className="text-3xl text-gray-800 font-bold">WEDNESDAY</h2>
                <h1 className="text-5xl text-gray-800 font-bold">JANUARY</h1>
                <h1 className="text-4xl text-gray-800 font-bold">24th</h1>
                <h5 className="text-gray-800 font-semibold">5:30 am – 7:00 pm</h5>
                <h5 className="text-gray-800 font-semibold">Via Zoom</h5>
            </div>
            <div className="grid grid-rows-1 md:grid-cols-2 bg-gray-100">
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">REGISTER</h1>
                </div>
                <div className="text-start">
                    <p className="pt-12 pb-3 px-12">
                        To register for this event, please complete the form and then follow the remaining steps
                    </p>
                    <p className="pt-2 pb-3 px-12">
                        <button className="text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">HERE</button>
                    </p>
                </div>
            </div>
            <hr />
            <div className="grid grid-rows-1 md:grid-cols-2 bg-gray-200">
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">PRESENTERS</h1>
                </div>
                <div className="text-start">
                    <p className="p-12">
                        <h3 className="font-semibold text-lg">Samiksha Tarun, MD, MS</h3>
                        <p>Columbia-NYP, Pediatrics ID Program</p>
                        <h3 className="font-semibold text-lg">Lee Gottesdiener, MD</h3>
                        <p>Cornell-NYP, Adult ID Program</p>
                        <h3 className="font-semibold text-lg">Connie Zhao, MD</h3>
                        <p>Mount Sinai Medical Center, Adult ID Program</p>
                        <h3 className="font-semibold text-lg">Alexander Stabell, MD</h3>
                        <p>Cornell-NYP, Adult ID Program</p>
                        <h3 className="font-semibold text-lg">Frank Santana Marti, MD</h3>
                        <p>Montefiore Medical Center, Adult ID Program</p>
                    </p>
                </div>
            </div>
            <hr />
            <div className="grid grid-rows-1 md:grid-cols-2 bg-gray-100">
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">FACULTY DISCUSSANTS</h1>
                </div>
                <div className="text-start">
                    <p className="pt-12 pb-3 px-12">
                        <h3 className="font-semibold text-lg">Justin Laracy, MD</h3>
                        <p>Memorial Sloan Kettering Cancer Center</p>
                        <h3 className="font-semibold text-lg">Johanna Daily, MD, MS</h3>
                        <p>Montefiore Medical Center</p>
                    </p>
                </div>
            </div>
            <hr />
            <div className="grid grid-rows-1 md:grid-cols-2 bg-gray-200">
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">MODERATED BY</h1>
                </div>
                <div className="text-start">
                    <p className="pt-12 pb-3 px-12">
                        <h3 className="font-semibold text-lg">Christina Coyle, MD, MS</h3>
                        <p>Professor of Medicine, Department of Medicine, Albert Einstein College of Medicine</p>
                        <h3 className="font-semibold text-lg">Elizabeth Robilotti, MD, MPH</h3>
                        <p>Assistant Attending Physician, Hospital for Special  Surgery Assistant Professor of Medicine, Weill Cornell Medical College</p>
                    </p>
                </div>
            </div>
            <hr />
        </>
    );
}
