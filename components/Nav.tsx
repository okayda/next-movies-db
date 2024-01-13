import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="pb-6 md:py-6 md:pb-12">
      <div className="shadow-light flex items-center justify-between rounded-md bg-[#1c1c1c] bg-opacity-30 px-5 py-4 backdrop-blur-lg backdrop-filter">
        <Link href="/">
          <Image src="/assets/logo.svg" width={24} height={19} alt="" />
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
              <Link href="/movie">
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
              <Link href="/">
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
            className="animate-heartbeat shadow-light rounded-full lg:h-[30px] lg:w-[30px] "
          />
        </Link>
      </div>
    </header>
  );
}
