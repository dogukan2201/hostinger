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
        <Button className="text-gray-600 bg-transparent hover:bg-transparent hover:text-[#F7C873] ">
          Odalarımız
        </Button>
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
