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
            <section id="pack" className="flex flex-col px-10 py-24 lg:px-[100px] bg-[#FAFAFA]" >
                <div className="flex justify-center items-center gap-4">

                    <span className="text-[18px] font-semibold">Monthly</span>
                    <button className="relative inline-flex h-6 w-11 items-center hover:cursor-pointer rounded-full transition-colors bg-gray-300">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                    </button>
                    <span className="text-[18px] font-semibold text-gray-400">Annual</span>
                    <span className="bg-black px-3 py-1 text-[14px] font-['SF_Pro_Display'] rounded-[20px] text-white">Save 20%</span>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full lg:px-16 py-16">
                    
                    {/* card1 */}
                    <div className="flex flex-col justify-between bg-white px-4 py-8 gap-40 rounded-[20px] shadow-sm">

                        {/* top */}
                        <div className="space-y-8 flex flex-col">
                            <div className="flex justify-between">
                                <h4 className="text-2xl leading-[24px] font-dm-serif text-gray-900">Discovery</h4>
                                <span className="py-1 rounded-full text-sm bg-[#E4E4E4] text-black px-3">Free</span>
                            </div>

                            <div className="space-y-8">
                                
                                <div>
                                    <span className="text-4xl font-dm-serif text-gray-900">
                                        $0
                                    </span>
                                    <span className="text-[#4B5563] text-[18px] font-dm-serif">
                                        /month
                                    </span>
                                </div>

                                <p className="font-sf-pro text-start text-[#4B5563] leading-relaxed">
                                    Perfect for exploring AI fashion design with basic features.
                                </p>

                            </div>

                            <ul className="space-y-2">

                                <li className="flex items-center gap-4">
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
                                    <span>
                                        3 design prompts per month
                                    </span>
                                </li>
                                
                                <li className="flex items-center gap-4">
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
                                    <span>
                                        Watermarked outputs
                                    </span>
                                </li>

                                <li className="flex items-center gap-4">
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
                                    <span>
                                        Basic design templates
                                    </span>
                                </li>

                                <li className="flex items-center gap-4">
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

                                    <span className="text-[#9CA3AF]">
                                        Download options
                                    </span>
                                </li>

                            </ul>
                        </div>


                        {/* bot */}
                        <div className="flex justify-center items-center">
                            <button className="py-2 px-18 rounded-md text-sm font-bold transition-colors hover:cursor-pointer duration-200 border border-[#E5E7EB] hover:bg-gray-100">
                                Start Free
                            </button>
                        </div>



                    </div>
                    
                    {/* card2 */}
                    <div className="flex relative flex-col justify-between bg-white px-4 py-8 gap-40 rounded-[20px] shadow-lg bg-gradient-to-b from-[#000000]/9 to-white">
                        
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-[20px] px-6 py-[6px] text-xs  font-bold text-white bg-black">
                            Most popular
                        </div>

                        {/* top */}
                        <div className="space-y-8">
                            <div className="flex justify-between">
                                <h4 className="text-2xl leading-[24px] font-dm-serif text-gray-900">Creator</h4>
                                <span className="py-1 rounded-full text-sm bg-white text-black px-3">Value</span>
                            </div>

                            <div className="space-y-8">
                                
                                <div>
                                    <span className="text-4xl font-dm-serif text-gray-900">
                                        $12.90
                                    </span>
                                    <span className="text-[#4B5563] text-[18px] font-dm-serif">
                                        /month
                                    </span>
                                </div>

                                <p className="font-sf-pro text-start text-[#4B5563] leading-relaxed">
                                    Ideal for fashion enthusiasts and emerging designers.
                                </p>

                            </div>

                            <ul className="space-y-2">

                                <li className="flex items-center gap-4">
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
                                    <span>
                                        10 design prompts per month
                                    </span>
                                </li>
                                
                                <li className="flex items-center gap-4">
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
                                    <span>
                                        HD visual quality
                                    </span>
                                </li>

                                <li className="flex items-center gap-4">
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
                                    <span>
                                        PDF/SVG export options
                                    </span>
                                </li>

                                <li className="flex items-center gap-4">
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

                                    <span className="">
                                        Basic design customization
                                    </span>
                                </li>

                            </ul>
                        </div>

                        {/* bot */}
                        <div className="flex justify-center items-center">
                            <button className="py-2 px-18 bg-black text-white rounded-md text-sm font-bold transition-colors hover:cursor-pointer hover:bg-gray-800 duration-200 border border-[#E5E7EB] hover:bg-gray-100">
                                Get Started
                            </button>
                        </div>



                    </div>

                    {/* card3 */}
                    <div className="flex flex-col justify-between bg-white px-4 py-8 gap-40 rounded-[20px] shadow-sm">

                        {/* top */}
                        <div className="space-y-8">
                            <div className="flex justify-between">
                                <h4 className="text-2xl leading-[24px] font-dm-serif text-gray-900">Professional</h4>
                                <span className="py-1 rounded-full text-sm bg-[#D3E6FF] text-[#2563EB] px-1">Advanced</span>
                            </div>

                            <div className="space-y-8">
                                
                                <div>
                                    <span className="text-4xl font-dm-serif text-gray-900">
                                        $29.90
                                    </span>
                                    <span className="text-[#4B5563] text-[18px] font-dm-serif">
                                        /month
                                    </span>
                                </div>

                                <p className="font-sf-pro text-start text-[#4B5563] leading-relaxed">
                                    For serious designers who need powerful tools and flexibility.
                                </p>

                            </div>

                            <ul className="space-y-2">

                                <li className="flex items-center gap-4">
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
                                    <span>
                                        Unlimited design generations
                                    </span>
                                </li>
                                
                                <li className="flex items-center gap-4">
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
                                    <span>
                                        Cloud storage access
                                    </span>
                                </li>

                                <li className="flex items-center gap-4">
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
                                    <span>
                                        Favorites system
                                    </span>
                                </li>

                                <li className="flex items-center gap-4">
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
                                    <span>
                                        Advanced customization tools
                                    </span>
                                </li>
                                <li className="flex gap-4">
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
                                    <div className="space-y-2">
                                        <div>
                                            Future variations
                                        </div>
                                        <div className="w-[92px] h-[24px] items-center justify-center flex text-sm rounded-lg bg-[#ECE9E6]">
                                            Coming soon
                                        </div>
                                    </div>
                                </li>
                                

                            </ul>
                        </div>

                        {/* bot */}
                        <div className="flex justify-center items-center">
                            <button className="py-2 px-18 rounded-md text-sm font-bold transition-colors hover:cursor-pointer duration-200 border border-[#E5E7EB] hover:bg-gray-100">
                                Go Pro
                            </button>
                        </div>



                    </div>

                    {/* card4 */}
                    <div className="flex flex-col justify-between bg-white px-4 py-8 gap-40 rounded-[20px] shadow-sm">

                        {/* top */}
                        <div className="space-y-8">
                            <div className="flex justify-between">
                                <h4 className="text-2xl leading-[24px] font-dm-serif text-gray-900">Studio</h4>
                                <span className="py-1 rounded-full text-sm bg-[#F7E6CA] text-[#60502F] px-3">Enterprise</span>
                            </div>

                            <div className="space-y-8">
                                
                                <div>
                                    <span className="text-4xl font-dm-serif text-gray-900">
                                        $59
                                    </span>
                                    <span className="text-[#4B5563] text-[18px] font-dm-serif">
                                        /month
                                    </span>
                                </div>

                                <p className="font-sf-pro text-start text-[#4B5563] leading-relaxed">
                                    Comprehensive solution for fashion studios and businesses.
                                </p>

                            </div>

                            <ul className="space-y-2">

                                <li className="flex items-center gap-4">
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
                                    <span>
                                        Everything in Professional
                                    </span>
                                </li>
                                
                                <li className="flex gap-4">
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
                                    <div>
                                        <span>
                                            3D capabilities
                                        </span>
                                        <div className="w-[92px] h-[24px] items-center justify-center flex text-sm rounded-lg bg-[#ECE9E6]">
                                            Coming soon
                                        </div>
                                    </div>
                                </li>

                                <li className="flex gap-4">
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
                                    <div>
                                        <span>
                                            Multi-size outputs
                                        </span>
                                        <div className="w-[92px] h-[24px] items-center justify-center flex text-sm rounded-lg bg-[#ECE9E6]">
                                            Coming soon
                                        </div>

                                    </div>
                                </li>

                                <li className="flex items-center gap-4">
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

                                    <span className="">
                                        Priority support
                                    </span>
                                </li>

                                <li className="flex items-center gap-4">
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

                                    <span className="">
                                        Custom branding options
                                    </span>
                                </li>

                            </ul>
                        </div>

                        {/* bot */}
                        <div className="flex justify-center items-center">
                            <button className="py-2 px-14 rounded-md text-sm font-bold transition-colors hover:cursor-pointer  rounded-md font-medium text-sm transition-colors hover:cursor-pointer duration-200 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-700 text-gray-900 font-semibold py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform">
                                Contact Sale
                            </button>
                        </div>



                    </div>

                </div>


            </section>

            {/* comparison */}
            <section id="comparison" className="bg-white py-10">

                <div className="flex-col justify-center items-center py-10 hidden lg:flex">
                    <h1 className="text-[48px] font-['DM_Serif_Display']">Detailed Feature Comparison</h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto font-sf-pro">
                        Compare all features across our plans to find the perfect fit for your fashion design needs.
                    </p>
                </div>

                {/* mobile */}
                <div className="max-w-sm lg:hidden mx-auto p-4 bg-white">
                    <div className="text-center mb-6">
                        <p className="text-[#4B5563] mb-4 leading-relaxed font-sf-pro">
                        Compare all features across our plans to find the perfect fit for your
                        fashion design needs.
                        </p>
                    </div>
                    
                    <div className="space-y-2 border border-[#E5E7EB] rounded-lg p-[10px]">
                        <h1 className="text-2xl font-bold font-['DM_Serif_Display'] text-center">
                        Detailed Feature Comparison
                        </h1>
                        <div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Discovery</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">Creator</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">
                                Professional
                            </span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">Studio</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Design Prompts</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">
                                3 per month
                            </span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">
                                10 per month
                            </span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Unlimited</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">Unlimited</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Output Quality</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Standard</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">HD</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Ultra HD</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">Ultra HD</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Watermark</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Yes</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">No</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">No</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">No</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Export Formats</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">None</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">PDF, SVG</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">
                                PDF, SVG, PNG, JPG
                            </span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">
                                All formats + DXF
                            </span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Cloud Storage</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">None</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">1GB</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">10GB</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">50GB</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Design Templates</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Basic</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">Standard</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Premium</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">
                                Premium + Custom
                            </span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Variations</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-500">Coming Soon</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-500">Coming Soon</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">3D Visualization</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-500">Coming Soon</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Multi-size Patterns</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Limited</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">
                                Full Range
                            </span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Customer Support</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Email</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">
                                Email, Chat
                            </span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">
                                Email, Chat, Phone
                            </span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">
                                Priority Support
                            </span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">Team Members</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">1</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">1</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Up to 3</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">Up to 50</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="text-center py-2 bg-white">
                            <h4 className="font-semibold text-gray-900">API Access</h4>
                        </div>
                        <div className="grid grid-cols-4 gap-1 border border-[#F3F4F6] h-[46px]">
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <svg
                                className="w-4 h-4 text-gray-400 mx-auto"
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
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-[#F3F4F6]">
                            <span className="text-xs text-gray-700 leading-tight">Limited</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-center bg-white">
                            <span className="text-xs text-gray-700 leading-tight">
                                Full Access
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* pc */}
                <div className="justify-center items-be py-16 px-8 hidden lg:flex">
                    <table className="w-full font-['SF_Pro_Display']">
                        <tbody>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900 ">Design Prompts</td>
                                <td className="py-6 px-6 font-medium text-gray-900 ">3 per month</td>
                                <td className="py-6 px-6 font-medium text-gray-900 ">10 per month</td>
                                <td className="py-6 px-6 font-medium text-gray-900 ">Unlimited</td>
                                <td className="py-6 px-6 font-medium text-gray-900 ">Unlimited</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Output Quality</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Standard</td>
                                <td className="py-6 px-6 font-medium text-gray-900">HD</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Ultra HD</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Ultra HD</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Watermark</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Yes</td>
                                <td className="py-6 px-6 font-medium text-gray-900">No</td>
                                <td className="py-6 px-6 font-medium text-gray-900">No</td>
                                <td className="py-6 px-6 font-medium text-gray-900">No</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Export Formats</td>
                                <td className="py-6 px-6 font-medium text-gray-900">None</td>
                                <td className="py-6 px-6 font-medium text-gray-900">PDF, SVG</td>
                                <td className="py-6 px-6 font-medium text-gray-900">PDF, SVG, PNG, JPG</td>
                                <td className="py-6 px-6 font-medium text-gray-900">All formats + DXF</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Cloud Storage</td>
                                <td className="py-6 px-6 font-medium text-gray-900">None</td>
                                <td className="py-6 px-6 font-medium text-gray-900">1GB</td>
                                <td className="py-6 px-6 font-medium text-gray-900">10GB</td>
                                <td className="py-6 px-6 font-medium text-gray-900">50GB</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Design Templates</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Basic</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Standard</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Premium</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Premium + Custom</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Variations</td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">Coming Soon</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Coming Soon</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">3D Visualization</td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">Coming Soon</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Multi-size Patterns</td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">Limited</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Full Range</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Customer Support</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Email</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Email, Chat</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Email, Chat, Phone</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Priority Support</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">Team Members</td>
                                <td className="py-6 px-6 font-medium text-gray-900">1</td>
                                <td className="py-6 px-6 font-medium text-gray-900">1</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Up to 3</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Up to 50</td>
                            </tr>

                            <tr className="border-y border-y-gray-200 text-center">
                                <td className="py-6 px-6 font-medium text-gray-900">API Access</td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                                        aria-hidden="true"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </td>
                                <td className="py-6 px-6 font-medium text-gray-900">Limited</td>
                                <td className="py-6 px-6 font-medium text-gray-900">Full Access</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
            </section>

            {/* advanced */}
            <section id="advanced" className="hidden bg-[#FAFAFA] py-[83px] lg:grid grid-cols-1 lg:grid-cols-2 px-16 gap-12">

                <div className="flex flex-col">
                    <div className="space-y-8">
                        <h2 className="font-['DM_Serif_Display'] text-3xl md:text-4xl">Coming Soon: Advanced Features</h2>
                        <p className="text-gray-600 mb-8 text-xl font-['SF_Pro_Display'] sm:text-start tracking-wide text-center">We&apos;re constantly innovating to bring you the most advanced AI fashion design tools.
                            Here&apos;s what&apos;s coming next:
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">

                        <div className="flex flex-row gap-6">
                            <div className="w-12 h-12 bg-black text-white rounded-[20px] flex items-center justify-center font-bold text-sm flex-shrink-0">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                </svg>
                            </div>

                            <div className="flex flex-col gap-1 text-[16px]">
                                <h4 className="font-semibold text-gray-900 font-['DM_Serif_Display']">
                                    3D Visualization
                                </h4>
                                <p className="text-gray-600">
                                    See your designs come to life with realistic 3D models that can be rotated and viewed from any angle.
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-row gap-6">
                            <div className="w-12 h-12 bg-black text-white rounded-[20px] flex items-center justify-center font-bold text-sm flex-shrink-0">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14.5135 5.00008L17.1201 2.39348C17.5106 2.00295 18.1438 2.00295 18.5343 2.39348L22.777 6.63612C23.1675 7.02664 23.1675 7.65981 22.777 8.05033L18.9988 11.8285V21.0001C18.9988 21.5524 18.5511 22.0001 17.9988 22.0001H5.9988C5.44652 22.0001 4.9988 21.5524 4.9988 21.0001V11.8285L1.22063 8.05033C0.830103 7.65981 0.830103 7.02664 1.22063 6.63612L5.46327 2.39348C5.85379 2.00295 6.48696 2.00295 6.87748 2.39348L9.48408 5.00008H14.5135ZM15.3419 7.00008H8.65566L6.17037 4.5148L3.34195 7.34323L6.9988 11.0001V20.0001H16.9988V11.0001L20.6557 7.34323L17.8272 4.5148L15.3419 7.00008Z" />
                                </svg>
                            </div>


                            <div className="flex flex-col gap-1 text-[16px]">
                                <h4 className="font-semibold text-gray-900 font-['DM_Serif_Display']">
                                    Multi-size Patterns
                                </h4>
                                <p className="text-gray-600">
                                    Generate patterns in multiple sizes with a single click, perfect for production-ready designs.
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-row gap-6">
                            <div className="w-12 h-12 bg-black text-white rounded-[20px] flex items-center justify-center font-bold text-sm flex-shrink-0">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                </svg>
                            </div>

                            <div className="flex flex-col gap-1 text-[16px]">
                                <h4 className="font-semibold text-gray-900 font-['DM_Serif_Display']">
                                    Fabric Simulation
                                </h4>
                                <p className="text-gray-600">
                                    Preview how your designs will look with different fabrics and textures applied.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="flex gap-4 py-8">
                        <input className="border border-gray-200 px-4 rounded-[10px] w-full h-[50px] text-[16px]" type="text" placeholder="Enter your email"/>
                        <button className="text-white bg-black px-6 w-[140px] h-[50px] rounded-[10px]">Notify Me</button>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <img className="rounded-[40px] w-[648px]" src="/pricing/pricing-image.webp" alt="" />
                </div>

            </section>

            {/* frequently asked questions */}
            <section id="questions" className="flex flex-col py-24 space-y-16 px-[80px]">

                <div className="space-y-4 flex flex-col items-center justify-center">
                    <h3 className="font-dm-serif text-3xl">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-xl text-gray-500">
                        Find answers to common questions about our pricing plans and billing
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 lg:grid-rows-3 lg:px-40 gap-10">

                    <div className="bg-white space-y-4 px-2 py-8 md:px-10 tracking-wide border text-center md:text-start border-[#FFFFFF4D] backdrop-blur-lg rounded-[20px] shadow-[0px_8px_32px_0px_#1F268712] font-sf-pro">
                        <h4 className="font-semibold text-gray-900 text-xl px-5 md:px-0 pb-0 md:pb-4">
                            How does billing work?
                        </h4>
                        <p>
                            We offer both monthly and annual billing options. Annual plans come with a 20% discount. 
                            You can change your billing cycle at any time from your account settings.
                        </p>
                    </div>

                    <div className="bg-white space-y-4 px-2 py-8 md:px-10 tracking-wide border text-center md:text-start border-[#FFFFFF4D] backdrop-blur-lg rounded-[20px] shadow-[0px_8px_32px_0px_#1F268712] font-sf-pro">
                        <h4 className="font-semibold text-gray-900 text-xl px-5 md:px-0 pb-0 md:pb-4">
                            Can I upgrade or downgrade my plan?
                        </h4>
                        <p>
                            Yes, you can upgrade or downgrade your plan at any time. When upgrading, you&apos;ll be charged the prorated difference. 
                            When downgrading, the new rate will apply at the start of your next billing cycle.
                        </p>
                    </div>

                    <div className="bg-white space-y-4 px-2 py-8 md:px-10 tracking-wide border text-center md:text-start border-[#FFFFFF4D] backdrop-blur-lg rounded-[20px] shadow-[0px_8px_32px_0px_#1F268712] font-sf-pro">
                        <h4 className="font-semibold text-gray-900 text-xl px-5 md:px-0 pb-0 md:pb-4">
                            Is there a free trial?
                        </h4>
                        <p>
                            We offer a free Discovery plan with limited features that you can use indefinitely. For paid plans, 
                            we offer a 14-day money-back guarantee if you&apos;re not satisfied with our service.
                            
                        </p>
                    </div>

                    <div className="bg-white space-y-4 px-2 py-8 md:px-10 tracking-wide border text-center md:text-start border-[#FFFFFF4D] backdrop-blur-lg rounded-[20px] shadow-[0px_8px_32px_0px_#1F268712] font-sf-pro">
                        <h4 className="font-semibold text-gray-900 text-xl px-5 md:px-0 pb-0 md:pb-4">
                            What payment methods do you accept?
                        </h4>
                        <p>
                            We accept all major credit cards (Visa, Mastercard, American Express), 
                            PayPal, and for annual plans, we also accept bank transfers and wire transfers.
                            
                        </p>
                    </div>

                    <div className="bg-white space-y-4 px-2 py-8 md:px-10 tracking-wide border text-center md:text-start border-[#FFFFFF4D] backdrop-blur-lg rounded-[20px] shadow-[0px_8px_32px_0px_#1F268712] font-sf-pro">
                        <h4 className="font-semibold text-gray-900 text-xl px-5 md:px-0 pb-0 md:pb-4">
                            Do you offer discounts for educational institutions?
                        </h4>
                        <p>
                            Yes, we offer special pricing for educational institutions and students. 
                            Please contact our sales team with your academic credentials for more information.
                        </p>
                    </div>

                    <div className="bg-white space-y-4 px-2 py-8 md:px-10 tracking-wide border text-center md:text-start border-[#FFFFFF4D] backdrop-blur-lg rounded-[20px] shadow-[0px_8px_32px_0px_#1F268712] font-sf-pro">
                        <h4 className="font-semibold text-gray-900 text-xl px-5 md:px-0 pb-0 md:pb-4">
                            What happens if I exceed my monthly design limit?
                        </h4>
                        <p>
                            If you reach your monthly design limit on the Creator plan, you&apos;ll need to wait until your next billing cycle or upgrade to a higher plan. 
                            Professional and Studio plans offer unlimited designs.
                        </p>
                    </div>

                </div>

                <div className="flex flex-col lg:px-130 items-center justify-center space-y-4">
                    <p className="text-gray-600">Still have questions?</p>
                    <button className="text-white bg-black rounded-[10px] px-12 py-4 cursor-pointer transition-colors hover:bg-gray-800">Contact Support</button>
                </div>

            </section>

            {/* ready to transform */}
            <section className="py-10 bg-black text-white space-y-4">

                <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <h3 className="font-dm-serif text-3xl md:text-4xl">
                        Ready to Transform Your Fashion Designs?
                    </h3>
                    <p className="text-gray-300 mb-8 text-xl font-sf-pro">
                        Join thousands of designers already using PATRONIK to bring their fashion ideas to life
                    </p>
                </div>

                <div className="flex flex-col items-center lg:flex-row justify-center gap-8 ">
                    <button className="flex items-center justify-center gap-2 bg-white text-black w-[256px] h-[58px] px-8 py-3 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4 mr-1"
                            aria-hidden="true"
                            >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                        Get Started Now
                    </button>
                    <button className="flex items-center justify-center gap-2 w-[256px] h-[58px] border border-gray-600 px-8 py-3 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-play w-4 h-4 mr-1"
                            aria-hidden="true"
                            >
                            <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
                            <circle cx={12} cy={12} r={10} />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row items-center  justify-center gap-8 mt-12">
                    <div className="flex gap-2 items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shield-check inline-block"
                            aria-hidden="true"
                            >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>14-day money-back guarantee</span>
                    </div>

                    <div className="flex gap-2 items-center gap-3">
                        <img src="https://frontend-rho-nine-42.vercel.app/icons/Icon-649.svg" alt="" />
                        <span>24/7 customer support</span>
                    </div>
                    
                    <div className="flex gap-2 items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-lock-keyhole inline-block"
                            aria-hidden="true"
                            >
                            <circle cx={12} cy={16} r={1} />
                            <rect x={3} y={10} width={18} height={12} rx={2} />
                            <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                        </svg>

                        <span>Secure payment</span>
                    </div>
                </div>

            </section>

        </>
    )
}