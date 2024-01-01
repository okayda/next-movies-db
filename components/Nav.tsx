import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="md:p-6">
      <div className="flex items-center justify-between bg-[#171E31] p-5 md:rounded-md xl:hidden">
        <Link href="/">
          <Image src="/assets/logo.svg" width={24} height={19} alt="" />
        </Link>

        <nav className="w-1/2 xs:w-2/5">
          <ul className="flex w-full justify-between">
            <li>
              <Link href="/">
                <Image
                  src="/assets/nav-home.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="md:h-[20px] md:w-[20px]"
                />
              </Link>
            </li>

            <li>
              <Link href="/">
                <Image
                  src="/assets/nav-films.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="md:h-[20px] md:w-[20px]"
                />
              </Link>
            </li>

            <li>
              <Link href="/">
                <Image
                  src="/assets/nav-tv.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="md:h-[20px] md:w-[20px]"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/">
          <Image src="/assets/avatar.png" width={24} height={24} alt="" />
        </Link>
      </div>
    </header>
  );
}
