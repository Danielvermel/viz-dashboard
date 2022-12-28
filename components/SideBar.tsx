import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const navItems = [
    {
        name: "Home",
        url: "/",
        icon: <HomeIcon className="h-5 w-5" />
    },
    {
        name: "Account",
        url: "",
        icon: <CreditCardIcon className="h-5 w-5" />
    },
    {
        name: "Billing",
        url: "",
        icon: <UserIcon className="h-5 w-5" />
    }
];

export const sideBar = forwardRef(({ showNav }, ref) => {
    const router = useRouter();

    return (
        <div ref={ref} className="bg-gray-700 fixed w-56 h-full bg-white shadow-sm">
            <div className="flex justify-center mt-6 mb-14">
                <picture>
                    <img className="w-32 h-auto" src="logo.png" alt="company logo" />
                </picture>
            </div>

            <div className="flex flex-col">
                {navItems.map((link, index) => (
                    <Link href={link.url} key={index}>
                        <div
                            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                                router.pathname == link.url
                                    ? "bg-violet-700 text-white"
                                    : "text-white hover:bg-violet-500 hover:text-white"
                            }`}
                        >
                            <div className="mr-2">{link.icon}</div>
                            <div>
                                <p>{link.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
});

sideBar.displayName = "SideBar";

export default sideBar;
