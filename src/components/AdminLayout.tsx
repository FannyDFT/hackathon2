import AdminNavBar from "./AdminNavBar";

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: DashBoardLayoutProps) {
  return (
    <div className="">
      <AdminNavBar />
      <main>{children}</main>
    </div>
  );
}
