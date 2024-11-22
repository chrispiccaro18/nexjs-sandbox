import Link from "next/link";
import Search from "@/components/search";

import './globals.css';

export default function Page() {
    return (
      <>
        <Search />
        <div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">10 min</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">10 - 30 min</button>
          <button>30+ min</button>
        </div>
      </>
    );
  }
  