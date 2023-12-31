import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <div className="bg-[#171E31]">
        <nav>
          <ul>
            <li>
              <Link href="/"></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
