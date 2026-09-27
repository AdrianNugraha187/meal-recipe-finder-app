"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useTransition } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    startTransition(() => {
      if (query) {
        router.push(`/?q=${encodeURIComponent(query)}`);
      } else {
        router.push(`/`);
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">{isPending ? "Mencari..." : "cari"}</button>
      </form>
    </div>
  );
}
