export default function Pricing () {
    return (
        <>
            {/* intro */}
            <section id="intro" className="relative">
                <div className="relative">
                    <img className="object-cover w-full h-[690px] md:h-[600px] inset-0" src="/pricing/background-pricing.webp" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
                </div>

                <div className=" pl-0 lg:pl-40 space-y-3 flex flex-col absolute inset-0 justify-center items-center lg:items-start py-136 lg:py-0">
                    <h1 className="text-3xl lg:text-[60px] lg:w-2/3 font-['DM_Serif_Display',serif]">
                        Choose the Perfect Plan for Your Fashion Journey
                    </h1>
                    <p className="px-10 lg:px-0 text-gray-500 text-[14px] lg:text-[20px] sm:text-base lg:text-xl leading-[150%] text-center md:text-left lg:text-left align-middle font-['SF_Pro_Display']">
                        Flexible pricing options designed to fit your creative needs, 
                        from casual exploration to professional fashion design.
                    </p>
                </div>
        
            </section>

            {/* packs */}
            <section id="pack" className="py-16 bg-[#FAFAFA]">

                <div className="flex justify-center items-center gap-4">

                    <span className="text-[18px] font-semibold">Monthly</span>
                    <button className="relative inline-flex h-6 w-11 items-center hover:cursor-pointer rounded-full transition-colors bg-gray-300">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                    </button>
                    <span className="text-[18px] font-semibold text-gray-400">Annual</span>
                    <span className="bg-black px-3 py-1 text-[14px] font-['SF_Pro_Display'] rounded-[20px] text-white">Save 20%</span>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-16 py-16">

                    <div className="relative rounded-[20px] shadow-sm border border-gray-50 bg-white px-8 py-8 space-y-6">

                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-['DM_Serif_Display']">Discovery</span>
                            <span className="py-1 rounded-full text-sm bg-[#E4E4E4] text-black px-3">Free</span>
                        </div>
                        <div>
                            <span className="font-['DM_Serif_Display'] text-[36px]">$0</span>
                            <span className="text-[#4B5563] text-[18px] font-['DM_Serif_Display']">/month</span>
                        </div>
                        <p className="font-['SF_Pro_Display'] text-start text-[#4B5563] leading-relaxed">
                            Perfect for exploring AI fashion design with basic features.
                        </p>
                        <ul className="space-y-3 mb-38">
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">3 design prompts per month</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Watermarked outputs</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Basic design templates</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-gray-300 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-[#9CA3AF]">Download options</span>
                                </div>
                            </li>
                        </ul>
                        <button className="w-full py-2 px-4 rounded-md font-medium text-sm transition-colors hover:cursor-pointer duration-200 border border-[#E5E7EB] hover:bg-gray-100">
                            Start Free
                        </button>

                    </div>

                    <div className="relative rounded-[20px] shadow-sm border border-gray-50 bg-white px-8 py-8 space-y-6 shadow-lg bg-gradient-to-b from-[#000000]/9 to-white">
                        
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gray-900 whitespace-nowrap text-white px-6 py-[6px] leading-[20px] rounded-full text-xs font-medium">
                                Most Popular
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-['DM_Serif_Display']">Creator</span>
                            <span className="py-1 rounded-full text-sm bg-[#E4E4E4] bg-white text-black px-3">Value</span>
                        </div>
                        <div>
                            <span className="font-['DM_Serif_Display'] text-[36px]">$12.90</span>
                            <span className="text-[#4B5563] text-[18px] font-['DM_Serif_Display']">/month</span>
                        </div>
                        <p className="font-['SF_Pro_Display'] text-start text-[#4B5563] leading-relaxed">
                            Ideal for fashion enthusiasts and emerging designers.
                        </p>
                        <ul className="space-y-3 mb-38">
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">10 design prompts per month</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">HD visual quality</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">PDF/SVG export options</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Basic design customization</span>
                                </div>
                            </li>
                        </ul>
                        <button className="w-full py-2 px-4 rounded-md font-medium text-sm transition-colors hover:cursor-pointer duration-200 bg-gray-900 text-white hover:bg-gray-800">
                            Get Started
                        </button>

                    </div>

                    <div className="relative rounded-[20px] shadow-sm border border-gray-50 bg-white px-8 py-8 space-y-6">

                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-['DM_Serif_Display']">Professional</span>
                            <span className="py-1 rounded-full text-sm bg-[#D3E6FF] text-[#2563EB] px-3">Advanced</span>
                        </div>
                        <div>
                            <span className="font-['DM_Serif_Display'] text-[36px]">$29.90</span>
                            <span className="text-[#4B5563] text-[18px] font-['DM_Serif_Display']">/month</span>
                        </div>
                        <p className="font-['SF_Pro_Display'] text-start text-[#4B5563] leading-relaxed">
                            For serious designers who need powerful tools and flexibility.
                        </p>
                        <ul className="space-y-3 mb-38">
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Unlimited design generations</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Cloud storage access</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Favorites system</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Advanced customization tools</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Future variations</span>
                                    <div className="w-[100px] text-sm px-2 py-1 mt-1 text-center rounded-lg bg-[#ECE9E6] leading-[16px]">
                                        Coming soon
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                        <button className="w-full -translate-y-16 py-2 px-4 rounded-md font-medium text-sm transition-colors hover:cursor-pointer duration-200 border border-[#E5E7EB] hover:bg-gray-100">
                            Go Pro
                        </button>

                    </div>

                    <div className="relative rounded-[20px] shadow-sm border border-gray-50 bg-white px-8 py-8 space-y-6">

                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-['DM_Serif_Display']">Studio</span>
                            <span className="py-1 rounded-full text-sm bg-[#F7E6CA] text-[#60502F] px-3">Enterprise</span>
                        </div>
                        <div>
                            <span className="font-['DM_Serif_Display'] text-[36px]">$59</span>
                            <span className="text-[#4B5563] text-[18px] font-['DM_Serif_Display']">/month</span>
                        </div>
                        <p className="font-['SF_Pro_Display'] text-start text-[#4B5563] leading-relaxed">
                            Comprehensive solution for fashion studios and businesses.
                        </p>
                        
                        <ul className="space-y-3 mb-14">
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Everything in Professional</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">3D capabilities</span>
                                    <div className="w-[100px] text-sm px-2 py-1 mt-1 text-center rounded-lg bg-[#ECE9E6] leading-[16px]">
                                        Coming soon
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Multi-size outputs</span>
                                    <div className="w-[100px] text-sm px-2 py-1 mt-1 text-center rounded-lg bg-[#ECE9E6] leading-[16px]">
                                        Coming soon
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                    <span className="text-black">Priority support</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                                </svg>
                                <div className="font-sf-pro text-start">
                                <span className="text-black">Custom branding options</span>
                                </div>
                            </li>
                            </ul>


                        <button className="w-full py-2 px-4 rounded-md font-medium text-sm transition-colors hover:cursor-pointer duration-200 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-700 text-gray-900 font-semibold py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform">
                            Contact Sale
                        </button>


                    </div>

                </div>

                <div className="text-center md:pt-12 -mt-8">
                    <p className="text-gray-600">
                        Need a custom solution? <span className="font-semibold text-gray-900 hover:underline">
                            Get a custom quote
                        </span>
                    </p>
                </div>
                

            </section>

            {/* comparison */}
            <section id="comparison" className="bg-white">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[48px] font-['DM_Serif_Display']">Detailed Feature Comparison</h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto font-sf-pro">
                        Compare all features across our plans to find the perfect fit for your fashion design needs.
                    </p>
                </div>

                
            </section>

        
        </>
    )
}