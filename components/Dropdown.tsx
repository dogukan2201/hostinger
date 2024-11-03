import Link from "next-intl/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function RoomDropdownMenu() {
  const t = useTranslations("Dropdown");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="font-bold text-[13px] uppercase tracking-[3px] text-primary-hover hover:text-secondary transition-all border-none outline-none focus:outline-none">
          {t("ourRooms")}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <Link href="/rooms">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">{t("allRooms")}</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/jacuzziRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">{t("jacuzziRoom")}</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/familyRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">{t("familyRoom")}</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/standardRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">{t("standardRoom")}</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/economicalRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">{t("economicalRoom")}</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/superiorRoom">
            <DropdownMenuItem className="text-gray-600 hover:text-accent transition-colors">
              <span className="font-primary">{t("superiorRoom")}</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
