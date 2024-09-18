"use client";

import { Search, ChevronDown, Flag, Building2, Users } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar({ placeholder }: { placeholder: string }): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const currentFilter = searchParams.get("filter");

  return (
    <div className="flex items-center justify-center gap-2">
      <label className="input input-bordered flex w-full items-center gap-2">
        <Search className="flex-shrink-0 opacity-70" />
        <input
          type="text"
          name="search"
          placeholder={placeholder}
          defaultValue={searchParams.get("query")?.toString()}
          aria-label={placeholder}
          onChange={(e) => handleChange("query", e.target.value)}
          className="w-full min-w-0"
        />
      </label>
      <div className="dropdown dropdown-end flex-none">
        <button tabIndex={0} className="btn">
          {currentFilter || "Residents"} <ChevronDown />
        </button>
        <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-1 w-52 rounded-box bg-base-200 p-2 shadow">
          <li>
            <button onClick={() => handleChange("filter", "Nations")}>
              <Flag className="size-4" /> Nations
            </button>
          </li>
          <li>
            <button onClick={() => handleChange("filter", "Towns")}>
              <Building2 className="size-4" /> Towns
            </button>
          </li>
          <li>
            <button onClick={() => handleChange("filter", "Residents")}>
              <Users className="size-4" /> Residents
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
