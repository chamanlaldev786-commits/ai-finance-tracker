"use client";

import { useMemo, useState } from "react";

export function useSearch(data = []) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return data;

    return data.filter((item) =>
      JSON.stringify(item)
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [data, query]);

  return {
    query,
    setQuery,
    filtered,
  };
}
