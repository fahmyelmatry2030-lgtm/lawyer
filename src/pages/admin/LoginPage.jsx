import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'law2026';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('adminAuth') === 'true') {
            navigate('/admin', { replace: true });
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        setTimeout(() => {
            if (username === ADMIN_USER && password === ADMIN_PASS) {
                localStorage.setItem('adminAuth', 'true');
                navigate('/admin', { replace: true });
            } else {
                setError('اسم المستخدم أو كلمة المرور غير صحيحة');
                setLoading(false);
            }
        }, 800);
    };

    return (
        <div style={styles.page}>
            {/* Background pattern */}
            <div style={styles.bgPattern}></div>

            <div style={styles.card}>
                <div style={styles.header}>
                    <div style={styles.logo}>⚖️</div>
                    <h1 style={styles.title}>المحامي<span style={{ color: 'var(--primary-gold, #C5A365)' }}>.</span></h1>
                    <p style={styles.subtitle}>لوحة إدارة المكتب القانوني</p>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.field}>
                        <label style={styles.label}>اسم المستخدم</label>
                        <div style={styles.inputWrapper}>
                            <span style={styles.inputIcon}>👤</span>
                            <input
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="أدخل اسم المستخدم"
                                required
                                autoComplete="username"
                                style={styles.input}
                            />
                        </div>
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>كلمة المرور</label>
                        <div style={styles.inputWrapper}>
                            <span style={styles.inputIcon}>🔒</span>
                            <input
                                type={showPass ? 'text' : 'password'}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="أدخل كلمة المرور"
                                required
                                autoComplete="current-password"
                                style={styles.input}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                style={styles.eyeBtn}
                                title={showPass ? 'إخفاء' : 'إظهار'}
                            >
                                {showPass ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div style={styles.error}>
                            ⚠️ {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{ ...styles.submitBtn, opacity: loading ? 0.8 : 1 }}
                    >
                        {loading ? (
                            <span style={styles.spinner}></span>
                        ) : ''}
                        {loading ? 'جارٍ التحقق...' : 'تسجيل الدخول'}
                    </button>
                </form>

                <div style={styles.hint}>
                    <p style={{ margin: 0, fontSize: '0.78rem', color: '#94a3b8' }}>
                        بيانات الدخول التجريبية: <strong style={{ color: '#cbd5e1' }}>admin / law2026</strong>
                    </p>
                </div>
            </div>

            <p style={styles.footer}>© {new Date().getFullYear()} مكتب المحامي — جميع الحقوق محفوظة</p>
        </div>
    );
};

const styles = {
    page: {
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        direction: 'rtl',
    },
    bgPattern: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(197,163,101,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,64,175,0.15) 0%, transparent 50%)',
        pointerEvents: 'none',
    },
    card: {
        background: 'rgba(30, 41, 59, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(197,163,101,0.2)',
        borderRadius: '20px',
        padding: '50px 45px',
        width: '100%',
        maxWidth: '440px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 1,
    },
    header: {
        textAlign: 'center',
        marginBottom: '38px',
    },
    logo: {
        fontSize: '3rem',
        marginBottom: '12px',
        filter: 'drop-shadow(0 4px 8px rgba(197,163,101,0.4))',
    },
    title: {
        fontSize: '2rem',
        fontWeight: '800',
        color: '#e2e8f0',
        margin: '0 0 6px',
        letterSpacing: '-0.5px',
    },
    subtitle: {
        color: '#94a3b8',
        fontSize: '0.9rem',
        margin: 0,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    label: {
        fontSize: '0.88rem',
        fontWeight: '600',
        color: '#cbd5e1',
    },
    inputWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    inputIcon: {
        position: 'absolute',
        right: '14px',
        fontSize: '1rem',
        zIndex: 1,
        pointerEvents: 'none',
    },
    input: {
        width: '100%',
        padding: '13px 44px 13px 44px',
        background: 'rgba(15, 23, 42, 0.7)',
        border: '1px solid rgba(100,116,139,0.4)',
        borderRadius: '10px',
        color: '#e2e8f0',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        direction: 'rtl',
    },
    eyeBtn: {
        position: 'absolute',
        left: '12px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        padding: '4px',
        lineHeight: 1,
    },
    error: {
        backgroundColor: 'rgba(239,68,68,0.1)',
        border: '1px solid rgba(239,68,68,0.3)',
        borderRadius: '10px',
        padding: '12px 16px',
        color: '#fca5a5',
        fontSize: '0.87rem',
    },
    submitBtn: {
        background: 'linear-gradient(135deg, #C5A365, #a88240)',
        color: '#0f172a',
        border: 'none',
        borderRadius: '10px',
        padding: '14px',
        fontSize: '1rem',
        fontWeight: '700',
        cursor: 'pointer',
        fontFamily: 'inherit',
        marginTop: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'transform 0.15s, box-shadow 0.15s',
        boxShadow: '0 4px 15px rgba(197,163,101,0.3)',
    },
    hint: {
        textAlign: 'center',
        marginTop: '28px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(100,116,139,0.2)',
    },
    footer: {
        color: '#475569',
        fontSize: '0.8rem',
        marginTop: '30px',
        position: 'relative',
        zIndex: 1,
    },
};

export default LoginPage;
