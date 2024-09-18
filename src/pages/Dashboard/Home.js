import React, { useState } from 'react';
import Button from '../../components/Button';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? "w-full border-1 border-dark rounded-lg bg-white mb-4" : "w-full border-1 border-dark rounded-lg bg-custom-gradient mb-4"} >
            <button
                className="w-full text-left px-4 py-4 flex justify-between items-center focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className={isOpen ? "text-base font-normal text-black" : "text-base font-normal text-white"}>{title}</span>
                {isOpen ? <img src='/assets/images/minus.svg' alt='icon' /> : <img src='/assets/images/plus.svg' alt='icon' />}

            </button>
            {isOpen && (
                <div className="px-4 py-4">
                    <p className="text-gray-600">{content}</p>
                </div>
            )}
        </div>
    );
};

const Home = () => (
    <div className="bg-white w-full">
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 pt-10 pb-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="place-self-center lg:col-span-7">
                    <Button
                        className='text-primary-light'
                        label="Crypto Monitoring"
                        icon="/assets/images/marketeq_signal-2.png"
                        iconPosition="right"
                        iconPadding="0 0 0 8px"
                        padding="8px 24px"
                        display="flex"
                        align="center"
                        bgColor="white"
                        border="0.5px solid #D1D1D1CC"
                        borderRadius="30px"
                    />
                    <div className="pt-4 text-2xl md:text-3xl">
                        <span className="block font-extrabold text-3xl md:text-4xl leading-extra-tight">Comprehensive Compliance Solutions</span>
                        <span className="block font-semibold text-3xl md:text-4xl leading-extra-tight">for Crypto Business. Wallet safe better</span>
                        <span className="block font-semibold text-3xl md:text-4xl leading-extra-tight">with AMLGRID</span>
                        <span className='text-xl text-secondary'>Effective tools, customer-focused AML compliance framework, FATF requirements under one roof.</span>
                    </div>
                    <div className='py-6'></div>
                    <div>
                        <span className='text-xl text-secondary-dark'>
                            Don’t cut corners on check, invest in your financial security.
                        </span>
                    </div>
                    <div className='rounded-full border-1 border-secondary-light w-9/12 flex items-center justify-between px-2 py-1'>
                        <span>3rans_23BC545jko1pcashroute</span>
                        <img className='w-6 pl-2' src='/assets/images/icon-2.png' alt='icon' />
                        <div className='border-1 border-secondary-light w-24 border-dashed'></div>
                        <Button className='border-full bg-primary text-white px-4 py-4 rounded-full' label="Get started here"></Button>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <div className='px-4 py-5 bg-black rounded-full h-20 w-80 mt-16 absolute bg-primary-dark flex items-center transform -translate-x-1/2 translate-y-full rotate-90'>
                        <div className='bg-white rounded-full px-4 py-2 w-44 flex'>
                            <img className='w-8 pr-2' src='/assets/images/icon-1.png' alt='icon' />
                            <span>Danger</span>
                        </div>
                        <div className='w-6 border-white border-dashed border-1'></div>
                        <img className='w-4 h-4 transform -rotate-90' src='/assets/images/lock-key.png' alt='icon' />
                        <div className='w-6 border-white border-dashed border-1'></div>
                        <div className='bg-white rounded-full px-4 py-2 w-44 flex'>
                            <img className='w-8 pr-2' src='/assets/images/icon-2.png' alt='icon' />
                            <span>Trusted</span>
                        </div>
                    </div>
                    <img src='/assets/images/dashboard-1.png' alt='dashboard-1' />
                </div>
            </div>
        </section>
        <section>
            <div className="bg-back grid max-w-screen-xl px-4 pt-4 pb-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className='lg:col-span-12 items-center flex justify-center pb-8'>
                    <span className='text-primary-dark text-3xl text-black font-semibold'>AMLGRID in 3 actions</span>
                </div>
                <div className='lg:col-span-4 items-center flex flex-col justify-center'>
                    <div className='w-16 h-16 rounded-full bg-back-dark flex justify-center items-center'>
                        <img src='/assets/images/icon-3.png' alt='icon' />
                    </div><br />
                    <span className='font-semibold'>Wallet</span><br />
                    <span className='text-center text-secondary-dark'>Simply paste the wallet address <br />to initiate the AML check.</span>
                </div>
                <div className='lg:col-span-4 items-center flex flex-col justify-center'>
                    <div className='w-16 h-16 rounded-full bg-back-dark flex justify-center items-center'>
                        <img src='/assets/images/icon-4.png' alt='icon' />
                    </div><br />
                    <span className='font-semibold'>Screening</span><br />
                    <span className='text-center text-secondary-dark'> Our system screens the wallet for<br /> risk factors and suspicious activity.</span>
                </div>
                <div className='lg:col-span-4 items-center flex flex-col justify-center'>
                    <div className='w-16 h-16 rounded-full bg-back-dark flex justify-center items-center'>
                        <img src='/assets/images/icon-5.png' alt='icon' />
                    </div><br />
                    <span className='font-semibold'>Result</span><br />
                    <span className='text-center text-secondary-dark'>Get a clear and concise report<br /> on the wallet's AML status.</span>
                </div>
                {/* <div className='lg:col-span-12 items-center flex justify-center mt-8 bg-white rounded-2xl border-1 border-secondary-light grid lg:grid-cols-12'>
                    <div className='lg:col-span-4 p-4 items-center flex justify-center border-b-1 border-r-1 border-secondary-light'>
                        <img className='pr-6' src="/assets/images/secured-network.svg" alt='icon'/>
                        <span className='text-primary font-medium text-3xl'>Secure</span>
                    </div>
                    <div className='lg:col-span-4 p-4 items-center flex justify-center border-b-1 border-r-1 border-secondary-light'>
                        <img className='pr-6' src="/assets/images/agreement.svg" alt='icon'/>
                        <span className='text-primary font-medium text-3xl'>Trusted</span>
                    </div>
                    <div className='lg:col-span-4 p-4 items-center flex justify-center border-b-1 border-secondary-light'>
                        <img className='pr-6' src="/assets/images/idea.svg" alt='icon'/>
                        <span className='text-primary font-medium text-3xl'>Transparent</span>
                    </div>
                    <div className='lg:col-span-12 pt-8 items-center flex flex-col justify-center'>
                        <span className='font-semibold'>Worrying about your asset?</span>
                        <span className='text-center pt-4 text-secondary-dark'>Stealing or losing your asset to scam  can be worrisome and frustrating.  when dealing with<br/> numerous unverified sources. , there’s a lot to consider</span>
                    </div>
                    <div className='lg:col-span-12 pt-8 items-center flex justify-center'>
                        <Button className='w-56 h-10 bg-back border-1 border-back-dark' borderRadius="10px 5px 5px 5px"/>
                        <Button className='w-56 h-10 bg-white border-1 border-secondary-light ml-5 text-secondary-dark' borderRadius="5px" label="Scam"/>
                        <img className='-mr-10 transform -translate-x-5 translate-y-5' src='/assets/images/gesture.svg' alt='icon'/>
                        <Button className='w-56 h-10 bg-white border-1 border-secondary-light ml-5 text-secondary-dark' borderRadius="5px 10px 5px 5px" label="Losses"/>
                    </div><br/>
                    <div className='lg:col-span-12 pt-8 items-center flex justify-center'>
                        <img className='-ml-8 transform translate-x-4 translate-y-6' src='/assets/images/arrow.svg' alt='icon'/>
                        <Button className='w-64 h-10 bg-white border-1 border-secondary-light text-secondary-dark' borderRadius="5px 5px 10px 5px" label="illicit activities"/>
                        <Button className='w-64 h-10 bg-white border-1 border-secondary-light ml-5 text-secondary-dark' borderRadius="5px 10px 5px 5px" label="Reputational damage"/>
                        <Button className='w-64 h-10 bg-back border-1 border-back-dark ml-5' borderRadius="10px 5px 5px 5px"/>
                    </div><br/>
                    <div className='lg:col-span-12 pt-8 items-center flex justify-center'>
                        <Button className='w-48 h-10 bg-white border-1 border-secondary-light text-secondary-dark' borderRadius="5px 5px 10px 5px" label="illicit activities"/>
                        <Button className='w-48 h-10 bg-back border-1 border-back-dark ml-5' borderRadius="10px 5px 5px 5px"/>
                        <Button className='w-48 h-10 bg-white border-1 border-secondary-light ml-5 text-secondary-dark' borderRadius="5px 10px 5px 5px" label="Reputational damage"/>
                    </div>
                    <div className='lg:col-span-12 pt-8 items-center flex justify-center pt-20'>
                        <div className='text-secondary'>
                            <span className='font-semibold text-3xl text-black'>Let AMLGRID handle the task!!</span><br/>
                            <span>AMLGRID automates AML screening, scanning wallet<br/> addresses to fish out </span>
                            <span className='text-primary'>high-risk or low-risk indicators, </span><br/>
                            <span>detecting potential threats, and assigning risk scores to<br/> help you identify and mitigate potential  risks</span>
                        </div>
                        <img className='z-0 ml-20 -mt-12 absolute' src='/assets/images/image.png' alt='icon'/>
                        <img className='z-10 ml-12' src='/assets/images/image 7.png' alt='icon'/>
                    </div>
                </div> */}
                <div className='lg:col-span-12 items-center flex flex-col justify-center'>
                    <img className='pt-16' src='/assets/images/image 2.png' alt='icon' />
                </div>
            </div>
        </section>
        <section>
            <div className="grid max-w-screen-xl px-8 pt-4 pb-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-primary-heavy">
                <div className='lg:col-span-6 items-center flex justify-center'>
                    <img src='/assets/images/image 3.png' alt='icon' />
                </div>
                <div className='lg:col-span-6 items-center flex justify-end flex-col'>
                    <div className='w-full flex justify-start pl-8'>
                        <span className='text-white text-3xl font-semibold'>AMLGRID delivers rapid results with<br /> ready-to-use methodology at its<br /> core.</span>
                    </div>
                    <br />
                    <div className='w-full flex justify-start pl-8'>
                        <span className='text-secondary-light'>You not only enjoy the our advance tools but a legally certified <br />methodology for crypto compliance and a step-by-step guide – all <br />translated into a digitized workflow functioning like a rainbow.</span><br />
                    </div>
                    <br />
                    <div className='w-full flex justify-start pl-8'>
                        <Button className="text-white text-2xl font-semibold bg-primary py-4 px-16 rounded-lg border-2 border-dashed border-primary-dark" label="Start here"></Button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="grid max-w-screen-xl px-8 pt-4 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white">
                <div className='lg:col-span-12 items-center flex flex-col justify-center'>
                    <span className='font-semibold text-3xl pb-12'>
                        Crypto compliance doesn't have to be overwhelming. Let’s tackle it together
                    </span>
                    <img src='/assets/images/image 4.png' alt='icon' />
                </div>
            </div>
        </section>
        <section>
            <div className="grid max-w-screen-xl px-8 pt-4 pb-16 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12 bg-primary-heavy">
                <div className='lg:col-span-6 items-center flex flex-col justify-center'>
                    <Button className='bg-primary-light2 text-primary flex justify-center py-1 px-2 rounded-md border-1 border-primary' label="FAQS" icon="/assets/images/Group.svg" iconPosition="left" iconPadding="4px 4px 0px 0px"></Button>
                    <span className='text-4xl font-semibold text-white pt-8'>Frequently Asked Questions</span>
                    <span className='text-base text-secondary pt-4 flex flex-col justify-center'>
                        <center>Find questions and answers related to Anti-laudering and crypto<br /> compliances,
                        </center>
                    </span>
                </div>
                <div className='lg:col-span-6 items-center flex flex-col justify-center'>
                </div>
                <div className='lg:col-span-6 items-center flex flex-col justify-center w-full pt-12'>
                    <AccordionItem
                        title="What’s the AML check for crypto?"
                        content="To prevent criminal activity, cryptocurrency exchanges must implement Anti-Money Laundering (AML) checks, which are critical regulations that prevent the illicit conversion of cryptocurrency into fiat currency"
                    />
                    <AccordionItem
                        title="How much does it cost per check?"
                        content="AML Check costs just $0.30 per transaction, making it an affordable and cost-effective solution for businesses of all sizes"
                    />
                    <AccordionItem
                        title="Why is AML  compliance important in crypto?"
                        content="AML compliance is crucial in crypto to prevent illegal activities, protect users, and maintain the integrity of the financial system."
                    />
                    <AccordionItem
                        title="What are the benefits of using AML compliance solution?"
                        content="Benefits include reduced risk, improved security, enhanced reputation, and increased trust with customers and regulators."
                    />
                    <AccordionItem
                        title="How do you ensure data privacy and security?"
                        content="We implement robust data encryption, secure data storage, and access controls to protect sensitive information."
                    />
                    <AccordionItem
                        title="How do your AML compliance solution works?"
                        content=" Our solutions use advanced technology and machine learning algorithms to detect and prevent suspicious activity, identify high-risk transactions, and provide real-time monitoring and reporting."
                    />
                </div>
                <div className='lg:col-span-6 items-center flex flex-col justify-start w-full pt-12 pl-8'>
                    <img src='/assets/images/image 5.png' alt='icon' />
                </div>
            </div>
        </section>
        <section>
            <div className="grid max-w-screen-xl px-8 pt-4 pb-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white">
                <div className='lg:col-span-12 -mt-32 flex flex-col items-start border-1 border-secondary bg-white rounded-md pl-8 grid lg:grid-cols-12'>
                    <div className="lg:col-span-6 flex flex-col justify-center items-start h-full">
                        <span className="text-3xl font-semibold text-black pb-8">
                            It only takes $0.30 per check
                        </span>
                        <span className="text-xl font-semibold text-secondary-dark pb-8">
                            A small price of $0.30 can save you from a huge financial setback
                        </span>
                        <Button className="text-white w-56 text-xl bg-primary px-16 py-2 rounded-md border-1 border-white border-dashed" label="Sign Up" />
                    </div>
                    <div className='lg:col-span-6 flex flex-col items-end'>
                        <img src='/assets/images/image 11.png' alt='icon' />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="grid max-w-screen-xl px-8 pb-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12 bg-primary-heavy">
                <div className='lg:col-span-3 flex flex-col justify-start'>
                    <span className='text-white text-base'>COMPANY</span>
                    <div className='pt-8 flex flex-col'>
                        <span className='text-primary-light2 text-sm pb-4'>About</span>
                        <span className='text-primary-light2 text-sm pb-4'>Security</span>
                        <span className='text-primary-light2 text-sm pb-4'>Blog</span>
                        <span className='text-primary-light2 text-sm pb-4'>Partnerships</span>
                        <span className='text-primary-light2 text-sm pb-4'>Mission roadmap</span>
                    </div>
                </div>
                <div className='lg:col-span-3 flex flex-col justify-start'>
                    <span className='text-white text-base'>PRODUCTS</span>
                    <div className='pt-8 flex flex-col'>
                        <span className='text-primary-light2 text-sm pb-4'>InstantXchange</span>
                        <span className='text-primary-light2 text-sm pb-4'>JostPay</span>
                        <span className='text-primary-light2 text-sm pb-4'>AMLGrid</span>
                    </div>
                </div>
                <div className='lg:col-span-3 flex flex-col justify-start'>
                    <span className='text-white text-base'>SOLUTIONS</span>
                    <div className='pt-8 flex flex-col'>
                        <span className='text-primary-light2 text-sm pb-4'>Fraud detection</span>
                        <span className='text-primary-light2 text-sm pb-4'>Compliance management</span>
                        <span className='text-primary-light2 text-sm pb-4'>KYC verification</span>
                        <span className='text-primary-light2 text-sm pb-4'>Risk assessment</span>
                        <span className='text-primary-light2 text-sm pb-4'>Wallet screening</span>
                    </div>
                </div>
                <div className='lg:col-span-3 flex flex-col justify-start items-end'>
                    <span className='text-white text-base flex'>
                        <img src='/assets/images/twitter.svg' alt='icon' />
                        <img className='pl-4' src='/assets/images/linkedin.svg' alt='icon' />
                        <img className='pl-4' src='/assets/images/instagram.svg' alt='icon' />
                    </span>
                    <div className='pt-8 flex flex-col items-end'>
                        <span className='text-primary-light2 text-sm pb-4'>Privacy Policy</span>
                        <span className='text-primary-light2 text-sm pb-4'>Cookie Policy</span>
                        <span className='text-primary-light2 text-sm pb-4'>Security</span>
                        <span className='text-primary-light2 text-sm pb-4'>Terms of Service</span>
                        <span className='text-primary-light2 text-sm pb-4'>Referral Program</span>
                        <span className='text-primary-light2 text-sm pb-4'>Sitemap</span>
                    </div>
                </div>
                <div className='lg:col-span-12 flex flex-col justify-start items-start pt-32'>
                    <span className='text-secondary-light2' style={{fontSize: "0.97rem"}}>
                        Financial crime is a growing concern for businesses of all sizes, and the consequences of non-compliance can be severe. That's why we created AML Check - to help <br/>
                        businesses like yours prevent financial crime and ensure compliance with regulatory requirements. Our solution provides a comprehensive suite of tools and features, <br/>
                        including real-time screening, advanced risk scoring, and customizable reporting, so you can identify and mitigate potential threats quickly and effectively. With AML <br/>
                        Check, you can confidence in your business's financial security and focus on growing your business with peace of mind
                    </span>
                </div>
            </div>
        </section>
    </div>
);

export default Home;