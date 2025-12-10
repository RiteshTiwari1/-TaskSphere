import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckSquare,
  FolderKanban,
  BarChart3,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white">T</span>
            </div>
            <span className="text-xl font-bold text-white">TaskSphere</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Manage Your Projects{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Effortlessly
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            TaskSphere is a modern task and project management app that helps you
            stay organized, track progress, and boost productivity with an
            intuitive Kanban board interface.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-slate-600">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Everything you need to stay productive
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={FolderKanban}
            title="Kanban Boards"
            description="Visualize your workflow with drag-and-drop Kanban boards. Move tasks through stages with ease."
          />
          <FeatureCard
            icon={CheckSquare}
            title="Task Management"
            description="Create, organize, and track tasks with priorities, due dates, and custom labels."
          />
          <FeatureCard
            icon={BarChart3}
            title="Analytics Dashboard"
            description="Get insights into your productivity with visual charts and statistics."
          />
          <FeatureCard
            icon={Zap}
            title="Fast & Responsive"
            description="Built with modern technologies for a blazing-fast experience on any device."
          />
          <FeatureCard
            icon={Shield}
            title="Secure by Default"
            description="Your data is protected with industry-standard security practices."
          />
          <FeatureCard
            icon={CheckSquare}
            title="Dark Mode"
            description="Easy on the eyes with built-in dark mode support for comfortable viewing."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to boost your productivity?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Join TaskSphere today and take control of your tasks and projects.
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-slate-100"
            >
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-sm font-bold text-white">T</span>
              </div>
              <span className="text-sm text-slate-400">
                TaskSphere - Smart Project Management
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
              <span>
                Built by{" "}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Ritesh Tiwari
                </a>
              </span>
              <span className="hidden md:inline">•</span>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                GitHub
              </a>
              <span className="hidden md:inline">•</span>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-400" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}
