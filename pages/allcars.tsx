import Link from "next/link";

export default function AllCarsAdmin() {
  return (
    <div className="">
      <div></div>
      <Link href="/addnewcaradmin">
        <button
          type="button"
          className=" border border-black bg-blue-700 text-white h-10 w-48 rounded-lg"
        >
          Add new car
        </button>
      </Link>
    </div>
  );
}
