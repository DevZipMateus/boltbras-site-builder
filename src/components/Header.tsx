import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "/", type: "link" },
    { label: "Sobre", href: "#sobre", type: "anchor" },
    { label: "Visão e valores", href: "#visao", type: "anchor" },
    { label: "Serviços", href: "#servicos", type: "anchor" },
    { label: "Galeria", href: "/galeria", type: "link" },
    { label: "Instagram", href: "#instagram", type: "anchor" },
    { label: "Contato", href: "#contato", type: "anchor" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="container-custom py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-display font-bold text-primary hover:text-primary-light transition-colors"
          >
            Boltbras
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  className="text-foreground hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button
              asChild
              className="bg-accent hover:bg-accent-light text-accent-foreground"
            >
              <a href="https://wa.me/5584987083206" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

         {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary font-medium transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.href}
                    to={`/${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary font-medium transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Button
                asChild
                className="bg-accent hover:bg-accent-light text-accent-foreground w-full"
              >
                <a href="https://wa.me/5584987083206" target="_blank" rel="noopener noreferrer">
                  Fale conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
