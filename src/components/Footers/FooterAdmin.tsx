import Link from "next/link";
import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="border-b-1 border-blueGray-200 mb-4" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 md:w-4/12">
              <div className="text-blueGray-500 py-1 text-center text-sm font-semibold md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <Link
                  href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                  className="text-blueGray-500 hover:text-blueGray-700 py-1 text-sm font-semibold"
                >
                  Creative Tim
                </Link>
              </div>
            </div>
            <div className="w-full px-4 md:w-8/12">
              <ul className="flex list-none flex-wrap justify-center  md:justify-end">
                <li>
                  <Link
                    href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 block py-1 px-3 text-sm font-semibold"
                  >
                    Creative Tim
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 block py-1 px-3 text-sm font-semibold"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://blog.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 block py-1 px-3 text-sm font-semibold"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 block py-1 px-3 text-sm font-semibold"
                  >
                    MIT License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
