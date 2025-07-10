import labels from "@/lib/labels";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-50 flex justify-between items-center shadow-md">
      <div className="container flex items-center justify-between h-16">
        <h1 className="text-heading-1 font-heading-3">
          {labels.home.headline}
        </h1>
        <nav className="flex gap-6 text-body">
          <Link href={"/"} className="hover:text-brand-600">
            {labels.nav.home}
          </Link>
          <Link href={"/about"} className="hover:text-brand-600">
            {labels.nav.about}
          </Link>
          <Link href={"/projects"} className="hover:text-brand-600">
            {labels.nav.projects}
          </Link>
          <Link href={"/contact"} className="hover:text-brand-600">
            {labels.nav.contact}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
