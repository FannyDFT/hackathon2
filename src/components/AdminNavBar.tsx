import Link from "next/link";
import React from "react";

export default function AdminNavBar() {
  return (
    <div className="">
      <nav className="bg-blue-800 flex flex-row h-32 text-white justify-around p-5 items-center">
        <Link href="/allcars">All cars</Link>
        <Link href="/availablecars">Available cars</Link>
        <Link href="/rentedcars">Rented cars</Link>
        <Link href="/carsmaintenance">Cars under maintenance</Link>
      </nav>
    </div>
  );
}
