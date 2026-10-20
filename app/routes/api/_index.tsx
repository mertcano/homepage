import { motion } from "framer-motion";
import { ArrowRight, Code, ShieldCheck, Zap } from "lucide-react";
import type { Route } from "./+types/_index";

// Define meta tags for SEO and page title
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Miden - Modern Web Application" },
    { name: "description", content: "Welcome to Miden, built with React Router v7 and Tailwind CSS." },
  ];
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          {/* Badge indicator */}
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Powered by React Router v7 & Tailwind CSS
          </span>
          
          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Welcome to <span className="text-primary">Miden</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground">
            A high-performance, modern web application template equipped with cutting-edge tools for seamless development and deployment.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary/90"
            >
              Explore Features <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Features Grid Section */}
        <section id="features" className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl w-full px-4">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <Zap className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Optimized for speed and performance using Cloudflare Workers and Vite.</p>
          </div>
          
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Type Safe</h3>
            <p className="text-sm text-muted-foreground">Strict TypeScript configurations ensuring robust and error-free codebases.</p>
          </div>
          
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <Code className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Modern Stack</h3>
            <p className="text-sm text-muted-foreground">Built with React 19, Motion animations, and Radix UI components.</p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Miden. All rights reserved.
      </footer>
    </div>
  );
}
