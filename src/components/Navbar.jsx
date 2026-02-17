import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/portfolioData';


const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showServicesMenu, setShowServicesMenu] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Web');

    const toggleMenu = () => setIsOpen(!isOpen);

    const filteredProjects = projects.filter(project =>
        activeCategory === 'All' || project.category === activeCategory
    ).slice(0, 4); // Show only top 4 in mega menu

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Services', path: '/services' },
        // { title: 'Training', path: '/training' },
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
                className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4"
            >
                <div className="relative w-full max-w-7xl bg-[#0B1120]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl px-6 h-16 flex items-center justify-between transition-all duration-300">

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
                                onMouseEnter={() => link.title === 'Services' && setShowServicesMenu(true)}
                                onMouseLeave={() => link.title === 'Services' && setShowServicesMenu(false)}
                                className={({ isActive }) =>
                                    `text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${isActive || (link.title === 'Services' && showServicesMenu)
                                        ? 'text-white bg-white/10 shadow-sm'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mega Menu - Centered relative to Navbar Container */}
                    <AnimatePresence>
                        {showServicesMenu && (
                            <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 15, scale: 0.98 }}
                                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                                onMouseEnter={() => setShowServicesMenu(true)}
                                onMouseLeave={() => setShowServicesMenu(false)}
                                className="absolute top-full left-0 right-0 mx-auto w-[850px] pt-4 z-[110]"
                            >
                                {/* Transparent Bridge to prevent menu closing during hover transition */}
                                <div className="absolute top-0 left-0 right-0 h-4" />

                                <div className={`border rounded-[2.5rem] overflow-hidden transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-[#0F172A] backdrop-blur-2xl border-white/20 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.7)]'
                                    : 'bg-white border-slate-300 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)]'
                                    }`}>
                                    {/* Decorative subtle top line */}
                                    <div className={`h-1.5 w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent`} />

                                    <div className="flex h-[480px]">
                                        {/* Sidebar Categories */}
                                        <div className={`w-1/4 border-r p-8 transition-colors duration-300 ${theme === 'dark'
                                            ? 'border-white/10 bg-black/40'
                                            : 'border-slate-200 bg-slate-50'
                                            }`}>
                                            <div className={`text-[11px] font-black tracking-[0.25em] uppercase mb-10 transition-colors ${theme === 'dark' ? 'text-primary' : 'text-primary-dark font-black'}`}>Our Domains</div>
                                            <div className="flex flex-col gap-3">
                                                {categories.filter(cat => cat !== 'All').map((cat) => (
                                                    <button
                                                        key={cat}
                                                        onMouseEnter={() => setActiveCategory(cat)}
                                                        className={`text-left px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                                            ? 'bg-primary text-white shadow-[0_10px_25px_-5px_rgba(var(--color-primary-rgb),0.5)] scale-[1.05]'
                                                            : theme === 'dark'
                                                                ? 'text-slate-400 hover:text-white hover:bg-white/5'
                                                                : 'text-slate-600 hover:text-primary hover:bg-primary/5'
                                                            }`}
                                                    >
                                                        {cat}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="mt-auto pt-10">
                                                <Link
                                                    to="/services"
                                                    className="group/all flex items-center gap-3 text-primary text-sm font-black hover:gap-4 transition-all"
                                                >
                                                    All Services <ArrowRight size={18} className="group-hover/all:translate-x-1.5 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Projects Grid */}
                                        <div className={`flex-1 p-10 bg-gradient-to-br from-transparent transition-colors duration-300 ${theme === 'dark'
                                            ? 'via-primary/[0.03] to-primary/[0.08]'
                                            : 'via-slate-50 to-white'
                                            }`}>
                                            <div className="flex justify-between items-center mb-10">
                                                <div>
                                                    <h3 className={`text-3xl font-black mb-2 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Explore {activeCategory}</h3>
                                                    <p className={`text-sm font-medium transition-colors duration-300 ${theme === 'dark' ? 'text-slate-200 opacity-60' : 'text-slate-500'}`}>High-performance solutions for modern business.</p>
                                                </div>
                                                <div className={`p-4 rounded-2xl border shadow-inner transition-colors duration-300 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                                                    <Sparkles size={24} className="text-primary animate-pulse" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-6">
                                                <AnimatePresence mode="wait">
                                                    {filteredProjects.length > 0 ? (
                                                        filteredProjects.map((project, idx) => (
                                                            <motion.div
                                                                key={project.title}
                                                                initial={{ opacity: 0, y: 15 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -15 }}
                                                                transition={{ duration: 0.3, delay: idx * 0.08 }}
                                                                className={`group/card relative p-7 rounded-[2rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${theme === 'dark'
                                                                    ? 'bg-white/[0.04] border-white/10 hover:border-primary/50 hover:bg-white/[0.08]'
                                                                    : 'bg-white border-slate-200 hover:border-primary/40 hover:bg-slate-50 shadow-sm'
                                                                    }`}
                                                            >
                                                                <div className="flex justify-between items-start mb-5">
                                                                    <div className={`p-3.5 rounded-2xl transition-all duration-500 shadow-md ${theme === 'dark'
                                                                        ? 'bg-primary/20 text-primary group-hover/card:bg-primary group-hover/card:text-white'
                                                                        : 'bg-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-white'
                                                                        } group-hover/card:scale-110 group-hover/card:rotate-3`}>
                                                                        <project.icon size={22} strokeWidth={2.5} />
                                                                    </div>
                                                                    <span className={`text-[10px] font-black px-3 py-1.5 rounded-full border tracking-widest uppercase ${theme === 'dark'
                                                                        ? 'text-primary bg-primary/10 border-primary/20'
                                                                        : 'text-primary bg-primary/5 border-primary/20'
                                                                        }`}>{project.category}</span>
                                                                </div>
                                                                <h4 className={`text-xl font-bold mb-2 group-hover/card:text-primary transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{project.title}</h4>
                                                                <p className={`text-xs line-clamp-2 mb-5 font-medium leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-slate-300 opacity-70 group-hover/card:opacity-100' : 'text-slate-600'}`}>{project.desc}</p>
                                                                <div className={`flex items-center justify-between mt-auto pt-5 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                                                                    <span className="text-[11px] text-primary font-black tracking-widest uppercase">{project.impact}</span>
                                                                    <div className={`p-2 rounded-xl text-primary translate-x-3 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-500 ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/10'}`}>
                                                                        <ExternalLink size={18} />
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        ))
                                                    ) : (
                                                        <div className={`col-span-2 flex items-center justify-center p-20 font-bold italic ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                                                            No services found in this category.
                                                        </div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

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
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-80 bg-[#0B1120] border-l border-white/10 z-[101] lg:hidden flex flex-col shadow-2xl"
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
