import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6
         lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">About</h3>

                        <p className="flex items-center gap-2 text-gray-400">
                            <FaPhoneAlt className="text-primary" /> +8801779-212229
                        </p>
                        <p className="flex items-center gap-2 text-gray-400">
                            <FaEnvelope className="text-primary" /> alaminhasan02598@gmail.com
                        </p>
                        <p className="flex items-center gap-2 text-gray-400">
                            <FaMapMarkerAlt className="text-primary" /> Gazipur, Bangladesh
                        </p>

                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#projects" className="text-gray-400
                         hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#about" className="text-gray-400
                         hover:text-white transition-colors">About</a></li>
                            <li><a href="#contact" className="text-gray-400
                         hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#privacy" className="text-gray-400
                         hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#terms" className="text-gray-400
                         hover:text-white transition-colors">Terms</a></li>

                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                        <ul className="flex space-x-4">
                            <GithubIcon className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"/>
                            <LinkedInIcon className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"/>
                            <EnvelopeIcon className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"/>


                        </ul>
                    </div>
                    
                </div>
                <div className="border-t w-full mx-auto border-gray-800 mt-8 pt-8 ">
                        <p className="text-gray-400 text-center">
                            &copy; {new Date().getFullYear()} Al-Amin. All rights reserved
                        </p>
                    </div>

            </div>

        </footer>
    )
}