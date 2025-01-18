export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Music from&nbsp;
            <a 
              href="https://opengameart.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1"
            >
              OpenGameArt
            </a>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made by</span>
            <a 
              href="https://www.linkedin.com/in/janasefcikova/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Sitra
            </a>
            <span>+</span>
            <a 
              href="https://v0.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              v0
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

