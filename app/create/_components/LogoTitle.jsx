"use client";

import React, { useState, useEffect } from "react";
import HeadingDesc from "./HeadingDesc";
import Lookup from "@/app/_data/Lookup";
import { useSearchParams } from "next/navigation";

export default function LogoTitle({ onHandleInputChange, formdata }) {
  const searchparam = useSearchParams();
  const [title, setTitle] = useState(searchparam?.get("title") ?? formdata?.title ?? "");

  // keep formdata in sync with local state
  useEffect(() => {
    if (formdata?.title !== title) {
      onHandleInputChange(title);
    }
  }, [title]);

  return (
    <div className="my-10">
      <HeadingDesc title={Lookup?.LogoTitle} desc={Lookup.LogoTitleDesc} />

      <input required
        placeholder={Lookup.InputTitlePlaceholder}
        className="mt-5 p-4 w-full border rounded-lg"
        value={title}   // controlled input
        onChange={(e) => setTitle(e.target.value)} // update local state
      />
    </div>
  );
}
