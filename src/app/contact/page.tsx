export default function Contact () {
    return (
        <>
            {/* intro */}
            <section id="intro" className="relative">
                <div className="relative">
                    <img className="object-cover w-full h-[690px] md:h-[600px] inset-0" src="/contact/contact_intro.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
                </div>

                <div className=" pl-0 lg:pl-40 space-y-3 flex flex-col absolute inset-0 justify-center items-center lg:items-start py-136 lg:py-0">
                    <h1 className="text-3xl lg:text-[60px] lg:w-2/3 font-['DM_Serif_Display',serif]">
                        Contact Us
                    </h1>
                    <p className="px-10 lg:px-0 text-gray-500 text-[14px] lg:text-[20px] lg:w-1/2 sm:text-base lg:text-xl leading-[150%] text-center md:text-left lg:text-left align-middle font-['SF_Pro_Display']">
                        We&apos; love to hear from you. 
                        Get in touch with our team to learn more about PATRONIK or get support for your fashion design journey.
                    </p>
                </div>
        
            </section>

            {/* contact */}
            <section id="contact" className="grid grid-cols-2 px-8 py-32 gap-12">

                {/* 1 */}
                <div className="w-full rounded-[24px] space-y-8 p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="font-dm-serif text-[24px] lg:text-4xl sm:text-3xl">Send us a Message</h3>
                        <form  className="rounded-[24px] space-y-6" action="">

                            <div className="w-full">
                                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2 font-sf-pro">Full Name</label>
                                <input className="w-full py-2 px-4 border border-gray-200 rounded-lg" type="text" placeholder="Enter your full name" />
                            </div>

                            <div className="w-full">
                                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2 font-sf-pro">Email Address</label>
                                <input className="w-full py-2 px-4 border border-gray-200 rounded-lg" type="text" placeholder="Enter your email address" />
                            </div>

                            <div className="w-full">
                                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2 font-sf-pro">Subject</label>
                                <input className="w-full py-2 px-4 border border-gray-200 rounded-lg" type="text" placeholder="Select a subject" />
                            </div>

                            <div className="w-full">
                                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2 font-sf-pro">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Tell us how we can help you..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sf-pro resize-none placeholder:font-sf-pro placeholder:text-[16px]"
                                    defaultValue={""}
                                />
                            </div>

                            

                            <button className="bg-black text-white flex items-center justify-center rounded-[10px] w-full py-3 gap-2" type="submit">
                                <img src="https://frontend-rho-nine-42.vercel.app/icons/Contact/Send.svg" alt="" />
                                Send
                            </button>

                            

                        </form>

                </div>

                {/* 2 */}
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col rounded-[24px] space-y-8 p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">

                    </div>
                </div>

            </section>

        </>
    )
}