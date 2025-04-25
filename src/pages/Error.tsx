import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl transition-transform hover:scale-110">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-500 text-center">
        It seems there was an unexpected error. Please try again later.
      </p>
      <Link
        to={"/"}
        className="inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      >
        Return to website
      </Link>
    </div>
  );
}
