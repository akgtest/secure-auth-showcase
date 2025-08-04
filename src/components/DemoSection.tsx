import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Smartphone, 
  Shield, 
  CheckCircle,
  AlertCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const authSteps = [
    { id: 1, title: "Email Verification", status: "completed" },
    { id: 2, title: "Password Authentication", status: "active" },
    { id: 3, title: "Two-Factor Authentication", status: "pending" },
    { id: 4, title: "Biometric Verification", status: "pending" }
  ];

  return (
    <section className="py-32 bg-gradient-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Interactive Demo</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            See It In
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Action</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our multi-layered security authentication flow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Secure Login Portal</h3>
                <p className="text-muted-foreground">Demo authentication interface</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      type="email" 
                      placeholder="demo@secureauth.com"
                      className="pl-12 h-12 bg-background/50 border-border/50 focus:border-primary"
                      defaultValue="demo@secureauth.com"
                    />
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-security" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your secure password"
                      className="pl-12 pr-12 h-12 bg-background/50 border-border/50 focus:border-primary"
                      defaultValue="••••••••••"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-security rounded-full animate-pulse" />
                    <span className="text-sm text-security">Secure connection established</span>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/30">
                    256-bit SSL
                  </Badge>
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  <Shield className="w-5 h-5 mr-2" />
                  Authenticate Securely
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Use Biometric Login
                  </Button>
                </div>
              </div>
            </Card>

            {/* Security Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-security/30">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-security" />
                  <div>
                    <div className="font-medium text-foreground">Threat Detected</div>
                    <div className="text-sm text-muted-foreground">0 vulnerabilities</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/30">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Security Score</div>
                    <div className="text-sm text-muted-foreground">Perfect 100/100</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Authentication Flow */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Multi-Layer Security Flow</h3>
            
            {authSteps.map((authStep, index) => (
              <div 
                key={authStep.id} 
                className={`flex items-center gap-4 p-6 rounded-xl border transition-smooth ${
                  authStep.status === 'completed' 
                    ? 'bg-security/10 border-security/30' 
                    : authStep.status === 'active'
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-card/30 border-border/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  authStep.status === 'completed'
                    ? 'bg-security text-white'
                    : authStep.status === 'active'
                    ? 'bg-primary text-white animate-pulse'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {authStep.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-bold">{authStep.id}</span>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="font-medium text-foreground">{authStep.title}</div>
                  <div className={`text-sm ${
                    authStep.status === 'completed' ? 'text-security' :
                    authStep.status === 'active' ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {authStep.status === 'completed' ? 'Verified' :
                     authStep.status === 'active' ? 'In Progress...' : 'Pending'}
                  </div>
                </div>
                
                {authStep.status === 'active' && (
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </div>
            ))}

            <Card className="p-6 bg-gradient-surface border-border/50">
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-2">Security Guaranteed</h4>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade protection with zero-trust architecture
                </p>
                <Button variant="premium" className="w-full">
                  View Security Documentation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;