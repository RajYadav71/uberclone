import React, { useState } from "react";

function LoginUser() {
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const response = await fetch("http://localhost:3000/login-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            alert("Login successful");
            window.location.href = "/user";
        }
        setIsLoading(false);
    }

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, sans-serif',
            overflow: 'hidden'
        }}>
            {/* Left Side - User-focused Uber Gradient */}
            <div style={{
                flex: '1.2',
                background: `
                    linear-gradient(135deg, 
                        #000000 0%, 
                        #1a1a1a 20%, 
                        #333333 40%, 
                        #1a1a1a 60%, 
                        #000000 80%, 
                        #0d0d0d 100%
                    )
                `,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {/* Floating Elements */}
                <div style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    top: '10%',
                    left: '10%',
                    animation: 'float1 8s ease-in-out infinite',
                    filter: 'blur(1px)'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    bottom: '15%',
                    right: '15%',
                    animation: 'float2 10s ease-in-out infinite',
                    filter: 'blur(2px)'
                }}></div>

                <div style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    top: '60%',
                    left: '20%',
                    transform: 'rotate(45deg)',
                    animation: 'rotate 15s linear infinite'
                }}></div>

                {/* Main Content */}
                <div style={{
                    textAlign: 'center',
                    zIndex: 10,
                    maxWidth: '600px',
                    padding: '0 60px'
                }}>
                    <div style={{
                        marginBottom: '50px'
                    }}>
                        <h1 style={{
                            fontSize: '120px',
                            fontWeight: '900',
                            color: 'white',
                            marginBottom: '30px',
                            letterSpacing: '-6px',
                            textShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            lineHeight: '0.9'
                        }}>Uber</h1>
                        
                        <div style={{
                            width: '120px',
                            height: '6px',
                            background: 'linear-gradient(90deg, white, rgba(255,255,255,0.4), transparent)',
                            margin: '0 auto 40px',
                            borderRadius: '3px'
                        }}></div>
                        
                        <h2 style={{
                            fontSize: '56px',
                            color: 'white',
                            marginBottom: '30px',
                            fontWeight: '600',
                            lineHeight: '1.1'
                        }}>Get Moving</h2>
                        
                        <p style={{
                            fontSize: '24px',
                            color: 'rgba(255,255,255,0.85)',
                            lineHeight: '1.5',
                            fontWeight: '300',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            Request a ride, hop in, and go anywhere. Your journey starts here with millions of riders worldwide.
                        </p>
                    </div>

                    {/* Feature Benefits */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '25px',
                        marginTop: '60px'
                    }}>
                        {[
                            { icon: '🚗', title: 'Quick Rides', desc: 'Get there fast' },
                            { icon: '💰', title: 'Fair Pricing', desc: 'Upfront costs' },
                            { icon: '🛡️', title: 'Safe Travels', desc: 'Trusted drivers' },
                            { icon: '📍', title: 'Go Anywhere', desc: 'City-wide coverage' }
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                padding: '30px 20px',
                                textAlign: 'center',
                                transition: 'all 0.4s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-8px)';
                                e.target.style.background = 'rgba(255,255,255,0.15)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.background = 'rgba(255,255,255,0.1)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                            }}>
                                <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.icon}</div>
                                <h3 style={{ 
                                    color: 'white', 
                                    fontSize: '18px', 
                                    fontWeight: '600',
                                    marginBottom: '8px',
                                    margin: '0 0 8px 0'
                                }}>{item.title}</h3>
                                <p style={{ 
                                    color: 'rgba(255,255,255,0.7)', 
                                    fontSize: '14px',
                                    margin: '0'
                                }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Modern Form */}
            <div style={{
                flex: '1',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                position: 'relative'
            }}>
                {/* Subtle background pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}></div>

                <div style={{
                    width: '100%',
                    maxWidth: '480px',
                    position: 'relative',
                    zIndex: 10
                }}>
                    {/* Header */}
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: '48px',
                            fontWeight: '800',
                            color: '#1e1e1e',
                            marginBottom: '15px',
                            letterSpacing: '-1px'
                        }}>Welcome Back</h1>
                        <p style={{
                            fontSize: '20px',
                            color: '#6b7280',
                            fontWeight: '400',
                            margin: '0'
                        }}>Sign in to request your next ride</p>
                    </div>

                    {/* Form */}
                    <div>
                        {/* Email Field */}
                        <div style={{ marginBottom: '25px' }}>
                            <label style={{
                                display: 'block',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#374151',
                                marginBottom: '10px'
                            }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address"  
                                    id="email"
                                    required 
                                    style={{
                                        width: '100%',
                                        padding: '20px 24px',
                                        border: '2px solid #e5e7eb',
                                        borderRadius: '16px',
                                        fontSize: '16px',
                                        backgroundColor: '#f9fafb',
                                        transition: 'all 0.3s ease',
                                        outline: 'none',
                                        color: '#1f2937',
                                        boxSizing: 'border-box',
                                        fontWeight: '400'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#000000';
                                        e.target.style.backgroundColor = '#ffffff';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e5e7eb';
                                        e.target.style.backgroundColor = '#f9fafb';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{
                                display: 'block',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#374151',
                                marginBottom: '10px'
                            }}>Password</label>
                            <div style={{ position: 'relative' }}>
                                <input 
                                    type="password" 
                                    placeholder="Enter your password"  
                                    id="password"
                                    required 
                                    style={{
                                        width: '100%',
                                        padding: '20px 24px',
                                        border: '2px solid #e5e7eb',
                                        borderRadius: '16px',
                                        fontSize: '16px',
                                        backgroundColor: '#f9fafb',
                                        transition: 'all 0.3s ease',
                                        outline: 'none',
                                        color: '#1f2937',
                                        boxSizing: 'border-box',
                                        fontWeight: '400'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#000000';
                                        e.target.style.backgroundColor = '#ffffff';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e5e7eb';
                                        e.target.style.backgroundColor = '#f9fafb';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '35px'
                        }}>
                            <label style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '15px',
                                color: '#6b7280',
                                cursor: 'pointer',
                                fontWeight: '400'
                            }}>
                                <input type="checkbox" style={{
                                    width: '18px',
                                    height: '18px',
                                    accentColor: '#000000',
                                    borderRadius: '4px'
                                }} />
                                Remember me
                            </label>
                            <span style={{
                                fontSize: '15px',
                                color: '#000000',
                                cursor: 'pointer',
                                fontWeight: '500',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.textDecoration = 'underline';
                                e.target.style.color = '#374151';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.textDecoration = 'none';
                                e.target.style.color = '#000000';
                            }}>
                                Forgot Password?
                            </span>
                        </div>

                        {/* Login Button */}
                        <button 
                            onClick={handleSubmit}
                            disabled={isLoading}
                            style={{
                                width: '100%',
                                padding: '20px',
                                background: isLoading ? 
                                    'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)' :
                                    'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '16px',
                                fontSize: '18px',
                                fontWeight: '700',
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.4s ease',
                                marginBottom: '35px',
                                letterSpacing: '0.3px',
                                textTransform: 'none'
                            }}
                            onMouseEnter={(e) => {
                                if (!isLoading) {
                                    e.target.style.background = 'linear-gradient(135deg, #1f2937 0%, #374151 100%)';
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isLoading) {
                                    e.target.style.background = 'linear-gradient(135deg, #000000 0%, #1f2937 100%)';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }
                            }}
                        >
                            {isLoading ? (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}>
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        border: '2px solid transparent',
                                        borderTop: '2px solid white',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite'
                                    }}></div>
                                    Signing In...
                                </div>
                            ) : (
                                'Login as User'
                            )}
                        </button>

                        {/* Divider */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '35px'
                        }}>
                            <div style={{
                                flex: 1,
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)'
                            }}></div>
                            <span style={{
                                padding: '0 25px',
                                fontSize: '15px',
                                color: '#9ca3af',
                                fontWeight: '500',
                                backgroundColor: 'white'
                            }}>or continue with</span>
                            <div style={{
                                flex: 1,
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)'
                            }}></div>
                        </div>

                        {/* Social Login Options */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '15px',
                            marginBottom: '35px'
                        }}>
                            <button style={{
                                padding: '16px',
                                border: '2px solid #e5e7eb',
                                borderRadius: '12px',
                                background: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontSize: '15px',
                                fontWeight: '600',
                                color: '#374151'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#000000';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#e5e7eb';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}>
                                <span style={{ fontSize: '18px' }}>📱</span>
                                Phone
                            </button>
                            <button style={{
                                padding: '16px',
                                border: '2px solid #e5e7eb',
                                borderRadius: '12px',
                                background: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontSize: '15px',
                                fontWeight: '600',
                                color: '#374151'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#000000';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#e5e7eb';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}>
                                <span style={{ fontSize: '18px' }}>🌐</span>
                                Google
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                            <span style={{
                                fontSize: '16px',
                                color: '#6b7280',
                                textDecoration: 'none'
                            }}>
                                New to Uber?{" "}
                                <span 
                                    style={{
                                        color: '#000000',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        borderBottom: '2px solid transparent',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onClick={() => window.location.href = '/signup-user'}
                                    onMouseEnter={(e) => {
                                        e.target.style.borderBottom = '2px solid #000000';
                                        e.target.style.color = '#374151';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.borderBottom = '2px solid transparent';
                                        e.target.style.color = '#000000';
                                    }}
                                >
                                    Create account
                                </span>
                            </span>
                        </div>

                        {/* Captain Login Link */}
                        <div style={{ 
                            textAlign: 'center',
                            paddingTop: '25px',
                            borderTop: '2px solid #f3f4f6'
                        }}>
                            <span 
                                style={{
                                    fontSize: '15px',
                                    color: '#000000',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'all 0.3s ease',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                }}
                                onClick={() => window.location.href = '/login-captain'}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#f3f4f6';
                                    e.target.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.transform = 'translateX(0)';
                                }}
                            >
                                Login as a Captain
                                <span style={{ fontSize: '14px' }}>→</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes float1 {
                        0%, 100% { 
                            transform: translateY(0px) scale(1);
                            opacity: 0.6;
                        }
                        50% { 
                            transform: translateY(-30px) scale(1.05);
                            opacity: 0.4;
                        }
                    }
                    
                    @keyframes float2 {
                        0%, 100% { 
                            transform: translateY(0px) scale(1);
                            opacity: 0.4;
                        }
                        50% { 
                            transform: translateY(-40px) scale(0.95);
                            opacity: 0.2;
                        }
                    }
                    
                    @keyframes rotate {
                        0% { transform: rotate(45deg); }
                        100% { transform: rotate(405deg); }
                    }
                    
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    
                    /* Responsive Design */
                    @media (max-width: 1200px) {
                        .login-container { flex-direction: column; }
                        .left-panel { min-height: 50vh; padding: 40px 20px; }
                        .uber-logo { font-size: 80px !important; }
                        .main-heading { font-size: 40px !important; }
                        .right-panel { padding: 40px 20px; }
                    }
                    
                    @media (max-width: 768px) {
                        .left-panel { min-height: 40vh; padding: 30px 15px; }
                        .uber-logo { font-size: 60px !important; }
                        .main-heading { font-size: 32px !important; }
                        .feature-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 15px !important; }
                        .right-panel { padding: 30px 15px; }
                        .welcome-title { font-size: 36px !important; }
                        .social-grid { grid-template-columns: 1fr !important; }
                    }
                    
                    @media (max-width: 480px) {
                        .left-panel { min-height: 35vh; padding: 25px 10px; }
                        .uber-logo { font-size: 48px !important; }
                        .main-heading { font-size: 28px !important; }
                        .feature-grid { grid-template-columns: 1fr !important; }
                        .right-panel { padding: 25px 10px; }
                        .welcome-title { font-size: 32px !important; }
                        .form-input { padding: 16px 20px !important; font-size: 14px !important; }
                        .login-btn { padding: 16px !important; font-size: 16px !important; }
                    }
                `
            }} />
        </div>
    );
}

export default LoginUser;