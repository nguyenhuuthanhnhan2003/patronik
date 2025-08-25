export default function About() {
    return (
        <>
            {/* about */}
            <section id="about" className="relative">
                <div className="relative">
                    <img className="object-cover w-full h-[690px] md:h-[600px] inset-0" src="/about/about_main.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
                </div>

                <div className=" pl-0 lg:pl-40 space-y-3 flex flex-col absolute inset-0 justify-center items-center lg:items-start py-136 lg:py-0">
                    <h1 className="text-3xl lg:text-[60px] font-['DM_Serif_Display',serif]">About PATRONIK</h1>
                    <p className="px-10 lg:px-0 lg:w-2/5 text-gray-500 text-[14px] lg:text-[20px] sm:text-base lg:text-xl leading-[150%] text-center md:text-left lg:text-left align-middle font-['SF_Pro_Display']">
                        We&apos;re revolutionizing fashion design with AI-powered technology, 
                        empowering creators to transform their vision into reality with unprecedented ease and precision.
                    </p>
                </div>
            </section>

            {/* mission */}
            <section id="mission" className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 py-[24px] md:px-20 mx-auto lg:py-[128px] bg-[#FAF9F6]">

                <div id="mission-1" className="grid lg:items-center">
                    
                    <div className="pl-10 lg:pl-20 lg:justify-start space-y-6 items-center">
                        <h1 className="mx-auto text-4xl lg:text-6xl font-['DM_Serif_Display',serif]">Our Mission</h1>
                        <p className="text-gray-700 text-[16px] lg:text-xl font-['SF_Pro_Display']">
                            At PATRONIK, we believe that every creative mind deserves access to professional-grade design tools. 
                            Our mission is to democratize fashion design by making it accessible, intuitive, and powerful for everyone.
                        </p>
                        <p className="text-gray-700 text-[16px] lg:text-xl font-['SF_Pro_Display']">
                            We combine cutting-edge artificial intelligence with deep fashion industry expertise to create tools that
                            understand your creative vision and help bring it to life with unprecedented precision and speed.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 grid-rows-2 text-center space-y-6 gap-x-6 place-items-center mt-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl lg:text-4xl font-['DM_Serif_Display',serif]">50K+</h2>
                            <p className="text-sm lg:text-xl font-['SF_Pro_Display']">Designs Created</p>
                        </div>
                        <div className="space-y-2 flex flex-col items-center translate-x-[20%] text-center">
                            <h2 className="text-2xl lg:text-4xl font-['DM_Serif_Display',serif]">15K+</h2>
                            <p className="text-sm lg:text-xl font-['SF_Pro_Display']">Active Users</p>
                        </div>
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl lg:text-4xl font-['DM_Serif_Display',serif]">98%</h2>
                            <p className="text-sm lg:text-xl font-['SF_Pro_Display']">Satisfaction Rate</p>
                        </div>
                        <div className="space-y-2 ml-8 -mt-8 lg:ml-10 text-center">
                            <h2 className="text-2xl lg:text-4xl font-['DM_Serif_Display',serif]">24/7</h2>
                            <p className="text-sm lg:text-xl font-['SF_Pro_Display']">Support Available</p>
                        </div>
                        
                    </div>
                </div>

                <div id="mission-2" className="w-full sm:p-6 md:p-8 lg:p-[33px] bg-white rounded-lg sm:rounded-xl lg:rounded-[20px] shadow-lg">
                    <img src="/about/our_mission.jpg" alt="" className="rounded-[20px]" />
                </div>

            </section>

            {/* story */}
            <section id="story" className="py-5 md:py-24 lg:py-32 bg-white ">

                {/* intro story */}
                <div className="flex flex-col space-y-4 justify-center items-center">
                    <h1 className="text-4xl leading-tight lg:text-6xl font-['DM_Serif_Display',serif]">Our Story</h1>
                    <p className="text-xl text-gray-700">From a simple idea to revolutionizing fashion design</p>
                </div>

                
                <div className="relative space-y-8 ml-60 mt-16">

                    <div className="lg:-left-0 xl:left-44 flex">
                        {/* svg */}
                        <div className="mr-32 hidden lg:block">
                            <div data-svg-wrapper="true" data-layer="::before-89" className="Before89 xl:left-0.5 top-0 absolute">
                                <svg width="2" height="258" viewBox="0 0 2 258" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="258" fill="url(#paint0_linear_271_11399)"></rect>
                                    <defs>
                                        <linearGradient id="paint0_linear_271_11399" x1="1" y1="258" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E5DFD3"></stop>
                                            <stop offset="1" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="w-4 h-4 -left-[5.5px] top-6 absolute bg-zinc-900 rounded-[50px]">
                            </div>
                        </div>

                        <div className="flex -ml-50 lg:ml-0 flex-row lg:gap-12 lg:ml-16 lg:max-w-[896px]">
                            <img className="lg:hidden" src="https://frontend-rho-nine-42.vercel.app/icons/linerow-mb.svg" alt="" />
                            <div className="lg:ml-0 ml-10 w-full lg:w-[392px]">
                                <p className="text-gray-500 mb-2">2019</p>
                                <h3 className="text-3xl lg:text-4xl mb-4 font-['DM_Serif_Display',serif]">The Beginning</h3>
                                <p className="text-[#4B5563]">
                                    Founded by a team of fashion designers and AI researchers who saw the potential to bridge the gap
                                    between creative vision and technical execution in fashion design.
                                </p>
                            </div>
                            <div className="w-[392px] h-[258px] hidden lg:block">
                                <img className="rounded-[20px] w-full h-full object-cover" src="https://frontend-rho-nine-42.vercel.app/Images/About-Us/OurStory/OurStory1.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div className="relative space-y-8 ml-60 mt-16">

                    <div className="lg:-left-0 xl:left-44 flex">
                        {/* svg */}
                        <div className="mr-32 hidden lg:block">
                            <div data-svg-wrapper="true" data-layer="::before-89" className="Before89 xl:left-0.5 top-0 absolute">
                                <svg width="2" height="258" viewBox="0 0 2 258" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="258" fill="url(#paint0_linear_271_11399)"></rect>
                                    <defs>
                                        <linearGradient id="paint0_linear_271_11399" x1="1" y1="258" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E5DFD3"></stop>
                                            <stop offset="1" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="w-4 h-4 -left-[5.5px] top-6 absolute bg-zinc-900 rounded-[50px]">
                            </div>
                        </div>

                        <div className="flex -ml-60 lg:ml-0 flex-row lg:gap-12 lg:ml-16 lg:max-w-[896px]">
                            <div className="w-[392px] h-[258px] hidden lg:block">
                                <img className="rounded-[20px] w-full h-full object-cover" src="https://frontend-rho-nine-42.vercel.app/Images/About-Us/OurStory/OurStory2.jpg" alt="" />
                            </div>
                            <div className="lg:ml-0 ml-10 w-full lg:w-[392px]">
                                <p className="text-gray-500 mb-2">2021</p>
                                <h3 className="text-3xl lg:text-4xl mb-4 font-['DM_Serif_Display',serif]">First Prototype</h3>
                                <p className="text-[#4B5563]">
                                    Launched our first AI-powered design tool, enabling users to create basic garment patterns from text descriptions. 
                                    The response from the fashion community was overwhelmingly positive
                                </p>
                            </div>
                            
                            <img className="lg:hidden" src="https://frontend-rho-nine-42.vercel.app/icons/linerow-mb.svg" alt="" />

                        </div>

                    </div>
                    
                </div>

                <div className="relative space-y-8 ml-60 mt-16">

                    <div className="lg:-left-0 xl:left-44 flex">
                        {/* svg */}
                        <div className="mr-32 hidden lg:block">
                            <div data-svg-wrapper="true" data-layer="::before-89" className="Before89 xl:left-0.5 top-0 absolute">
                                <svg width="2" height="258" viewBox="0 0 2 258" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="258" fill="url(#paint0_linear_271_11399)"></rect>
                                    <defs>
                                        <linearGradient id="paint0_linear_271_11399" x1="1" y1="258" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E5DFD3"></stop>
                                            <stop offset="1" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="w-4 h-4 -left-[5.5px] top-6 absolute bg-zinc-900 rounded-[50px]">
                            </div>
                        </div>

                        <div className="flex -ml-50 lg:ml-0 flex-row lg:gap-12 lg:ml-16 lg:max-w-[896px]">
                            <img className="lg:hidden" src="https://frontend-rho-nine-42.vercel.app/icons/linerow-mb.svg" alt="" />
                            <div className="lg:ml-0 ml-10 w-full lg:w-[392px]">
                                <p className="text-gray-500 mb-2">2023</p>
                                <h3 className="text-3xl lg:text-4xl mb-4 font-['DM_Serif_Display',serif]">Platform Launch</h3>
                                <p className="text-[#4B5563]">
                                    Officially launched PATRONIK as a comprehensive fashion design platform, 
                                    introducing advanced features like realistic rendering, pattern generation, and collaborative tools.
                                </p>
                            </div>
                            <div className="w-[392px] h-[258px] hidden lg:block">
                                <img className="rounded-[20px] w-full h-full object-cover" src="https://frontend-rho-nine-42.vercel.app/Images/About-Us/OurStory/OurStory3.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div className="relative space-y-8 ml-60 mt-16">

                    <div className="lg:-left-0 xl:left-44 flex">
                        {/* svg */}
                        <div className="mr-32 hidden lg:block">
                            <div data-svg-wrapper="true" data-layer="::before-89" className="Before89 xl:left-0.5 top-0 absolute">
                                <svg width="2" height="258" viewBox="0 0 2 258" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2" height="258" fill="url(#paint0_linear_271_11399)"></rect>
                                    <defs>
                                        <linearGradient id="paint0_linear_271_11399" x1="1" y1="258" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E5DFD3"></stop>
                                            <stop offset="1" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="w-4 h-4 -left-[5.5px] top-6 absolute bg-zinc-900 rounded-[50px]">
                            </div>
                        </div>

                        <div className="flex -ml-60 lg:ml-0 flex-row lg:gap-12 lg:ml-16 lg:max-w-[896px]">
                            <div className="w-[392px] h-[258px] hidden lg:block">
                                <img className="rounded-[20px] w-full h-full object-cover" src="https://frontend-rho-nine-42.vercel.app/Images/About-Us/OurStory/OurStory2.jpg" alt="" />
                            </div>
                            <div className="lg:ml-0 ml-10 w-full lg:w-[392px]">
                                <p className="text-gray-500 mb-2">2025</p>
                                <h3 className="text-3xl lg:text-4xl mb-4 font-['DM_Serif_Display',serif]">Global Expansion</h3>
                                <p className="text-[#4B5563]">
                                    Today, PATRONIK serves thousands of designers worldwide, from independent creators to major fashion houses, 
                                    helping them bring their creative visions to life faster than ever before.
                                </p>
                            </div>
                            
                            <img className="lg:hidden" src="https://frontend-rho-nine-42.vercel.app/icons/linerow-mb.svg" alt="" />

                        </div>

                    </div>
                    
                </div>
            
            </section>

            {/* meet our team */}
            <section id="meet" className="bg-[#FAF9F6]">

                <div className="flex flex-col justify-center items-center py-[111px]">

                    <div id="meet1" className="text-center block space-y-[20px]">
                        <h1 className="lg:text-[60px] text-[30px] font-['DM_Serif_Display',serif]">
                            Meet Our Team
                        </h1>
                        <p className="text-lg text-[#4B5563] font-light"> {/* font-light */}
                            The passionate individuals behind PATRONIK&apos;s innovation
                        </p>
                    </div>

                    <div id="meet2" className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8 px-30 py-16">

                        <div className="flex justify-center items-center text-center bg-white rounded-4xl shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                            <div className="py-12 px-8">
                                <img className="w-[96px] rounded-full mx-auto" src="/about/Sarah_Chen.webp" alt="" />
                                <h4 className="font-bold py-6 text-[20px]">Sarah Chen</h4>
                                <p className="pb-6 text-[16px] text-[#4B5563]">CEO & Co-Founder</p>
                                <p className="lg:text-[14px] text-[#4B5563]">
                                    Former fashion designer at Chanel with 15 years of industry experience. 
                                    Sarah leads our vision to democratize fashion design through technology.
                                </p>
                                <div className="flex justify-center items-center pt-3 gap-4">
                                    <img className="" src="/about/LinkedIn.webp" alt="" />
                                    <img className="" src="/about/Twitter.webp" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center text-center bg-white rounded-4xl shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                            <div className="py-12 px-8">
                                <img className="w-[96px] rounded-full mx-auto" src="/about/Marcus_Rodriguez.webp" alt="" />
                                <h4 className="font-bold py-6 text-[20px]">Marcus Rodriguez</h4>
                                <p className="pb-6 lg:text-[16px] text-[#4B5563]">CTO & Co-Founder</p>
                                <p className="lg:text-[14px] text-[#4B5563]">
                                    AI researcher with PhD from MIT. 
                                    Marcus oversees our machine learning algorithms and ensures our technology stays at the cutting edge.
                                </p>
                                <div className="flex justify-center items-center pt-3 gap-4">
                                    <img className="" src="/about/LinkedIn.webp" alt="" />
                                    <img className="" src="/about/Twitter.webp" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center text-center bg-white rounded-4xl shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                            <div className="py-12 px-8">
                                <img className="w-[96px] rounded-full mx-auto" src="/about/Lisa_Wang.webp" alt="" />
                                <h4 className="font-bold py-6 text-[20px]">Lisa Wang</h4>
                                <p className="pb-6 lg:text-[16px] text-[#4B5563]">Head of Marketing</p>
                                <p className="lg:text-[14px] text-[#4B5563]">
                                    Marketing strategist with deep fashion industry connections. 
                                    Lisa helps us reach and serve the global fashion design community effectively.
                                </p>
                                <div className="flex justify-center items-center pt-3 gap-4">
                                    <img className="" src="/about/LinkedIn.webp" alt="" />
                                    <img className="" src="/about/Twitter.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center items-center text-center bg-white rounded-4xl shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                            <div className="py-12 px-8">
                                <img className="w-[96px] rounded-full mx-auto" src="/about/David_Kim.webp" alt="" />
                                <h4 className="font-bold py-6 text-[20px]">David Kim</h4>
                                <p className="pb-6 lg:text-[16px] text-[#4B5563]">Head of Engineering</p>
                                <p className="lg:text-[14px] text-[#4B5563]">
                                    Full-stack engineer with expertise in scalable systems. 
                                    David ensures our platform can handle millions of designs while maintaining peak performance.
                                </p>
                                <div className="flex justify-center items-center pt-3 gap-4">
                                    <img className="" src="/about/LinkedIn.webp" alt="" />
                                    <img className="" src="/about/Twitter.webp" alt="" />
                                </div>
                            </div>
                        </div>       
                        
                        <div className="flex justify-center items-center text-center bg-white rounded-4xl shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                            <div className="py-12 px-8">
                                <img className="w-[96px] rounded-full mx-auto" src="/about/Emma_Thompson.webp" alt="" />
                                <h4 className="font-bold py-6 text-[20px]">Emma Thompson</h4>
                                <p className="pb-6 lg:text-[16px] text-[#4B5563]">Head of Design</p>
                                <p className="lg:text-[14px] text-[#4B5563]">
                                    Award-winning UX designer who ensures our platform is intuitive and delightful to use. 
                                    Emma bridges the gap between technology and user experience.
                                </p>
                                <div className="flex justify-center items-center pt-3 gap-4">
                                    <img className="" src="/about/LinkedIn.webp" alt="" />
                                    <img className="" src="/about/Twitter.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center items-center text-center bg-white rounded-4xl shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                            <div className="py-12 px-8">
                                <img className="w-[96px] rounded-full mx-auto" src="/about/James_Miller.webp" alt="" />
                                <h4 className="font-bold py-6">James Miller</h4>
                                <p className="pb-6 lg:text-[16px] text-[#4B5563]">Head of Customer Success</p>
                                <p className="lg:text-[14px] text-[#4B5563]">
                                    Customer success expert who ensures every user gets the most out of PATRONIK. 
                                    James leads our support and education initiatives.
                                </p>
                                <div className="flex justify-center items-center pt-3 gap-4">
                                    <img className="" src="/about/LinkedIn.webp" alt="" />
                                    <img className="" src="/about/Twitter.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* our values */}
            <section id="values" className="bg-white">

                <div className="flex flex-col justify-center items-center py-[111px]">

                    <div className="text-center block space-y-[20px]">
                        <h1 className="lg:text-[60px] text-[30px] font-['DM_Serif_Display',serif]">
                            Our Values
                        </h1>
                        <p className="text-lg text-[#4B5563] font-light"> {/* font-light */}
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-8 lg:gap-12 px-30 py-16">

                        <div className="flex justify-center items-center bg-white rounded-4xl">

                            <div className="p-8 rounded-[24px] shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                                <img className="p-4 bg-[#E5DFD34D] rounded-[20px]" src="/about/Icon-291.svg" alt="" />
                                <h4 className="py-4 text-[30px] font-['DM_Serif_Display',serif]">Innovation</h4>
                                <p className="lg:text-[20px] text-[#4B5563]">
                                    We constantly push the boundaries of what&apos;s possible in fashion design technology, 
                                    always seeking new ways to empower creativity.
                                </p>
                            </div>

                        </div>

                        <div className="flex justify-center items-center bg-white rounded-4xl">

                            <div className="p-8 rounded-[24px] shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                                <img className="p-4 bg-[#E5DFD34D] rounded-[20px]" src="/about/Icon-301.svg" alt="" />
                                <h4 className="py-4 text-[30px] font-['DM_Serif_Display',serif]">Accessibility</h4>
                                <p className="lg:text-[20px] text-[#4B5563]">
                                    We believe great design tools should be accessible to everyone, 
                                    regardless of their technical background or experience level.
                                </p>
                            </div>

                        </div>

                        <div className="flex justify-center items-center bg-white rounded-4xl">

                            <div className="p-8 rounded-[24px] shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                                <img className="p-4 bg-[#E5DFD34D] rounded-[20px]" src="/about/Icon-311.svg" alt="" />
                                <h4 className="py-4 text-[30px] font-['DM_Serif_Display',serif]">Community</h4>
                                <p className="lg:text-[20px] text-[#4B5563]">
                                    We foster a supportive community where designers can learn, 
                                    share, and grow together in their creative journey.
                                </p>
                            </div>

                        </div>
                        
                        <div className="flex justify-center items-center bg-white rounded-4xl">

                            <div className="p-8 rounded-[24px] shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)] transition-shadow duration-300">
                                <img className="p-4 bg-[#E5DFD34D] rounded-[20px]" src="/about/Icon-321.svg" alt="" />
                                <h4 className="py-4 text-[30px] font-['DM_Serif_Display',serif]">Excellence</h4>
                                <p className="lg:text-[20px] text-[#4B5563]">
                                    We strive for excellence in every aspect of our platform, 
                                    from the quality of our AI to the user experience we provide.
                                </p>
                            </div>

                        </div>


                    </div>

                </div>

            </section>
           
            {/* get in touch */}
            <section id="get-in-touch" className="px-[80px] py-[128px] bg-[#FAF9F6] grid  lg:grid-cols-2 gap-6 lg:gap-12">

                <div id="touch-1" className="space-y-8">
                    <div className="px-16 space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-['DM_Serif_Display',serif]">Get In Touch</h2>
                        <p className="text-md lg:text-lg ">
                            Have questions about PATRONIK or want to learn more about our mission? 
                            We&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="space-y-6 px-16">
                        <div className="flex gap-4">
                            <img className="" src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Phone.svg" alt="" />
                            <div className="">
                                <p className="font-bold">Email</p>
                                <p>hello@patronik.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img className="" src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Address.svg" alt="" />
                            <div className="">
                                <p className="font-bold">Phone</p>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img className="" src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Email.svg" alt="" />
                            <div className="">
                                <p className="font-bold">Address</p>
                                <p>
                                    123 Fashion District
                                    New York, NY 10001
                                </p>
                            </div>
                        </div>
                        <button className="bg-black text-white py-3 px-8 rounded-[16px]">
                            Write Us
                        </button>
                    </div>

                </div>

                <div id="touch-2" className="hidden lg:block">
                    <img className="lg:w-[574px] rounded-[20px]" src="https://frontend-rho-nine-42.vercel.app/Images/About-Us/GetInToach/Contact-building.svg" alt="" />
                </div>


            </section>

        </>
    )
}