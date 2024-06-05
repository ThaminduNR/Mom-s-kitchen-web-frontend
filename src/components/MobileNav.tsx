import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={24} className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>MOM'S KITCHEN</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500 text-red-600">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
