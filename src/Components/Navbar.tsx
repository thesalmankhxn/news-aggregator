import { PageLayoutCN } from "@/Layouts";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav
      className={cn(
        PageLayoutCN.container,
        "flex justify-between items-center"
      )}
    >
      <div className="text-[20px] font-bold">SK77 NEWS+</div>
    </nav>
  );
};

export default Navbar;
