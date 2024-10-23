import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '../ui/dropdown-menu';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

type Props = {};

export default function InfoDropdown({}: Props) {
  return (
    <div className="fixed bottom-9 right-9">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center w-12 h-12 bg-primary-hover text-white rounded-full shadow-lg dropdown-trigger">
          <HiOutlineInformationCircle size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
          <DropdownMenuLabel><span className='text-primary-hover font-bold'>Bloomya Pansiyon</span> | Antalyadaki Eviniz</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='hover:bg-green-500 hover:text-white transition duration-200'>
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/+905055343030"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp İletişimi
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaEnvelope className="text-red-400" />
            <a
              href="mailto:reservation@bloomtalyahotel.com.tr"
              className="text-blue-500 hover:underline"
            >
              E-posta Gönder
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaPhone size={5} className="text-blue-500" />
            <a
              href="tel:+905055343030"
              className="text-blue-500 hover:underline"
            >
              Telefonla Ara
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
