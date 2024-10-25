import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function RoomDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="font-bold text-[13px] uppercase tracking-[3px] text-primary-hover hover:text-secondary transition-all border-none outline-none focus:outline-none">
          Odalarımız
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <Link href="/rooms">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">Tüm Odalarımız</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/jacuzziRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">Jakuzili Suite Oda</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/familyRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">Aile Odası</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/standardRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">Standart Oda</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/economicalRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">Ekonomik Oda</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/superiorRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">Superior Standart Oda</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
