import Head from "next/head";

export default function Login() {
    const servicesItems = [
        "Mobile development",
        "UI/UX Design",
        "web development",
        "SEO",
    ];

    return (
        <>
            <Head>
                <title>Positions - Idsny</title>
            </Head>
            <div className="flex items-center justify-center h-[65vh]">
                <h1 className="tex-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">POSITIONS</h1>
            </div>
            <div className="flex items-center justify-center flex-col h-[65vh]">
                <img
                    src="https://static.wixstatic.com/media/b9039a_abb795d7007a4a7c8259f2bd99d48ef0~mv2.png/v1/fill/w_149,h_169,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IDSNY_logo.png"
                />
                <h3 className="mt-3 text-gray-800 text-base md:text-2xl lg:4xl font-bold">THERE ARE NO POSITIONS AT THIS TIME</h3>
                <h5 className="text-gray-800 text-base md:text-1xl lg:2xl font-bold">CONTACT US IF YOU WOULD LIKE TO POST A POSITION.</h5>
            </div>
        </>
    );
}
