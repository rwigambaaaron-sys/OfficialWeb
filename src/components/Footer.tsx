import { Home, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Home className="h-9 w-9" />
            Lakers Group Real Estate
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-7 w-7" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-7 w-7" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/80">
          © {new Date().getFullYear()} Lakers Group Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
