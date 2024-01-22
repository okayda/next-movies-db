import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="pb-6 md:py-6 md:pb-12">
      <div className="shadow-nav flex items-center justify-between rounded-md bg-[#141414] px-5 py-4">
        <Link href="/">
          <Image src="/logo.svg" width={24} height={19} alt="" />
        </Link>

        <nav className="w-1/2 xs:w-2/5 lg:w-1/3">
          <ul className="flex w-full justify-between">
            <li>
              <Link href="/">
                <Image
                  src="/assets/nav-home.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="transformtransition-transform hover:scale-125 md:h-[20px] md:w-[20px]"
                />
              </Link>
            </li>

            <li>
              <Link href="/movie/genres">
                <Image
                  src="/assets/nav-films.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="transform transition-transform hover:scale-125 md:h-[20px] md:w-[20px]"
                />
              </Link>
            </li>

            <li>
              <Link href="/series/genres">
                <Image
                  src="/assets/nav-tv.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="transform transition-transform hover:scale-125 md:h-[20px] md:w-[20px]"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/" className="relative">
          <Image
            src="/assets/avatar.png"
            width={24}
            height={24}
            alt=""
            className="shadow-light animate-heartbeat rounded-full lg:h-[30px] lg:w-[30px] "
          />
        </Link>
      </div>
    </header>
  );
}
