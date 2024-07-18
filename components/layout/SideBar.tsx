"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/resume", label: "resume" },
];

function SideBar() {
  const pathname = usePathname();
  return (
    <div className="bg-green-300 w-[300px] min-h-screen">
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              className={pathname === link.href ? "text-blue-700" : ""}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
