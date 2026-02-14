
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = {
    name: 'Marwa Gamal Abdel Aal Refai',
    title: 'General Dentist',
    location: 'Mahayil Asir, Saudi Arabia',
    email: 'Ahmedzamalik89@gmail.com',
    phone: '+966 551 983 125',
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 accent-gradient-1"></div>
        <div className="absolute inset-0 accent-gradient-2"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-glass">
        <div className="max-w-[1120px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-100">Marwa Refai</span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">General Dentist</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-slate-100 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden glass-card absolute top-20 left-0 w-full p-6 space-y-4 border-t-0 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10 max-w-[1120px] mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="hero" className="mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 size={14} />
                Now Practicing in KSA
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Clinical care with a focus on <span className="text-indigo-400">safety, trust</span>, and consistent outcomes.
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
                Providing comprehensive dental services with over 7 years of clinical excellence across Egypt and Saudi Arabia.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                  Request Consultation
                </a>
                <a href="#experience" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95">
                  View Experience
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <MapPin size={16} className="text-indigo-400" />
                  {contactInfo.location}
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <Mail size={16} className="text-indigo-400" />
                  {contactInfo.email}
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <Phone size={16} className="text-indigo-400" />
                  {contactInfo.phone}
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full opacity-30"></div>
                <div className="glass-card aspect-[4/5] rounded-[40px] flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src="https://picsum.photos/id/40/600/750" 
                    alt="Professional Dental Environment" 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass-card p-6 rounded-3xl space-y-2 border-white/20">
                      <p className="text-emerald-400 font-bold uppercase text-xs tracking-widest">Accreditation</p>
                      <p className="text-white font-medium text-lg">Saudi Dental Licensing Examination (SDLE) Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-32">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Professional Summary</h2>
              <div className="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                General dentist with clinical experience across Egypt and Saudi Arabia. Graduate of Assiut University with a Bachelor of Dental Medicine and Surgery. Licensed by the Saudi Ministry of Health and registered with the Saudi Commission for Health Specialties. Successfully passed the Saudi Dental Licensing Examination (SDLE) and DataFlow verification.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <Briefcase className="text-indigo-400" />
            Clinical Experience
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-[32px] border-l-4 border-l-indigo-600 group hover:bg-white/[0.05] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Dental Practitioner</h3>
                  <p className="text-lg text-slate-400">Rwad Alshifa Medical Complex, KSA</p>
                </div>
                <div className="bg-indigo-600/10 text-indigo-400 px-4 py-2 rounded-xl text-sm font-bold">
                  2024 – Present
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                Providing high-quality clinical dental care with a commitment to patient safety and modern dental standards. Focused on consistent outcomes and building patient trust within the Mahayil Asir community.
              </p>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section id="credentials" className="mb-24 scroll-mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <Award className="text-indigo-400" />
            Licenses & Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Saudi MOH Licensed', desc: 'Authorized practitioner by the Ministry of Health, KSA' },
              { title: 'SCFHS Registered', desc: 'Registered with Saudi Commission for Health Specialties' },
              { title: 'SDLE Passed + DataFlow', desc: 'Verified clinical competence and documentation' }
            ].map((card, i) => (
              <div key={i} className="glass-card p-8 rounded-[32px] flex flex-col items-center text-center space-y-4 hover:translate-y-[-4px] transition-transform">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="text-slate-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24 scroll-mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <GraduationCap className="text-indigo-400" />
            Education
          </h2>
          <div className="glass-card p-10 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap size={120} />
            </div>
            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Dental Medicine & Surgery</h3>
                <p className="text-indigo-400 font-semibold text-lg">Assiut University (2017)</p>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                Marwa completed her Bachelor of Dental Medicine & Surgery at Assiut University in 2017. This program provided comprehensive training in various dental disciplines to deliver quality care in Saudi Arabia.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-32">
          <h2 className="text-3xl font-bold text-white mb-12">Core Competencies</h2>
          <div className="flex flex-wrap gap-4">
            {['Clinical Dentistry', 'Patient Care', 'Decision Making', 'Attention to Detail'].map((skill) => (
              <div key={skill} className="px-8 py-4 rounded-2xl glass-card text-slate-200 font-semibold text-lg flex items-center gap-3 hover:border-indigo-500/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="scroll-mt-32">
          <div className="glass-card rounded-[48px] p-8 md:p-16 relative overflow-hidden bg-gradient-to-br from-indigo-900/10 to-transparent">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Get in touch</h2>
                <p className="text-xl text-slate-400">Get in touch for further inquiries or professional consultation!</p>
                <div className="flex flex-col gap-4">
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <span className="text-lg font-medium">{contactInfo.email}</span>
                  </a>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <span className="text-lg font-medium">{contactInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-indigo-400">
                      <MapPin size={20} />
                    </div>
                    <span className="text-lg font-medium">{contactInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="w-full bg-white text-slate-950 hover:bg-slate-200 py-6 rounded-3xl font-bold text-xl text-center transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <Mail /> Email Now
                </a>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="w-full glass-card border-white/20 hover:bg-white/10 text-white py-6 rounded-3xl font-bold text-xl text-center transition-all flex items-center justify-center gap-3"
                >
                  <Phone /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 relative z-10">
        <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <p>© {currentYear} Marwa Gamal Abdel Aal Refai. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
