import React, { useRef, useState, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const ContactForm = ({ inquiryContext }) => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const templates = [
        { label: 'General Inquiry', text: "I'm interested in learning more about your services and how you can help my business." },
        { label: 'Project Collaboration', text: "I have a new project idea and would like to discuss a potential collaboration." },
        { label: 'Training Inquiry', text: "I'm interested in your professional training programs. Could you provide more information on upcoming batches?" },
        { label: 'Schedule a Call', text: "I would like to schedule a discovery call to discuss our technology requirements." }
    ];

    useEffect(() => {
        if (inquiryContext) {
            setMessage(`I am interested in the ${inquiryContext} course. Please provide more details.`);
        }
    }, [inquiryContext]);

    const handleTemplateSelect = (text) => {
        setMessage(text);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE,
                import.meta.env.VITE_EMAILJS_TEMPLATE,
                formRef.current,
                import.meta.env.VITE_EMAILJS_USER
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    toast.success("Message sent successfully! We'll get back to you soon.", {
                        duration: 5000,
                        style: {
                            borderRadius: '12px',
                            background: 'var(--color-bg-secondary)',
                            color: 'var(--color-text)',
                            border: '1px solid var(--color-border)',
                        },
                    });
                    setSubmitStatus('success');
                    setIsSubmitting(false);
                    formRef.current.reset();
                    setPhone('');
                    setMessage(''); // Clear message after send
                },
                (error) => {
                    console.error('FAILED...', error);
                    toast.error(`Failed to send message: ${error.text || 'Unknown error'}`, {
                        style: {
                            borderRadius: '12px',
                            background: 'var(--color-bg-secondary)',
                            color: '#ef4444',
                            border: '1px solid #fee2e2',
                        },
                    });
                    setSubmitStatus('error');
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <div className="bg-bg-secondary backdrop-blur-md p-10 rounded-3xl border border-border shadow-lg transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">
                {inquiryContext ? `Enquire about ${inquiryContext}` : 'Send us a Message'}
            </h3>

            <form className="flex flex-col gap-6" ref={formRef} onSubmit={sendEmail}>
                <input type="hidden" name="phone_full" value={phone} />
                <input type="hidden" name="subject" value={inquiryContext ? `Inquiry: ${inquiryContext}` : 'General Contact'} />

                <div className="flex flex-col gap-2">
                    <label htmlFor="user_name" className="font-medium text-sm text-text-secondary">Full Name</label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        placeholder="John Doe"
                        required
                        className="p-3 rounded-xl border border-border bg-bg text-text placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="user_email" className="font-medium text-sm text-text-secondary">Email Address</label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        placeholder="john@company.com"
                        required
                        className="p-3 rounded-xl border border-border bg-bg text-text placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-medium text-sm text-text-secondary">Phone Number</label>
                    <PhoneInput
                        country={'in'}
                        value={phone}
                        onChange={phone => setPhone(phone)}
                        inputClass="!w-full !h-[50px] !bg-bg !border-border !text-text !rounded-xl !font-sans !text-base focus:!border-primary focus:!ring-1 focus:!ring-primary/50 placeholder:!text-slate-400 dark:placeholder:!text-slate-600"
                        containerClass="!w-full"
                        buttonClass="!bg-bg !border-border !rounded-l-xl hover:!bg-bg-secondary"
                        dropdownClass="!bg-bg !text-text !border-border shadow-xl country-list-dark"
                        enableSearch={true}
                        searchStyle={{ background: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-border)' }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-medium text-sm text-text-secondary">Company / Organization</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Your Company (Optional)"
                        className="p-3 rounded-xl border border-border bg-bg text-text placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="message" className="font-medium text-sm text-text-secondary">Message</label>
                        {!inquiryContext && (
                            <div className="flex gap-2 flex-wrap justify-end">
                                {templates.map((tpl, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => handleTemplateSelect(tpl.text)}
                                        className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all"
                                    >
                                        {tpl.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="Tell us about your project or requirements..."
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-3 rounded-xl border border-border bg-bg text-text placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 resize-y"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3.5 bg-primary hover:bg-primary-dark text-white text-base font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin mr-2" size={20} /> Sending...
                        </>
                    ) : (
                        <>
                            Send Message <Send size={20} className="ml-2" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
