import labels from "@/lib/labels";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center shadow-md">
      <h1 className="text-cl font-bold">{labels.home.headline}</h1>
      <nav className="space-x-4">
        <Link href={"/"}>{labels.nav.home}</Link>
        <Link href={"/about"}>{labels.nav.about}</Link>
        <Link href={"/projects"}>{labels.nav.projects}</Link>
        <Link href={"/contact"}>{labels.nav.contact}</Link>
      </nav>
    </header>
  );
};

export default Header;
