import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Services', path: '/services' },
        { title: 'Training', path: '/training' },
        { title: 'Technology', path: '/technology' },
        { title: 'About Us', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4"
            >
                <div className="w-full max-w-7xl bg-[#0B1120]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl px-6 h-16 flex items-center justify-between transition-all duration-300">

                    {/* Logo */}

                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/assets/sgs-icon.png"
                            alt="SGS Codeworks"
                            className="h-10 w-10 object-contain transform group-hover:scale-110 transition-transform duration-300 mix-blend-screen"
                        />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white tracking-tight">SGS</span>
                            <span className="text-lg font-light text-slate-300 group-hover:text-primary transition-colors duration-300">Codeworks</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${isActive
                                        ? 'text-white bg-white/10 shadow-sm'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        <div className="magnetic-wrap">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/contact" className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 flex items-center gap-2">
                                    Book Call
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex lg:hidden items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="text-slate-200 p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-80 bg-[#0B1120] border-l border-white/10 z-50 lg:hidden flex flex-col shadow-2xl"
                        >
                            <div className="p-6 border-b border-white/10 flex justify-between items-center">
                                <span className="text-xl font-bold text-white">Menu</span>
                                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <NavLink
                                        key={index}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `text-base font-medium px-4 py-3 rounded-xl transition-all ${isActive
                                                ? 'bg-primary/10 text-primary border border-primary/20'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`
                                        }
                                    >
                                        {link.title}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="p-6 border-t border-white/10">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
                                >
                                    Book Discovery Call
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
