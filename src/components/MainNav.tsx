import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant="ghost"
          className="w-[110px] h-[40px] font-bold text-orange-500 hover:text-orange-500 hover:bg-white border-2 border-orange-400 hover:border-orange-500"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
