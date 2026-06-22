export default function Navbar() {
  return (
    <nav className="bg-card border-b border-border px-8 py-4">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold text-primary">TASKSYNC</h1>
            <div className="hidden md:flex gap-8">
              <a
                href="/"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="/profile"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Settings
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors text-sm font-medium">
              Help
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all text-sm font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
