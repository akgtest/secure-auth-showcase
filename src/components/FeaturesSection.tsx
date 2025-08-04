import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Settings, 
  Activity,
  ChevronRight,
  Lock,
  Eye,
  Database
} from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "End-to-end encryption with AES-256 standards, ensuring your data remains completely secure at all times.",
      color: "text-primary",
      highlight: "99.99% Security"
    },
    {
      icon: Zap,
      title: "Lightning Fast Authentication",
      description: "Sub-100ms response times with optimized algorithms and global CDN distribution for instant access.",
      color: "text-accent",
      highlight: "<100ms Response"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Deployed across 6 continents with automatic failover and load balancing for maximum uptime.",
      color: "text-primary",
      highlight: "99.99% Uptime"
    },
    {
      icon: Users,
      title: "Multi-Factor Authentication",
      description: "Advanced biometric support, hardware tokens, and adaptive risk assessment for complete protection.",
      color: "text-accent",
      highlight: "Biometric Ready"
    },
    {
      icon: Settings,
      title: "Developer Experience",
      description: "Simple SDK integration with comprehensive documentation and real-time debugging tools.",
      color: "text-primary",
      highlight: "5min Setup"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Advanced analytics dashboard with threat detection and automated incident response.",
      color: "text-accent",
      highlight: "24/7 Monitoring"
    }
  ];

  const stats = [
    { icon: Lock, value: "256-bit", label: "Encryption Standard" },
    { icon: Eye, value: "Zero", label: "Data Breaches" },
    { icon: Database, value: "1M+", label: "Secure Sessions" },
    { icon: Globe, value: "150+", label: "Countries Served" }
  ];

  return (
    <section className="py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src={patternBg} alt="Pattern" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Security Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built for the
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Future</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every component designed with security-first principles and cutting-edge technology
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-smooth group"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-smooth hover:shadow-elegant hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-background to-card ${feature.color}/10 border border-current/20`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-smooth cursor-pointer">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;