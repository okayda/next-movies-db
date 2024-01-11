import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="pb-6 md:py-6 md:pb-12">
      <div className="shadow-light flex items-center justify-between rounded-md bg-[#1c1c1c] bg-opacity-30 p-5 backdrop-blur-lg backdrop-filter xl:hidden">
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
