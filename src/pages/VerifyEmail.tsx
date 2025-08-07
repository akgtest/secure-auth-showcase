import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Mail, Loader2 } from "lucide-react";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [isResending, setIsResending] = useState(false);
  
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
    if (token) {
      // Simulate email verification API call
      const verifyEmail = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Simulate success/failure based on token
        setVerificationStatus(token === 'invalid' ? 'error' : 'success');
      };
      verifyEmail();
    } else {
      setVerificationStatus('error');
    }
  }, [token]);

  const handleResendEmail = async () => {
    setIsResending(true);
    // Simulate resend API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsResending(false);
  };

  const renderContent = () => {
    switch (verificationStatus) {
      case 'loading':
        return (
          <Card className="border-border/50 shadow-lg text-center">
            <CardHeader className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
              </div>
              <CardTitle className="text-2xl">Verifying Your Email</CardTitle>
              <CardDescription>
                Please wait while we verify your email address...
              </CardDescription>
            </CardHeader>
          </Card>
        );

      case 'success':
        return (
          <Card className="border-border/50 shadow-lg text-center">
            <CardHeader className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl">Email Verified!</CardTitle>
              <CardDescription>
                Your email address has been successfully verified. You can now access all features of your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login">
                <Button className="w-full">
                  Continue to Sign In
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        );

      case 'error':
        return (
          <Card className="border-border/50 shadow-lg text-center">
            <CardHeader className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-2xl">Verification Failed</CardTitle>
              <CardDescription>
                {token ? 
                  "The verification link is invalid or has expired. Please request a new verification email." :
                  "No verification token provided. Please check the link in your email."
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full gap-2" 
                onClick={handleResendEmail}
                disabled={isResending}
              >
                {isResending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    Resend Verification Email
                  </>
                )}
              </Button>
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Back to Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            SecureAuth
          </h1>
          <p className="text-muted-foreground mt-2">Email verification</p>
          {email && (
            <p className="text-sm text-muted-foreground mt-1">
              Verifying: {email}
            </p>
          )}
        </div>

        {renderContent()}

        {verificationStatus === 'success' && (
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>
              Welcome to SecureAuth! Your account is now ready to use.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;