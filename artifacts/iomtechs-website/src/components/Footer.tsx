export default function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="text-sm font-mono font-medium text-foreground tracking-widest uppercase">IOM Techs</span>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <p className="text-xs text-muted-foreground">
            Nairobi, Kenya · <a href="https://github.com/IanOtollo" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">github.com/IanOtollo</a>
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} IOM Techs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
