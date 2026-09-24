// "use client";

// import { useEffect, useState } from "react";
// import {
//   Linkedin,
//   Twitter,
//   Mail,
//   ArrowUpRight,
//   Users,
// } from "lucide-react";
// import { supabase, TeamMember } from "@/lib/supabase/client";

// export function TeamSection() {
//   const [members, setMembers] = useState<TeamMember[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadMembers = async () => {
//       const { data, error } = await supabase
//         .from("team_members")
//         .select("*")
//         .order("order_index", { ascending: true });

//       if (!error) {
//         setMembers((data as TeamMember[]) || []);
//       }

//       setLoading(false);
//     };

//     loadMembers();

//     const channel = supabase
//       .channel("team-members-live")
//       .on(
//         "postgres_changes",
//         {
//           event: "*",
//           schema: "public",
//           table: "team_members",
//         },
//         () => {
//           loadMembers();
//         }
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, []);

//   if (loading) {
//     return (
//       <section
//         id="team"
//         className="relative py-28 bg-[#080808] text-white"
//       >
//         <div className="max-w-7xl mx-auto px-6 flex justify-center">
//           <div className="w-8 h-8 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
//         </div>
//       </section>
//     );
//   }

//   if (!members.length) {
//     return null;
//   }

//   return (
//     <section
//       id="team"
//       className="relative py-28 md:py-36 overflow-hidden bg-[#080808]"
//     >
//       {/* Background glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-10 left-[-180px] w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

//         <div className="absolute bottom-0 right-[-180px] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
//             backgroundSize: "70px 70px",
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Section heading */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6">
//             <Users className="w-4 h-4" />
//             Our Team
//           </div>

//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.05] text-white">
//             Meet the people
//             <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               behind our work
//             </span>
//           </h2>

//           <p className="mt-6 text-gray-400 text-base md:text-lg leading-8 max-w-2xl mx-auto">
//             Our talented team brings together strategy, creativity,
//             technology and experience to create meaningful digital
//             experiences.
//           </p>
//         </div>

//         {/* Team cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//           {members.map((member, index) => (
//             <article
//               key={member.id}
//               className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_30px_90px_rgba(37,99,235,.16)]"
//             >
//               {/* Image */}
//               <div className="relative aspect-[4/4.5] overflow-hidden bg-gradient-to-br from-blue-950 via-[#101010] to-black">
//                 {member.photo_url ? (
//                   <img
//                     src={member.photo_url}
//                     alt={member.name}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <Users className="w-20 h-20 text-blue-500/20" />
//                   </div>
//                 )}

//                 {/* Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

//                 {/* Number */}
//                 <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
//                   <span className="text-xs text-gray-300 font-medium">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 {/* Member info */}
//                 <div className="absolute bottom-5 left-5 right-5">
//                   {member.role && (
//                     <p className="text-blue-400 text-sm font-semibold mb-1">
//                       {member.role}
//                     </p>
//                   )}

//                   <h3 className="text-2xl font-bold text-white">
//                     {member.name}
//                   </h3>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 {member.bio && (
//                   <p className="text-gray-400 text-sm leading-6 line-clamp-3">
//                     {member.bio}
//                   </p>
//                 )}

//                 <div className="flex items-center justify-between gap-4 mt-6 pt-5 border-t border-white/10">
//                   {/* Social */}
//                   <div className="flex gap-2">
//                     {member.linkedin_url && (
//                       <a
//                         href={member.linkedin_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label={`${member.name} LinkedIn`}
//                         className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
//                       >
//                         <Linkedin className="w-4 h-4" />
//                       </a>
//                     )}

//                     {member.twitter_url && (
//                       <a
//                         href={member.twitter_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label={`${member.name} Twitter`}
//                         className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
//                       >
//                         <Twitter className="w-4 h-4" />
//                       </a>
//                     )}

//                     {member.email && (
//                       <a
//                         href={`mailto:${member.email}`}
//                         aria-label={`Email ${member.name}`}
//                         className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
//                       >
//                         <Mail className="w-4 h-4" />
//                       </a>
//                     )}
//                   </div>

//                   <a
//                     href="#contact"
//                     className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
//                   >
//                     Connect
//                     <ArrowUpRight className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Here’s a cleaner, more premium version with **no profile pictures**. The card uses gradients, glassmorphism, initials, subtle glow, hover effects, and better spacing.

//  Updated TeamSection without pictures


"use client";

import { useEffect, useState } from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Users,
  Sparkles,
} from "lucide-react";
import { supabase, TeamMember } from "@/lib/supabase/client";

export function TeamSection() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMembers = async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("order_index", { ascending: true });

      if (!error) {
        setMembers((data as TeamMember[]) || []);
      }

      setLoading(false);
    };

    loadMembers();

    const channel = supabase
      .channel("team-members-live")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "team_members",
        },
        () => loadMembers()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return (
      <section
        id="team"
        className="relative py-28 bg-[#05070b] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
        </div>
      </section>
    );
  }

  if (!members.length) return null;

  return (
    <section
      id="team"
      className="relative py-28 md:py-36 overflow-hidden bg-[#05070b]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] text-blue-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Team
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.05] text-white">
            Meet the people
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              behind our work
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-base md:text-lg leading-8 max-w-2xl mx-auto">
            A talented team combining strategy, creativity, technology,
            and experience to build meaningful digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member, index) => {
            const initials = member.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <article
                key={member.id}
                className="group relative rounded-[28px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.045] hover:shadow-[0_30px_100px_rgba(37,99,235,0.14)]"
              >
                {/* Top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/10 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Profile Header */}
                <div className="relative px-7 pt-7">
                  <div className="flex items-start justify-between">
                    {/* Initials */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />

                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-cyan-400/10 border border-blue-400/20 flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-br from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                          {initials}
                        </span>
                      </div>
                    </div>

                    {/* Number */}
                    <span className="text-xs font-medium text-gray-600 tracking-widest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Name */}
                  <div className="mt-7">
                    {member.role && (
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-400 font-semibold mb-2">
                        {member.role}
                      </p>
                    )}

                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-7 mt-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Content */}
                <div className="px-7 py-6">
                  {member.bio ? (
                    <p className="text-gray-400 text-sm leading-7 min-h-[84px] line-clamp-3">
                      {member.bio}
                    </p>
                  ) : (
                    <p className="text-gray-600 text-sm leading-7 min-h-[84px]">
                      Building ideas, solving problems, and creating
                      meaningful digital experiences.
                    </p>
                  )}

                  {/* Bottom */}
                  <div className="flex items-center justify-between gap-4 mt-7">
                    {/* Social */}
                    {/* <div className="flex gap-2">
                      {member.linkedin_url && (
                        <a
                          href={member.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.035] flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/10 transition-all"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}

                      {member.twitter_url && (
                        <a
                          href={member.twitter_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Twitter`}
                          className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.035] flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/10 transition-all"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}

                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          aria-label={`Email ${member.name}`}
                          className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.035] flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/10 transition-all"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div> */}

                    <a
                      href="#contact"
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-cyan-300 transition-colors"
                    >
                      Connect
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                  
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
