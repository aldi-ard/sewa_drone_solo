"use client";

import Link from "next/link";
import { useState } from "react";

export default function WhatsAppButton() {
  const [message, setMessage] = useState("");

//   const phoneNumber = "6288802074999";

  const waLink = `https://wa.me/6288802074999?text=WEB:${encodeURIComponent(
    message
  )}`;

  return (
    <form action="" className="mt-5">
        <div className="mb-5">
            <input
            type="text"
            placeholder="Tulis pesan..."
            value={message}
            className="w-full p-3 rounded bg-white"
            onChange={(e) => setMessage(e.target.value)}
        />
        </div>
        <Link href={waLink}>
            <button className="bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500">Kirim</button>
        </Link>
    </form>

  );
}

