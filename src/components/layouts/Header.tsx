export const Header = () => {
    return (
        <header className="w-full fixed z-10 flex h-16 lg:h-24 bg-white/50 backdrop-blur-[2px]">
            <div className="flex gap-2 items-center justify-between w-full">
                {/* logo */}
                <a className="pl-2 lg:px-10 xl:px-20" href="">
                <img
                    className="w-32 lg:w-48"
                    src="https://frontend-rho-nine-42.vercel.app/logo.svg"
                    alt=""
                />
                </a>
                {/* nav */}
                <nav id="menu" className="hidden lg:flex">
                <a
                    className="mr-8 text-[20px] border-b-4 border-black font-bold"
                    href=""
                >
                    Home
                </a>
                <a className="mr-8 text-[20px]" href="about">
                    About Us
                </a>
                <a className="mr-8 text-[20px]" href="#pricing">
                    Pricing
                </a>
                <a className="mr-8 text-[20px]" href="#contact">
                    Contact
                </a>
                </nav>
                {/* khoi thu 3 */}
                <div className="flex items-center gap-4">
                <div
                    className="flex relative group items-center rounded-lg"
                    id="languages"
                >
                    <button className="hidden lg:flex items-center gap-2 w-full bg-white rounded-lg py-2 px-4 text-[16px] ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon mr-2"
                        style={{
                        width: "1em",
                        height: "1em",
                        verticalAlign: "middle",
                        fill: "currentColor",
                        overflow: "hidden"
                        }}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                    >
                        <path
                        d="M1.08544 533.38112c11.32544 272.34304 235.80672 490.61888 510.91456 490.61888s499.58912-218.27584 510.91456-490.61888c0.6144-1.69984 1.08544-3.46112 1.08544-5.36576 0-1.14688-0.4096-2.1504-0.63488-3.19488 0.1024-4.28032 0.63488-8.47872 0.63488-12.8 0-282.29632-229.70368-512-512-512s-512 229.70368-512 512c0 4.32128 0.55296 8.51968 0.63488 12.8-0.22528 1.06496-0.63488 2.048-0.63488 3.19488 0 1.92512 0.47104 3.6864 1.08544 5.36576zM797.47072 727.73632c-42.20928-17.67424-87.51104-31.3344-134.88128-40.67328 5.05856-46.4896 8.02816-94.78144 8.97024-143.03232l159.35488 0c-2.90816 65.72032-14.58176 127.77472-33.44384 183.7056zM862.88384 544.01024l127.488 0c-5.95968 89.78432-36.41344 172.89216-85.21728 242.52416-24.28928-17.05984-50.46272-32.60416-78.62272-46.08 20.64384-59.8016 33.34144-126.17728 36.352-196.44416zM396.45184 713.15456c37.70368-5.89824 76.3904-9.15456 115.54816-9.15456s77.86496 3.25632 115.52768 9.15456c-22.20032 170.72128-70.71744 278.85568-115.52768 278.85568s-93.30688-108.1344-115.54816-278.85568zM445.05088 981.25824c-88.02304-28.22144-162.48832-111.06304-207.42144-223.49824 39.87456-16.7936 82.75968-29.92128 127.67232-38.95296 14.68416 111.86176 41.53344 209.34656 79.74912 262.43072zM392.76544 342.69184c38.95296 6.02112 78.88896 9.3184 119.23456 9.3184s80.2816-3.29728 119.23456-9.3184c5.50912 51.83488 8.76544 108.42112 8.76544 169.30816l-256 0c0-60.88704 3.25632-117.47328 8.76544-169.30816zM639.52896 544.01024c-0.90112 48.80384-3.76832 94.76096-8.31488 137.3184-38.912-6.02112-78.80704-9.3184-119.1936-9.3184s-80.2816 3.29728-119.23456 9.3184c-5.5296-52.03968-7.5776-97.83296-8.31488-137.3184l255.0784 
                                0zM658.71872 718.80704c44.93312 9.03168 87.77728 22.13888 127.67232 38.95296-44.93312 112.41472-119.3984 195.25632-207.42144 223.49824 38.17472-53.08416 65.024-150.56896 79.74912-262.43072zM672.01024 512c0-58.75712-3.25632-118.272-9.40032-175.04256 47.37024-9.33888 92.672-23.04 134.88128-40.67328 21.89312 64.9216 34.52928 138.07616 34.52928 215.71584l-160.01024 0zM658.71872 305.19296c-14.72512-111.88224-41.53344-209.36704-79.7696-262.43072 88.02304 28.22144 162.48832 111.06304 207.42144 223.47776-39.87456 16.7936-82.71872 29.96224-127.65184 38.95296zM627.54816 310.84544c-37.70368 5.87776-76.3904 9.15456-115.54816 9.15456s-77.86496-3.25632-115.54816-9.15456c22.24128-170.72128 70.7584-278.85568 115.54816-278.85568s93.30688 108.1344 115.54816 278.85568zM365.28128 305.19296c-44.93312-9.03168-87.77728-22.13888-127.67232-38.95296 44.93312-112.41472 119.3984-195.25632 207.42144-223.47776-38.17472 53.08416-65.024 150.56896-79.74912 262.43072zM361.41056 336.95744c-6.144 56.77056-9.40032 116.28544-9.40032 175.04256l-160.01024 0c0-77.63968 12.63616-150.79424 34.52928-215.73632 42.20928 17.65376 87.51104 31.3344 134.88128 40.71424zM352.44032 544.01024c0.9216 48.25088 3.91168 96.54272 8.97024 143.07328-47.37024 9.33888-92.672 23.04-134.88128 40.67328-18.8416-55.93088-30.53568-117.98528-33.44384-183.74656l159.35488 0zM197.44768 740.4544c-28.16 13.49632-54.31296 29.02016-78.60224 46.08-48.80384-69.632-79.2576-152.69888-85.21728-242.52416l127.488 0c3.01056 70.26688 15.70816 136.64256 36.31104 196.44416zM138.01472 812.15488c21.9136-15.31904 45.34272-29.51168 70.61504-41.75872 32.13312 79.52384 78.37696 145.53088 133.95968 190.17728-80.83456-30.65856-151.32672-82.18624-204.57472-148.41856zM681.41056 960.55296c55.62368-44.60544 101.82656-110.65344 133.95968-190.17728 25.27232 12.288 48.70144 26.43968 70.61504 41.75872-53.248 66.27328-123.74016 117.80096-204.57472 148.41856zM864.01024 512c0-82.14528-13.70112-159.58016-37.43744-228.4544 28.16-13.49632 54.33344-29.02016 78.62272-46.08 54.53824 77.88544 86.81472 172.4416 86.81472 274.5344l-128 0zM886.00576 211.84512c-21.9136 
                                15.31904-45.34272 29.47072-70.61504 41.75872-32.13312-79.52384-78.37696-145.57184-133.95968-190.17728 
                                80.7936 30.65856 151.28576 82.18624 204.57472 148.41856zM342.58944 63.44704c-55.62368 44.60544-101.82656 110.65344-133.95968 190.17728-25.31328-12.288-48.70144-26.46016-70.61504-41.79968 53.248-66.23232 123.74016-117.76 204.57472-148.3776zM118.84544 237.4656c24.24832 17.05984 50.44224 32.58368 78.60224 46.08-23.73632 68.87424-37.43744 146.30912-37.43744 228.4544l-128 0c0-102.07232 32.29696-196.64896 86.85568-274.5344z"
                        />
                    </svg>
                    EN
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" />
                    </svg>
                    </button>
                    {/* language options */}
                    <div
                    id="language-options"
                    className="z-50 bg-white absolute top-full rounded-xl hidden overflow-hidden group-hover:flex flex-col"
                    >
                    <button className="hidden lg:flex items-center w-full p-2 mr-4 text-[16px] hover:bg-gray-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 36 36"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--twemoji w-6 h-6 mr-1"
                        preserveAspectRatio="xMidYMid meet"
                        >
                        <path
                            fill="#00247D"
                            d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
                        />
                        <path
                            fill="#CF1B2B"
                            d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"
                        />
                        <path
                            fill="#EEE"
                            d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"
                        />
                        <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z" />
                        </svg>
                        English
                    </button>
                    <button className="hidden lg:flex items-center w-full  p-2 mr-4 text-[16px] hover:bg-gray-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 36 36"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--twemoji w-6 h-6 mr-1"
                        preserveAspectRatio="xMidYMid meet"
                        >
                        <path
                            fill="#ED2939"
                            d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"
                        />
                        <path
                            fill="#002495"
                            d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"
                        />
                        <path fill="#EEE" d="M12 5h12v26H12z" />
                        </svg>
                        Français
                    </button>
                    </div>
                </div>
                <div className="hidden gap-3 lg:flex">
                    <button className="flex justify-center items-center gap-2 lg:bg-white w-18 lg:w-[110px] rounded-lg p-2 text-[14px] lg:text-[16px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hidden lg:flex lucide lucide-user w-4 h-4"
                        aria-hidden="true"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                    </svg>
                    Sign In
                    </button>
                    <button className="flex justify-center items-center bg-black w-28 lg:w-[140px] gap-2 rounded-lg p-2 text-white mr-10 text-[14px] lg:text-[16px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hidden lg:flex lucide lucide-arrow-right w-4 h-4"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                    Get Started
                    </button>
                </div>
                <div className="flex gap-2 items-center lg:hidden">
                    <button className="text-sm ">Sign In</button>
                    <button className="bg-black rounded-lg w-28 py-2 h-full text-sm text-white ">
                        Get Started
                    </button>
                </div>
                </div>
                <div id="mobile-menu" className="flex lg:hidden mr-4">
                <button>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                </button>
                </div>
            </div>
            </header>

    )
}