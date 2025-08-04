import { Shield, Github, Mail, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Security", href: "#security" },
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    Resources: [
      { name: "Support", href: "#support" },
      { name: "Community", href: "#community" },
      { name: "Status", href: "#status" },
      { name: "Security Portal", href: "#security-portal" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Mail, href: "#email", label: "Email" }
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Secure Auth</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The next generation authentication platform built for developers who demand 
              security, simplicity, and scale.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 Secure Auth. All rights reserved.</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-security rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-security" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;