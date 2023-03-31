import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://linkedin.com",
        },
        {
            id: 3,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:sachindabgar1325@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillFileEarmarkPdfFill size={30} />
                </>
            ),
            href: "https://drive.google.com/file/d/1goz3eUGLpxNfjIkrRc8lvytAAtRhqreG/view?usp=sharing",
            style: "rounded-br-md",
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map(({ id, child, href, style, download }) => (
                        <li key={id} className={`flex justify-between w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md cursor-pointer hover:ml-[-10px] duration-300 ${style}`}>
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                target="_blank"
                                rel="noreferrer"
                            >

                                {child}

                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
}

export default SocialLinks;
