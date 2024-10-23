import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
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
            <Link href="/rooms">
              <span>Jakuzili Suite Oda</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <Link href="/rooms">
              <span>Jakuzili Suite Oda</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <span>Aile Odası</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <span>Standart Oda</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <span>Ekonomik Oda</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
            <span>Superior Standart Oda</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
