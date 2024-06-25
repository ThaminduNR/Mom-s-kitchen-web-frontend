import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-[170px] h-[30px] overflow-hidden items-center px-3 font-bold text-white hover:text-orange-500 gap-2">
        <div className="flex items-center gap-2">
          <CircleUserRound className="text-orange-500" size={20} />
          <div>{user?.email}</div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuItem>
          <Link
            to={"/manage-restaurant"}
            className="font-bold text-black hover:text-orange-500"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to={"/user-profile"}
            className="font-bold text-black hover:text-orange-500"
          >
            Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-orange-500"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
