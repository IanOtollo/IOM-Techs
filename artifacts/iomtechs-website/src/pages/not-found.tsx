import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="font-mono text-[11px] text-zinc-600 uppercase tracking-[0.2em] mb-4">404</p>
        <h1 className="text-[80px] font-black text-white leading-none mb-4 tracking-tight">Not found.</h1>
        <p className="text-zinc-500 mb-8">This page doesn't exist. Let's get you back.</p>
        <Link href="/" className="glass-pill px-6 py-2.5 text-sm text-white hover:text-zinc-300 transition-colors">
          ← Back to home
        </Link>
      </div>
    </Layout>
  );
}
