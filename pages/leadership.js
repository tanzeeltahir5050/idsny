import Head from "next/head";

export default function Leadership() {
    return (
        <>
            <Head>
                <title>leadership - Idsny</title>
            </Head>
            <div className="w-full h-[85vh] bg-gray-100 flex items-center justify-center flex-col">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold p-2">OFFICERS</h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold p-2">COMMITTEES</h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold p-2">COUNCILORS</h1>
            </div>
            <div className="p-10 md:p-32">
                <p className="mb-10 text-lg">
                    The Officers and Councilors of IDSNY are elected by the membership at large. They volunteer their time and energy and serve for a one, two or several year term. We welcome your nominations of IDSNY members to positions as officers or councilors. Contact the secretary for more information.
                </p>
                <p className="mb-10 text-lg">
                    Councilors serve for a period of two years. They advise the officers on policies and support IDSNY activities. They are elected by the membership. To become a councilor, contact the secretary to have your name on the ballot. You may also nominate another member.
                </p>
            </div>
            <div className="grid grid-rows-1 md:grid-cols-2 gap-2 md:gap-6 md:mx-1 lg:mx-32">
                <div className="">
                    <h1 className="text-2xl font-semibold mb-2">President</h1>
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_025af60f9d134344999bae825192eb57~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/C-Coyle_image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Christina Coyle, MD, MS</h1>
                            <p>
                                Professor of Medicine and Pathology
                                Department of Medicine (Infectious Diseases) <br />
                                Albert Einstein College of Medicine
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h1 className="text-2xl font-semibold mb-2">Past President</h1>
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_adc08eb4e2204cdc824b5b0d941fda34~mv2.png/v1/crop/x_0,y_13,w_800,h_800/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rachel%20Gordon.png"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Rachel J. Gordon, MD, MPH</h1>
                            <p>
                                Associate Professor of Medicine and Epidemiology <br />
                                Associate Vice Chair for Education, Department of Medicine <br />
                                Columbia University Medical Center
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:mt-10">
                    <h1 className="text-2xl font-semibold mb-2">President Elect</h1>
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_44a1032faa8e431ea9f399b8aa9da565~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AnneCatrinUhlemann.png"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Anne-Catrin Uhlemann, MD, PhD</h1>
                            <p>
                                Associate Professor of Medicine and Epidemiology
                                Associate Vice Chair for Education, Department of Medicine
                                Columbia University Medical Center
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:mt-10">
                    <h1 className="text-2xl font-semibold mb-2">Vice President</h1>
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_e2465cd592e6448480703b291bdcbe3c~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Gopi_Patel_image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Gopi Patel MD, MS, FIDSA</h1>
                            <p>
                                Professor, Division of Infectious Diseases <br />
                                Department of Medicine, Icahn School of Medicine at Mount Sinai
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:mt-10">
                    <h1 className="text-2xl font-semibold mb-2">Secretary</h1>
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_8af6a15c97154dcda28f39526388dc13~mv2.jpg/v1/crop/x_92,y_0,w_510,h_510/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/220718-Elizabeth_Robilotti-09_crop.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Elizabeth V. Robilotti, MD, MPH</h1>
                            <p>
                                Division of Infectious Disease Assistant Attending Physician, Hospital for Special Surgery Assistant Professor of Medicine, Weill Cornell Medical College
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:mt-10">
                    <h1 className="text-2xl font-semibold mb-2">Treasurer</h1>
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_45ace87e2d7349578c2caf8b46f091ef~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b9039a_45ace87e2d7349578c2caf8b46f091ef~mv2.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Anna Kaltsas, MD</h1>
                            <p>
                                Fellowship Director, Infectious Diseases Associate Professor of Medicine Memorial Sloan Kettering Cancer Center
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold py-4 lg:px-[8rem] mt-5 mb-1">Second Year Councilors</h1>
                <div className="grid grid-rows-1 md:grid-cols-2 gap-2 md:gap-6 md:mx-1 lg:mx-32">
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_7db4e82f0ed546e5aa4022a6c676ed83~mv2.jpg/v1/crop/x_0,y_0,w_420,h_419/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Aldrich_Margaret_MD_photo.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Margaret L. Aldrich, MD</h1>
                            <p>
                                Assistant Professor of Medicine Pediatric Infectious Diseases Director, Pediatric Infection Control Children's Hospital Montefiore
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_8cd2e00bcf8644fab1b2aef7426eab89~mv2.jpeg/v1/crop/x_744,y_0,w_2976,h_2976/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sarah%20Headshot.jpeg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Sarah Schaefer, MD</h1>
                            <p>
                                Associate Hospital Epidemiologist Associate Professor Division of Infectious Disease Mount Sinai Hospital
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_f62256e887d64da0bee039780d658a13~mv2.jpg/v1/crop/x_0,y_0,w_90,h_90/fill/w_126,h_126,al_c,lg_1,q_80,enc_auto/Stephanie_Sterling.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Stephanie Sterling, MD, MPH</h1>
                            <p>
                                Section Chief, Infectious Disease Co-Leader, Brooklyn Hospital Vaccine Research Clinic of the NYU Langone Vaccine Center Assistant Clinical Professor, Infectious Diseases NYU Langone Hospital - Brooklyn
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_193e918833ce47f1bfe61286855b954c~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pic-111.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Sarah Taimur, MD</h1>
                            <p>
                                Associate Professor of Medicine Division of Infectious Diseases Icahn School of Medicine Mount Sinai
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold py-4 lg:px-[8rem] mt-5 mb-1">1st Year Councilors</h1>
                <div className="grid grid-rows-1 md:grid-cols-2 gap-2 md:gap-6 md:mx-1 lg:mx-32">
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_9a0ca82d9f1a4ba0a8a979a123665734~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Benjamin_Miko_image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Benjamin Miko MD, MSc</h1>
                            <p>
                                Assistant Professor of Medicine Program Director, Infectious Diseases Fellowship Columbia University Medical Center
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_32cc419afac2447dad6bb2b603e8061a~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Henry_Donaghy_image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Henry Donaghy MD</h1>
                            <p>
                                Assistant Professor of Medicine Zucker School of Medicine at Hofstra/ Northwell
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_4bfcd828ef0b4335b4203fc3003f911c~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Justin_Laracy_image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Justin Laracy MD</h1>
                            <p>
                                Assistant Attending Associate Hospital Epidemiologist Memorial Sloan Kettering Cancer Center
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_4b7374fcaa334448a1cd3de2e84f33d6~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Tessa_Gomez_image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Tessa Gomez MD</h1>
                            <p>
                                Associate Professor Icahn School of Medicine at Mount Sinai.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold py-4 lg:px-[8rem] mt-5 mb-1">Advisory Committee</h1>
                <div className="grid grid-rows-1 md:grid-cols-2 gap-2 md:gap-6 md:mx-1 lg:mx-32">
                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_7e22432d22684080a566c96c52aacf8e~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b9039a_7e22432d22684080a566c96c52aacf8e~mv2.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Marcia Epstein, MD</h1>
                            <p>
                                Chief of Infectious Diseases Professor of Medicine Hofstra Northwell School of Medicine
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_9fe64da415b54813a8fea65eaeaef891~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jacqueline-Achkar_image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Jacqueline M. Achkar, MD, MSc, FIDSA</h1>
                            <p>
                                Co-Director, Global Health Center Associate Director of Translational Research Training Clinical Research Training Program Professor of Medicine, and Microbiology & Immunology Albert Einstein College of Medicine
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/b9039a_597351c930514abfb6986c030ac6d581~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image002_edited_edited.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Adam J. Ratner, MD, MPH</h1>
                            <p>
                                Professor of Pediatrics and Microbiology Vice Chair for Academic Affairs, Department of Pediatrics Director, Division of Pediatric Infectious Diseases New York University Grossman School of Medicine
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_48ed022f3cb54cbbac9b91bde1fb0aee~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Josh-Nosanchuk-image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Josh Nosanchuk, MD, FIDSA</h1>
                            <p>
                                Senior Associate Dean for Medical Education Professor of Medicine, and Microbiology & Immunology Albert Einstein College of Medicine
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_9be37091bf8d4a358f326f7b5d99846e~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Bettina-fries-image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Bettina Fries, MD, FIDSA, FACP</h1>
                            <p>
                                Professor of Medicine, Microbiology and Immunology Chief, Division of Infectious Diseases Renaissance School of Medicine at Stony Brook University
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_3fab5017681c447ba101aaefe38e9658~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Natalie-New-image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Natalie Neu, MD, MPH</h1>
                            <p>
                                Fellowship Director, Pediatric Infectious Diseases Associate Professor of Pediatrics Columbia University Medical Center
                            </p>
                        </div>
                    </div>

                    <div className="md:w-96 lg:w-[28rem] flex flex-col md:flex-row gap-1">
                        <img
                            src="https://static.wixstatic.com/media/09c01d_f81316179507496d9ed73d043b32fe01~mv2.jpg/v1/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Tobias-Hohl-image.jpg"
                            className="w-80 h-full md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />
                        <div className="p-1 md:p-0">
                            <h1 className="text-lg mb-2">Tobias M. Hohl, MD, PhD</h1>
                            <p>
                                Chief, Infectious Diseases Service Member, Dept of Medicine Memorial Sloan Kettering Cancer Center
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
