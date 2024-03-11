import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <nav className="bg-indigo-500 w-96 h-16 rounded-t-xl">
        <ul className="flex justify-center items-center gap-x-10 text-3xl text-white p-4">
          <li>
            <Link
              className="opacity-50 hover:opacity-100 focus:opacity-100"
              href="/SSG"
            >
              SSG
            </Link>
          </li>
          <li>
            <Link
              className="opacity-50 hover:opacity-100 focus:opacity-100"
              href="/ISR"
            >
              ISR
            </Link>
          </li>
          <li>
            <Link
              className="opacity-50 hover:opacity-100 focus:opacity-100"
              href="/SSR"
            >
              SSR
            </Link>
          </li>
          <li>
            <Link
              className="opacity-50 hover:opacity-100 focus:opacity-100"
              href="/CSR"
            >
              CSR
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
