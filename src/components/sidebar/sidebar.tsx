import React from 'react';
import { Mail, Contact, CalendarDays, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Avatar from '../../../public/images/avatar.png';
import Image from 'next/image';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    link: 'mailto:richard@example.com',
    text: 'richard@example.com',
  },
  {
    icon: Contact,
    label: 'Phone',
    link: 'tel:+12133522795',
    text: '+1 (213) 352-2795',
  },
  {
    icon: CalendarDays,
    label: 'Birthday',
    text: 'June 23, 1982',
    dateTime: '1982-06-23',
  },
  {
    icon: MapPin,
    label: 'Location',
    text: 'Sacramento, California, USA',
    isAddress: true,
  },
];

const socialMediaLinks = [
  {
    icon: Facebook,
    link: '#',
  },
  {
    icon: Twitter,
    link: '#',
  },
  {
    icon: Instagram,
    link: '#',
  },
];

const Sidebar = () => {
  return (
    <aside className="bg-[#1E1E1F] border-orange-100 text-white w-64 h-screen flex flex-col rounded-[20px] items-center p-6 sticky top-16 z-10">
      <div className="text-center mb-6">
        <div className="bg-[#373737] rounded-full w-20 h-20 flex items-center justify-center mb-4">
          <Image src={Avatar} alt="Richard hanrick" width="80" height="80" className="rounded-full" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-1" title="Richard hanrick">Sunil Yadav</h1>
          <p className="mt-2 py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center">
            Web developer
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="border-t border-gray-600 my-4"></div>
        <ul className="space-y-4">
          {contactDetails.map((detail, index) => (
            <li key={index} className="flex items-center space-x-4">
              <div className="bg-black w-10 h-10 rounded-[50px] flex items-center justify-center">
                <detail.icon size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{detail.label}</p>
                {detail.link ? (
                  <a href={detail.link} className="text-white">
                    {detail.text}
                  </a>
                ) : detail.dateTime ? (
                  <time dateTime={detail.dateTime} className="text-white">
                    {detail.text}
                  </time>
                ) : detail.isAddress ? (
                  <address className="text-white not-italic">{detail.text}</address>
                ) : (
                  <span className="text-white">{detail.text}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-600 my-4"></div>

        <ul className="flex space-x-4 justify-center">
          {socialMediaLinks.map((social, index) => (
            <li key={index}>
              <a href={social.link} className="text-xl text-white hover:text-gray-400">
                <social.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
