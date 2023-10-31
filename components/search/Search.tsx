// "use client";
// import useDebounce from "@/hooks/useDebounce";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// export interface Notice {
//   date_of_birth: string;
//   nationalities: string[];
//   entity_id: string;
//   forename: string;
//   name: string;
//   _links: Links;
// }

// export interface Links {
//   self: Images;
//   images: Images;
//   thumbnail: Images;
// }

// export interface Images {
//   href: string;
// }

// export default function Search() {
//   const [search, setSearch] = useState<string | null>();
//   const [notices, setNotices] = useState<Notice[]>([]);
//   const [loading, setLoading] = useState(false);

//   const debouncedSearch = useDebounce(search, 400);

//   const getSearch = async () => {
//     setLoading(true);
//     setNotices([])
//     const res = await fetch(
//       `https://ws-public.interpol.int/notices/v1/red?forename=${debouncedSearch}&resultPerPage=200`,
//       { cache: "no-store" }
//     );
//     const data = await res.json();
//     setNotices(data?._embedded?.notices);
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (debouncedSearch) {
//       getSearch();
//     }
//   }, [debouncedSearch, getSearch]);

//   console.log(notices);

//   return (
//     <div>
//       <input
//         className="max-w-5xl w-full bg-white border border-sky-900 rounded p-4 focus:outline-none"
//         placeholder="Search Interpol"
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {loading ? <div>Loading...</div> : ""}
//       {notices.map((notice) => (
//         <div key={notice.entity_id}>
//           {notice._links?.thumbnail?.href && (
//             <>
//               <Image
//                 src={notice._links?.thumbnail?.href}
//                 width="100"
//                 height="100"
//                 alt={notice.name}
//               />
//               {notice.name}
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
