import { Button } from "@/components/ui/button";
import { Shield, Lock, Fingerprint, Key, ArrowRight, Github, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rotate-45 animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent/30 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-primary/10 rotate-45 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <Shield className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-muted-foreground">Enterprise-Grade Security</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Secure Auth
          </span>
          <br />
          <span className="text-4xl md:text-6xl text-foreground/90">
            Redefined
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Experience the future of authentication with our cutting-edge security framework. 
          Built for developers who demand <span className="text-primary font-semibold">excellence</span> and 
          <span className="text-accent font-semibold"> innovation</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="auth" size="lg" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Live Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="group">
            <Github className="w-5 h-5 mr-2" />
            View Source Code
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Security metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Shield, label: "Zero Breaches", value: "100%" },
            { icon: Lock, label: "Encryption", value: "AES-256" },
            { icon: Fingerprint, label: "Biometric", value: "Enabled" },
            { icon: Key, label: "2FA Support", value: "Active" }
          ].map((metric, index) => (
            <div 
              key={index} 
              className="group animate-slide-up bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-smooth hover:border-primary/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <metric.icon className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;