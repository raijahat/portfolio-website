import { Code, Cpu, Mail, Github, Linkedin, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import profileImage from "../imports/WhatsApp_Image_2026-04-24_at_12.42.15.jpeg";
import profileImage2 from "../imports/WhatsApp_Image_2026-04-24_at_12.42.15-1.jpeg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-emerald-400">Portfolio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-emerald-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-emerald-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-emerald-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-emerald-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors py-2">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors py-2">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors py-2">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors py-2">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-emerald-400 mb-4">Halo, Saya</div>
            <h1 className="text-5xl md:text-6xl mb-4 text-white">Mahasiswa Teknik Informatika</h1>
            <p className="text-xl text-slate-300 mb-8">Spesialisasi Web Development & IoT</p>
            <p className="text-slate-400 mb-8">
              Passionate about creating innovative web solutions and IoT systems.
              Combining modern web technologies with embedded systems to build the future.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur opacity-75"></div>
              <img
                src={profileImage2}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-800"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-emerald-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-white">Tentang Saya</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 mb-6">
              Saya adalah mahasiswa Teknik Informatika yang memiliki passion di bidang pengembangan web dan Internet of Things (IoT).
              Dengan kombinasi kedua bidang ini, saya tertarik untuk menciptakan solusi teknologi yang dapat memecahkan masalah nyata.
            </p>
            <p className="text-slate-300 mb-6">
              Di bidang web development, saya menguasai teknologi modern seperti React, Node.js, dan berbagai framework terkini.
              Sementara di bidang IoT, saya memiliki pengalaman dalam bekerja dengan microcontroller seperti Arduino dan ESP32,
              serta mengintegrasikannya dengan aplikasi web untuk menciptakan sistem yang terhubung dan cerdas.
            </p>
            <p className="text-slate-300">
              Saya percaya bahwa masa depan teknologi terletak pada konvergensi antara web development dan IoT,
              dan saya bersemangat untuk menjadi bagian dari revolusi ini.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl text-center mb-12 text-white">Keahlian</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Code className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-2xl text-white">Web Development</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">HTML & CSS</span>
                    <span className="text-emerald-400">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">JavaScript/TypeScript</span>
                    <span className="text-emerald-400">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">React & Next.js</span>
                    <span className="text-emerald-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Node.js & Express</span>
                    <span className="text-emerald-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Database (SQL/NoSQL)</span>
                    <span className="text-emerald-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* IoT */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Cpu className="text-blue-400" size={32} />
                </div>
                <h3 className="text-2xl text-white">Internet of Things</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Arduino Programming</span>
                    <span className="text-blue-400">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">ESP32/ESP8266</span>
                    <span className="text-blue-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Sensor Integration</span>
                    <span className="text-blue-400">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">MQTT Protocol</span>
                    <span className="text-blue-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">IoT Cloud Platforms</span>
                    <span className="text-blue-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl text-center mb-12 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-colors">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                <Globe size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">Smart Home Dashboard</h3>
                <p className="text-slate-400 mb-4">
                  Web application untuk monitoring dan kontrol perangkat IoT di rumah menggunakan React dan MQTT.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MQTT</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">ESP32</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-colors">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Cpu size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">Weather Station IoT</h3>
                <p className="text-slate-400 mb-4">
                  Sistem monitoring cuaca berbasis Arduino dengan web interface untuk visualisasi data real-time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Arduino</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Chart.js</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-colors">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Code size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">E-Commerce Platform</h3>
                <p className="text-slate-400 mb-4">
                  Platform e-commerce full-stack dengan fitur shopping cart, payment gateway, dan admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Stripe</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-colors">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                <Cpu size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">Automated Plant Watering</h3>
                <p className="text-slate-400 mb-4">
                  Sistem penyiraman tanaman otomatis dengan monitoring kelembaban tanah melalui aplikasi web.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">ESP8266</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Firebase</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-colors">
              <div className="h-48 bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <Globe size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">Portfolio Website Builder</h3>
                <p className="text-slate-400 mb-4">
                  Platform pembuatan portfolio website dengan drag-and-drop interface dan template customizable.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Tailwind</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">DnD</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-colors">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                <Code size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">Smart Parking System</h3>
                <p className="text-slate-400 mb-4">
                  Sistem parkir pintar dengan sensor ultrasonik dan web dashboard untuk monitoring ketersediaan slot parkir.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Angular</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Arduino</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">WebSocket</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl text-center mb-12 text-white">Hubungi Saya</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 text-center mb-8">
              Tertarik untuk berkolaborasi atau ada pertanyaan? Jangan ragu untuk menghubungi saya!
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Mail className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Email</div>
                  <div className="text-white">your.email@example.com</div>
                </div>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Github className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">GitHub</div>
                  <div className="text-white">@yourusername</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Linkedin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">LinkedIn</div>
                  <div className="text-white">Your Name</div>
                </div>
              </a>
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Globe className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Website</div>
                  <div className="text-white">yourwebsite.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2026 Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}