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
            <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 px-8 py-32 gap-12">

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
                <div className="flex flex-col gap-8 flex-1">
                    {/* 2.1 */}
                    <div className="flex flex-col rounded-[24px] space-y-8 p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="lg:text-4xl text-2xl text-[#1A1A1A] font-dm-serif">Get in Touch</h3>
                        <div className="flex flex-col space-y-4">

                            <div className="flex gap-4">
                                <div>
                                    <img src="https://frontend-rho-nine-42.vercel.app/icons/Contact/Phone.svg" alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold mb-2">Phone</p>
                                    <p className="font-medium text-[16px] text-[#4B5563]">+1 (555) 123-4567</p>
                                    <p className="text-sm text-[#6B7280]">Mon-Fri 9AM-6PM EST</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div>
                                    <img src="https://frontend-rho-nine-42.vercel.app/icons/Contact/Email.svg" alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold mb-2">Email</p>
                                    <p className="font-medium text-[16px] text-[#4B5563]">hello@patronik.com</p>
                                    <p className="text-sm text-[#6B7280]">We’ll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div>
                                    <img src="https://frontend-rho-nine-42.vercel.app/icons/Contact/Address.svg" alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold mb-2">Address</p>
                                    <p className="font-medium text-[16px] text-[#4B5563]">123 Fashion District</p>
                                    <p className="text-sm text-[#6B7280]">New York, NY 10001</p>
                                    <p className="text-sm text-[#6B7280]">United States</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 2.2 */}
                    <div className="flex flex-col rounded-[24px] space-y-8 p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="lg:text-4xl text-2xl text-[#1A1A1A] font-dm-serif">Office Hours</h3>

                        <div className="flex justify-between border-b pb-8 border-b-gray-300">
                            <div className="flex flex-col text-[#4B5563] text-[16px]  font-sf-pro space-y-2">
                                <p>Monday - Friday</p>
                                <p>Saturday</p>
                                <p>Sunday</p>
                            </div>
                            <div className="text-[#1A1A1A] text-[16px] font-semibold font-sf-pro space-y-2 text-right">
                                <p>9:00 AM - 6:00 PM</p>
                                <p>10:00 AM - 4:00 PM</p>
                                <p>Closed</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-[#4B5563]">
                                <span className="text-[#4B5563] text-[14px] font-semibold font-sf-pro">
                                    Emergency Support: </span>
                                <span className="text-[14px] text-[#4B5563] font-sf-pro">
                                    Available 24/7 for critical issues
                                </span>
                            </p>
                        </div>
                    </div>
                    
                    {/* 2.3 */}
                    <div className="flex flex-col rounded-[24px] space-y-8 p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="lg:text-4xl text-2xl text-[#1A1A1A] font-dm-serif">Follow Us</h3>
                        <div className="flex gap-4">
                            <img src="https://frontend-rho-nine-42.vercel.app/icons/Contact/IG.svg" alt="" />
                            <img src="https://frontend-rho-nine-42.vercel.app/icons/Contact/A-142.svg" alt="" />
                            <img src="https://frontend-rho-nine-42.vercel.app/icons/Contact/IN.svg" alt="" />
                            <img src="https://frontend-rho-nine-42.vercel.app/icons/Contact/FB.svg" alt="" />
                        </div>
                        
                    </div>

                </div>

            </section>

            {/* find */}
            <section id="find" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-[128px] px-40 bg-[#FAF9F6] hidden lg:block space-y-8">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="sm:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 font-normal text-[60px] leading-[100%] tracking-[0px] text-center font-dm-serif">
                        Find Our Office
                    </h2>
                    <p className="text-lg font-roboto text-gray-600 max-w-2xl mx-auto font-normal text-[20px] leading-[32.5px] tracking-[-0.16px] text-center align-middle">
                        Visit us at our headquarters in the heart of New York&apos;s Fashion District
                    </p>
                </div>
                <div className="w-full">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.038440147357!2d-73.99733272449045!3d40.7171702713928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27ffdf2905%3A0xde05c3cbe8aae7a1!2sCoco%20Fashion!5e0!3m2!1svi!2s!4v1754552914065!5m2!1svi!2s" 
                        className="w-full rounded-lg h-[384px]"
                        >
                    </iframe>
                </div>
            </section>

            {/* frequently asked questions */}
            <section id="questions" className="px-80 py-40 space-y-20 hidden lg:block">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-dm-serif text-[60px] sm:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 leading-[100%]">Frequently Asked Questions</h3>
                    <p className="font-roboto text-[20px] text-[#4B5563]">Quick answers to common questions about contacting us</p>
                </div>
                <div className="flex flex-col space-y-12">
                    <div className="bg-white rounded-lg p-[33px] hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="text-[20px] text-[#1A1A1A] mb-4 leading-[100%] tracking-[0px] align-middle font-dm-serif">
                            How quickly will you respond to my inquiry?
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed text-[16px] tracking-[0px] font-normal align-middle font-sf-pro">
                            We typically respond to all inquiries within 24 hours during business days. For urgent technical support issues, we aim to respond within 4 hours.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-[33px] hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="text-[20px] text-[#1A1A1A] mb-4 leading-[100%] tracking-[0px] align-middle font-dm-serif">
                            What&apos;s the best way to get technical support?
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed text-[16px] tracking-[0px] font-normal align-middle font-sf-pro">
                            For technical support, please use our contact form and select &quot;Technical Support&quot; as the subject. Include as much detail as possible about your issue, including screenshots if applicable.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-[33px] hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="text-[20px] text-[#1A1A1A] mb-4 leading-[100%] tracking-[0px] align-middle font-dm-serif">
                            Can I schedule a demo or consultation?
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed text-[16px] tracking-[0px] font-normal align-middle font-sf-pro">
                            Absolutely! Select &quot;Sales Question&quot; in the contact form and mention that you&apos;d like to schedule a demo. Our sales team will reach out to arrange a convenient time.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-[33px] hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="text-[20px] text-[#1A1A1A] mb-4 leading-[100%] tracking-[0px] align-middle font-dm-serif">
                            Do you offer phone support?
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed text-[16px] tracking-[0px] font-normal align-middle font-sf-pro">
                            Yes, we offer phone support during business hours (Mon-Fri 9AM-6PM EST). You can reach us at +1 (555) 123-4567. For faster service, we recommend starting with our contact form.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-[33px] hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                        <h3 className="text-[20px] text-[#1A1A1A] mb-4 leading-[100%] tracking-[0px] align-middle font-dm-serif">
                            How can I provide feedback about PATRONIK?
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed text-[16px] tracking-[0px] font-normal align-middle font-sf-pro">
                            We love hearing from our users! Please use the contact form and select &quot;Feedback&quot; as the subject. Your input helps us improve our platform and better serve the fashion design community.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}