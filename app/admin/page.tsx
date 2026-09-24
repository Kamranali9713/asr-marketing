"use client";

import { useEffect, useState, FormEvent } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase, TeamMember, SocialLink } from "@/lib/supabase/client";
import { Trash2, Pencil, Plus, LogOut, X } from "lucide-react";

const emptyMember = {
  name: "",
  role: "",
  bio: "",
  photo_url: "",
  linkedin_url: "",
  twitter_url: "",
  email: "",
  order_index: 0,
};

const emptyLink = { platform: "", url: "", order_index: 0 };

export default function AdminPage() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (session === undefined) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return session ? <Dashboard /> : <Login />;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 rounded-2xl glass border border-white/10 shadow-glow-blue space-y-5"
      >
        <h1 className="text-2xl font-bold text-gradient-blue text-center mb-2">Admin Login</h1>
        <p className="text-gray-400 text-sm text-center mb-4">
          Create this user first in your Supabase project (Authentication → Users).
        </p>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue-500 outline-none transition-colors"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue-500 outline-none transition-colors"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState<"team" | "social">("team");

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 sticky top-0 bg-black/90 backdrop-blur z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gradient-blue">ASR Marketing — Admin</h1>
          <button
            onClick={() => supabase.auth.signOut()}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
        <div className="container mx-auto px-6 flex gap-2 pb-3">
          {(["team", "social"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                tab === t
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              {t === "team" ? "Team Members" : "Social Links"}
            </button>
          ))}
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        {tab === "team" ? <TeamManager /> : <SocialManager />}
      </main>
    </div>
  );
}

function TeamManager() {
  const [items, setItems] = useState<TeamMember[]>([]);
  const [editing, setEditing] = useState<TeamMember | (typeof emptyMember) | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("team_members")
      .select("*")
      .order("order_index", { ascending: true });
    setItems((data as TeamMember[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id: string) => {
    if (!confirm("Delete this team member?")) return;
    await supabase.from("team_members").delete().eq("id", id);
    load();
  };

  const save = async (values: any) => {
    if (values.id) {
      const { id, ...rest } = values;
      await supabase.from("team_members").update(rest).eq("id", id);
    } else {
      await supabase.from("team_members").insert(values);
    }
    setEditing(null);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <button
          onClick={() => setEditing({ ...emptyMember })}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Member
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-400">No team members yet — add your first one.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((m) => (
            <div key={m.id} className="p-4 rounded-xl glass border border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold">{m.name}</p>
                  <p className="text-blue-400 text-sm">{m.role}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setEditing(m)} className="text-gray-400 hover:text-blue-400">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => remove(m.id)} className="text-gray-400 hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {m.bio && <p className="text-gray-400 text-sm">{m.bio}</p>}
            </div>
          ))}
        </div>
      )}

      {editing && (
        <MemberForm
          initial={editing}
          onCancel={() => setEditing(null)}
          onSave={save}
        />
      )}
    </div>
  );
}

function MemberForm({
  initial,
  onCancel,
  onSave,
}: {
  initial: any;
  onCancel: () => void;
  onSave: (v: any) => void;
}) {
  const [values, setValues] = useState(initial);

  const field = (key: string, label: string, type = "text") => (
    <div>
      <label className="block text-sm text-gray-400 mb-1">{label}</label>
      <input
        type={type}
        value={values[key] ?? ""}
        onChange={(e) =>
          setValues((v: any) => ({
            ...v,
            [key]: type === "number" ? Number(e.target.value) : e.target.value,
          }))
        }
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-lg p-6 rounded-2xl glass border border-white/10 shadow-glow-blue max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{values.id ? "Edit" : "Add"} Team Member</h3>
          <button onClick={onCancel}><X className="w-5 h-5 text-gray-400 hover:text-white" /></button>
        </div>
        <div className="space-y-4">
          {field("name", "Name")}
          {field("role", "Role / Title")}
          {field("bio", "Short Bio")}
          {field("photo_url", "Photo URL")}
          {field("linkedin_url", "LinkedIn URL")}
          {field("twitter_url", "Twitter/X URL")}
          {field("email", "Email")}
          {field("order_index", "Display Order", "number")}
        </div>
        <button
          onClick={() => onSave(values)}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
        >
          Save
        </button>
      </div>
    </div>
  );
}

function SocialManager() {
  const [items, setItems] = useState<SocialLink[]>([]);
  const [editing, setEditing] = useState<SocialLink | (typeof emptyLink) | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("social_links")
      .select("*")
      .order("order_index", { ascending: true });
    setItems((data as SocialLink[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id: string) => {
    if (!confirm("Delete this link?")) return;
    await supabase.from("social_links").delete().eq("id", id);
    load();
  };

  const save = async (values: any) => {
    if (values.id) {
      const { id, ...rest } = values;
      await supabase.from("social_links").update(rest).eq("id", id);
    } else {
      await supabase.from("social_links").insert(values);
    }
    setEditing(null);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Social Links</h2>
        <button
          onClick={() => setEditing({ ...emptyLink })}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Link
        </button>
      </div>

      <p className="text-gray-500 text-sm mb-4">
        Platform values used across the site: facebook, instagram, linkedin, twitter, github,
        youtube, whatsapp (whatsapp's URL powers the floating WhatsApp button — use a full
        wa.me link, e.g. https://wa.me/923299453496).
      </p>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-400">No links yet — add your first one.</p>
      ) : (
        <div className="space-y-3">
          {items.map((s) => (
            <div key={s.id} className="p-4 rounded-xl glass border border-white/10 flex items-center justify-between">
              <div>
                <p className="font-bold capitalize">{s.platform}</p>
                <p className="text-gray-400 text-sm break-all">{s.url}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0 ml-4">
                <button onClick={() => setEditing(s)} className="text-gray-400 hover:text-blue-400">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => remove(s.id)} className="text-gray-400 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && <LinkForm initial={editing} onCancel={() => setEditing(null)} onSave={save} />}
    </div>
  );
}

function LinkForm({
  initial,
  onCancel,
  onSave,
}: {
  initial: any;
  onCancel: () => void;
  onSave: (v: any) => void;
}) {
  const [values, setValues] = useState(initial);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-md p-6 rounded-2xl glass border border-white/10 shadow-glow-blue">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{values.id ? "Edit" : "Add"} Social Link</h3>
          <button onClick={onCancel}><X className="w-5 h-5 text-gray-400 hover:text-white" /></button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Platform</label>
            <input
              value={values.platform ?? ""}
              onChange={(e) => setValues((v: any) => ({ ...v, platform: e.target.value }))}
              placeholder="facebook, instagram, whatsapp, ..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">URL</label>
            <input
              value={values.url ?? ""}
              onChange={(e) => setValues((v: any) => ({ ...v, url: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Display Order</label>
            <input
              type="number"
              value={values.order_index ?? 0}
              onChange={(e) => setValues((v: any) => ({ ...v, order_index: Number(e.target.value) }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <button
          onClick={() => onSave(values)}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
        >
          Save
        </button>
      </div>
    </div>
  );
}
