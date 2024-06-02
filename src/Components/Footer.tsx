import { PageLayoutCN } from "@/Layouts";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer
      className={cn(PageLayoutCN.sectionContainer, "bg-black-2 !py-9 mt-14")}
    >
      <p className="text-center text-white">© 2024 SK77</p>
    </footer>
  );
};

export default Footer;
