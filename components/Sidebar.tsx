import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="hidden md:block h-[100vh] w-[300px]">
      <Command className="rounded-none bg-secondary">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/">Dashbaord</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className="mr-2 h-4 w-4" />
              <Link href="/posts">Posts</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/post">Categories</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </aside>
  );
}

export default Sidebar;
