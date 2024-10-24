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
        <button className="font-bold text-[13px] uppercase tracking-[3px] text-primary-hover hover:text-secondary transition-all" >
          Odalarımız
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <Link href="/rooms">
              <span>Tüm Odalarımız</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <Link href="/jakuzili">
              <span>Jakuzili Suite Oda</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <Link href="/rooms/aile-odasi">
              <span>Aile Odası</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <Link href="/rooms/standart-oda">
              <span>Standart Oda</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <Link href="/rooms/ekonomik-oda">
              <span>Ekonomik Oda</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <Link href="/rooms/superior-standart-oda">
              <span>Superior Standart Oda</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
