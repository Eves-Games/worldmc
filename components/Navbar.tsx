import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { Book, Menu } from "lucide-react";
import Image from "next/image";
import { docsItems, mainNavItems, secondaryNavItems } from "@/lib/Navigation";

export default function Navbar() {
  return (
    <div className="bg-base-300 shadow">
      <nav className="container navbar">
        <div className="flex-none lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" aria-label="open sidebar" className="btn btn-ghost">
              <Menu className="size-5" />
            </div>
            <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-300 p-2 shadow">
              {mainNavItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <details>
                  <summary>
                    <Book className="size-4" /> Docs
                  </summary>
                  <ul className="w-fit p-2">
                    {docsItems.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-nowrap">
                          {item.icon}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              {secondaryNavItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} target={item.external ? "_blank" : undefined}>
                    {item.name} {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={"/worldmc.png"} alt="WorldMC Icon" className="size-8" width={100} height={100} />
            WorldMC
          </Link>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal hidden px-1 lg:flex">
            {mainNavItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <details>
                <summary>
                  <Book className="size-4" /> Docs
                </summary>
                <ul className="z-50 w-fit bg-base-300 p-2">
                  {docsItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-nowrap">
                        {item.icon}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {secondaryNavItems.map((item) => (
              <li key={item.name} className="hidden lg:block">
                <Link href={item.href} target={item.external ? "_blank" : undefined}>
                  {item.name} {item.icon}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
