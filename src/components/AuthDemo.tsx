import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Github, 
  Chrome,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Shield,
  RotateCcw
} from "lucide-react";
import { useState } from "react";

const AuthDemo = () => {
  const [activeForm, setActiveForm] = useState<'login' | 'signup' | 'reset'>('login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Secure Auth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A complete authentication system built for learning and production use.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Email Authentication</h3>
                <p className="text-sm text-muted-foreground">Login/signup with email verification</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <RotateCcw className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Password Reset</h3>
                <p className="text-sm text-muted-foreground">Secure password reset via email</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Social Login</h3>
                <p className="text-sm text-muted-foreground">Google, GitHub authentication</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="auth" className="gap-2">
              <Github className="w-4 h-4" />
              View Code
            </Button>
            <Button variant="outline" className="gap-2">
              <Shield className="w-4 h-4" />
              Documentation
            </Button>
          </div>
        </div>

        {/* Right side - Auth Forms */}
        <div className="w-full max-w-md mx-auto">
          <Card className="p-8 bg-gradient-card border-border">
            
            {/* Form Toggle */}
            <div className="flex gap-1 mb-8 p-1 bg-muted rounded-lg">
              {(['login', 'signup', 'reset'] as const).map((form) => (
                <button
                  key={form}
                  onClick={() => setActiveForm(form)}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeForm === form 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {form === 'login' ? 'Login' : form === 'signup' ? 'Sign Up' : 'Reset'}
                </button>
              ))}
            </div>

            {/* Login Form */}
            {activeForm === 'login' && (
              <div className="space-y-6 animate-fade-up">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
                  <p className="text-muted-foreground">Enter your credentials to continue</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="user@example.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Password</label>
                    <div className="relative">
                      <Input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="bg-background/50 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <Button variant="auth" className="w-full">
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="social" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button variant="social" className="gap-2">
                    <Chrome className="w-4 h-4" />
                    Google
                  </Button>
                </div>
              </div>
            )}

            {/* Signup Form */}
            {activeForm === 'signup' && (
              <div className="space-y-6 animate-fade-up">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Create account</h2>
                  <p className="text-muted-foreground">Get started with your free account</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="user@example.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Password</label>
                    <Input 
                      type="password"
                      placeholder="Create a strong password"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Confirm Password</label>
                    <Input 
                      type="password"
                      placeholder="Confirm your password"
                      className="bg-background/50"
                    />
                  </div>

                  <Button variant="auth" className="w-full">
                    Create Account
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Email verification required
                  </Badge>
                </div>
              </div>
            )}

            {/* Reset Form */}
            {activeForm === 'reset' && (
              <div className="space-y-6 animate-fade-up">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Reset password</h2>
                  <p className="text-muted-foreground">We'll send you a reset link</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="user@example.com"
                      className="bg-background/50"
                    />
                  </div>

                  <Button variant="auth" className="w-full">
                    Send Reset Link
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Remember your password?{' '}
                    <button 
                      onClick={() => setActiveForm('login')}
                      className="text-primary hover:underline"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            )}

          </Card>

          {/* Features preview */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Secure email verification</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Password strength validation</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Social authentication ready</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuthDemo;