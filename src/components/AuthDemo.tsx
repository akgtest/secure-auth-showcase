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
  RotateCcw,
  Monitor,
  Users,
  Settings,
  Activity,
  Laptop,
  Tablet,
  Clock,
  MapPin,
  Trash2,
  UserCheck
} from "lucide-react";
import { useState } from "react";

const AuthDemo = () => {
  const [activeForm, setActiveForm] = useState<'login' | 'signup' | 'reset'>('login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
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

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Monitor className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Session Management</h3>
                <p className="text-sm text-muted-foreground">Multi-device session control</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Admin Dashboard</h3>
                <p className="text-sm text-muted-foreground">User & session management</p>
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

      {/* Session Management Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Advanced Session Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Users can manage multiple active sessions across different devices with real-time monitoring and control.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* User Session Management */}
            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">User Sessions</h3>
                  <p className="text-muted-foreground">Manage your active sessions</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">MacBook Pro</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        New York, US • Current session
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Active
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">iPhone 15</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        2 hours ago • London, UK
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-3 h-3" />
                    Revoke
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <Tablet className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">iPad Pro</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        1 day ago • Tokyo, JP
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-3 h-3" />
                    Revoke
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="outline" className="w-full gap-2">
                  <Activity className="w-4 h-4" />
                  View Session History
                </Button>
              </div>
            </Card>

            {/* Admin Features */}
            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Admin Dashboard</h3>
                  <p className="text-muted-foreground">Manage all users and sessions</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <p className="text-2xl font-bold text-foreground">1,247</p>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <p className="text-2xl font-bold text-accent">823</p>
                    <p className="text-sm text-muted-foreground">Active Sessions</p>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">156</p>
                    <p className="text-sm text-muted-foreground">Online Now</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">john@example.com</p>
                        <p className="text-sm text-muted-foreground">3 active sessions</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">alice@company.com</p>
                        <p className="text-sm text-muted-foreground">1 active session</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <Button variant="auth" className="w-full gap-2">
                  <Settings className="w-4 h-4" />
                  Admin Dashboard
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Activity className="w-4 h-4" />
                  Security Logs
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Complete Authentication Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for secure, scalable authentication with advanced session management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Security First",
                description: "Industry-standard encryption and security practices built-in"
              },
              {
                icon: Monitor,
                title: "Multi-Device",
                description: "Track and manage sessions across all user devices"
              },
              {
                icon: Users,
                title: "User Management",
                description: "Complete admin dashboard for user and session control"
              },
              {
                icon: Mail,
                title: "Email Verification",
                description: "Secure email verification flow with customizable templates"
              },
              {
                icon: RotateCcw,
                title: "Password Recovery",
                description: "Secure password reset with email confirmation"
              },
              {
                icon: Activity,
                title: "Session Analytics",
                description: "Detailed logs and analytics for all authentication events"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthDemo;