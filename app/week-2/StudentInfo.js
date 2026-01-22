import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Sneha Thapa Chhetri</p>

      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/S-neha30/cprg306-assignments">
          https://github.com/S-neha30/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
