export default function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border p-6 min-h-screen">
      <nav className="space-y-2">
        <div className="mb-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Navigation
          </p>
          <ul className="space-y-1">
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-sidebar-accent rounded-lg transition-colors text-sm font-medium"
              >
                <span className="w-5 h-5">📊</span>
                Dashboards
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-sidebar-accent rounded-lg transition-colors text-sm font-medium"
              >
                <span className="w-5 h-5">📋</span>
                Boards
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-sidebar-accent rounded-lg transition-colors text-sm font-medium"
              >
                <span className="w-5 h-5">✓</span>
                Tasks
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t border-sidebar-border pt-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Other
          </p>
          <ul className="space-y-1">
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-sidebar-accent rounded-lg transition-colors text-sm font-medium"
              >
                <span className="w-5 h-5">⚙️</span>
                Settings
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-sidebar-accent rounded-lg transition-colors text-sm font-medium"
              >
                <span className="w-5 h-5">❓</span>
                Help
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
