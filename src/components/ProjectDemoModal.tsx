import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Play, RotateCcw, Sparkles, Send, Search, Calendar, Info, Globe, Trophy, Droplets, CheckCircle, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Project } from '../types';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  // --- Charity Water Game State ---
  const [gameScore, setGameScore] = useState(0);
  const [gameTime, setGameTime] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [gameItems, setGameItems] = useState<Array<{ id: number; type: 'jerry' | 'dirty'; x: number; y: number }>>([]);
  const [gameFeedback, setGameFeedback] = useState('Click "Start Water Quest" to begin collecting clean water!');

  // Start Charity Game
  const startCharityGame = () => {
    setGameScore(0);
    setGameTime(30);
    setGameActive(true);
    setGameFeedback('Collect yellow jerry cans (+10)! Avoid dirty water (-5)!');
    spawnItems();
  };

  const spawnItems = () => {
    const newItems = Array.from({ length: 5 }, (_, i) => ({
      id: Math.random(),
      type: Math.random() > 0.3 ? 'jerry' : 'dirty',
      x: Math.floor(Math.random() * 80) + 10,
      y: Math.floor(Math.random() * 70) + 15,
    }));
    setGameItems(newItems as any);
  };

  useEffect(() => {
    let timer: any;
    if (gameActive && gameTime > 0) {
      timer = setInterval(() => {
        setGameTime((prev) => prev - 1);
        if (Math.random() > 0.5) spawnItems();
      }, 1000);
    } else if (gameTime === 0 && gameActive) {
      setGameActive(false);
      setGameFeedback(`Game Over! Final Score: ${gameScore} points.`);
      if (gameScore >= 50) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    }
    return () => clearInterval(timer);
  }, [gameActive, gameTime]);

  const handleItemClick = (id: number, type: 'jerry' | 'dirty') => {
    if (!gameActive) return;
    if (type === 'jerry') {
      const newScore = gameScore + 10;
      setGameScore(newScore);
      setGameFeedback('Clean Water Collected! +10 pts');
      if (newScore >= 50 && newScore % 50 === 0) {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      }
    } else {
      setGameScore((prev) => Math.max(0, prev - 5));
      setGameFeedback('Oh no! Dirty Water Penalty! -5 pts');
    }
    setGameItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --- L'Oréal Routine Builder State ---
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['CeraVe Hydrating Cleanser', 'Lancôme Advanced Génifique']);
  const [productCategory, setProductCategory] = useState<string>('All');
  const [productSearch, setProductSearch] = useState<string>('');
  const [generatedRoutine, setGeneratedRoutine] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: "Bonjour! I am your AI Skincare Advisor. Select your products and click 'Generate Routine'!" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [rtlMode, setRtlMode] = useState(false);

  const lorealProducts = [
    { name: 'CeraVe Hydrating Cleanser', brand: 'CeraVe', category: 'Cleanser', desc: 'Hydrating facial cleanser with hyaluronic acid & ceramides.' },
    { name: 'Garnier Micellar Cleansing Water', brand: 'Garnier', category: 'Cleanser', desc: 'All-in-1 cleanser and makeup remover gentle for all skin.' },
    { name: 'Lancôme Advanced Génifique Serum', brand: 'Lancôme', category: 'Serum', desc: 'Strengthens skin moisture barrier and targets radiance.' },
    { name: 'L\'Oréal Paris Revitalift Retinol Serum', brand: 'L\'Oréal Paris', category: 'Serum', desc: 'Night serum with pure retinol for smooth skin texture.' },
    { name: 'L\'Oréal Triple Power Moisturizer', brand: 'L\'Oréal Paris', category: 'Moisturizer', desc: 'Anti-aging face cream with Hyaluronic Acid & Vitamin C.' },
    { name: 'CeraVe AM Facial Moisturizing Lotion SPF 30', brand: 'CeraVe', category: 'Moisturizer', desc: 'Broad spectrum SPF 30 protection and essential ceramides.' }
  ];

  const handleToggleProduct = (name: string) => {
    setSelectedProducts((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const handleGenerateRoutine = () => {
    if (selectedProducts.length === 0) {
      alert('Please select at least one product first!');
      return;
    }
    const routine = `Recommended Skincare Routine (${selectedProducts.length} Products):\n\n` +
      `☀️ MORNING ROUTINE:\n` +
      `1. Gentle Cleanse: Apply selected cleanser to damp skin.\n` +
      `2. Hydration Boost: Apply serum evenly onto face and neck.\n` +
      `3. Moisture Seal: Finish with moisturizer and sun protection.\n\n` +
      `🌙 EVENING ROUTINE:\n` +
      `1. Double Cleanse: Remove impurities.\n` +
      `2. Target Treatment: Massage active serums softly.\n` +
      `3. Night Restoration: Apply rich moisturizing cream before sleep.`;
    setGeneratedRoutine(routine);
    setChatMessages((prev) => [
      ...prev,
      { sender: 'ai', text: `✨ Custom Routine generated for your ${selectedProducts.length} selected product(s)! Ask me any follow-up questions about usage order or skin types.` }
    ]);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let aiResp = "For best results, apply lighter water-based serums first before layering thicker moisturizing creams. Always wear sunscreen during the daytime!";
      if (userMsg.toLowerCase().includes('order')) {
        aiResp = "Application Order: Cleanser ➔ Toner ➔ Water Serums ➔ Moisturizer ➔ Sunscreen (AM).";
      } else if (userMsg.toLowerCase().includes('sensitive')) {
        aiResp = "These formulas include soothing ceramides and micellar water suitable for sensitive skin. Patch test first!";
      }
      setChatMessages((prev) => [...prev, { sender: 'ai', text: aiResp }]);
    }, 600);
  };

  // --- NASA Space Explorer State ---
  const [spaceFacts] = useState([
    "Did You Know? One day on Venus is longer than one year on Venus!",
    "Did You Know? Space is completely silent because there is no atmosphere for sound to travel.",
    "Did You Know? Sunset on Mars appears blue due to dust particles filtering light!",
    "Did You Know? Neutron stars can spin 600 times per second!"
  ]);
  const [currentFactIdx, setCurrentFactIdx] = useState(0);
  const [selectedNasaItem, setSelectedNasaItem] = useState<any | null>(null);

  const sampleNasaItems = [
    {
      title: "The Pillars of Creation (JWST)",
      date: "2026-08-01",
      media_type: "image",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      explanation: "A breathtaking star-forming region inside the Eagle Nebula captured with infrared clarity revealing newborn stars embedded in dusty columns."
    },
    {
      title: "Carina Nebula Cosmic Cliffs",
      date: "2026-07-28",
      media_type: "image",
      url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop",
      explanation: "Dramatic landscape of mountain-like dust clouds sculpted by intense ultraviolet radiation from massive young stars."
    },
    {
      title: "Spiral Galaxy M51 Whirlpool",
      date: "2026-07-15",
      media_type: "image",
      url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
      explanation: "Classic spiral arm galaxy with glowing regions of active star birth and dark dust lanes sweeping across interstellar space."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 shadow-2xl transition-all ${
        darkMode ? 'bg-[#121212] border-[#3d3d3d] text-[#F4F4F1]' : 'bg-[#F4F4F1] border-[#1A1A1A] text-[#1A1A1A]'
      }`}>
        
        {/* Modal Header */}
        <div className={`sticky top-0 z-10 px-6 py-4 flex items-center justify-between border-b-2 backdrop-blur-md ${
          darkMode ? 'bg-[#121212]/95 border-[#3d3d3d]' : 'bg-[#F4F4F1]/95 border-[#1A1A1A]'
        }`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 border font-mono font-bold" style={{ backgroundColor: `${project.accentColor}20`, borderColor: project.accentColor, color: project.accentColor }}>
                {project.badge}
              </span>
              <span className="text-xs font-mono font-bold uppercase text-[#3B82F6]">Interactive Live Demo</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight mt-1">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 btn-geo-primary px-3 py-1.5 text-xs font-mono"
            >
              <span>GitHub Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className={`p-2 border-2 transition-colors ${
                darkMode ? 'bg-[#1A1A1A] border-[#3d3d3d] hover:border-[#3B82F6]' : 'bg-white border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body depending on demoType */}
        <div className="p-6">
          
          {/* DEMO 1: CHARITY WATER GAME */}
          {project.demoType === 'charity_water' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#facc15]/10 border border-[#facc15]/30 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-sm flex items-center gap-2 text-[#facc15]">
                    <Droplets className="w-4 h-4" />
                    Water Quest Game Prototype
                  </h4>
                  <p className="text-xs opacity-80 mt-0.5">
                    Tap clean yellow jerry cans (+10 pts). Avoid dirty drops (-5 penalty). Reach 50 pts for confetti!
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm font-mono font-bold">
                  <div className="px-3 py-1 rounded-lg bg-black/20 border border-white/10">
                    Score: <span className="text-[#facc15]">{gameScore}</span>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-black/20 border border-white/10">
                    Time: <span className="text-pink-400">{gameTime}s</span>
                  </div>
                  <button
                    onClick={startCharityGame}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#facc15] text-black hover:bg-yellow-300 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    {gameActive ? 'Restart' : 'Start Quest'}
                  </button>
                </div>
              </div>

              {/* Game Playground Area */}
              <div className={`relative h-64 rounded-2xl border overflow-hidden flex items-center justify-center ${
                darkMode ? 'bg-[#150d17] border-[#3d273e]' : 'bg-[#f4ebf0] border-[#d8b5ca]'
              }`}>
                {!gameActive ? (
                  <div className="text-center p-6 space-y-3">
                    <Trophy className="w-12 h-12 text-[#facc15] mx-auto animate-bounce" />
                    <p className="text-sm font-medium">{gameFeedback}</p>
                    <button
                      onClick={startCharityGame}
                      className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#facc15] text-black shadow-md hover:scale-105 transition-transform"
                    >
                      Play Charity Water Game
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="absolute top-2 left-3 text-xs font-mono text-[#e0a8bb]">
                      {gameFeedback}
                    </div>
                    {gameItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id, item.type)}
                        style={{ left: `${item.x}%`, top: `${item.y}%` }}
                        className={`absolute p-3 rounded-2xl transition-transform hover:scale-125 cursor-pointer shadow-lg ${
                          item.type === 'jerry'
                            ? 'bg-yellow-400 border-2 border-yellow-200 text-black animate-pulse'
                            : 'bg-gray-700 border-2 border-gray-500 text-white'
                        }`}
                      >
                        {item.type === 'jerry' ? '🛢️ +10' : '☣️ -5'}
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          {/* DEMO 2: L'ORÉAL ROUTINE BUILDER */}
          {project.demoType === 'loreal_routine' && (
            <div className={`space-y-6 ${rtlMode ? 'dir-rtl text-right' : ''}`}>
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#ff003b]/10 border border-[#ff003b]/30">
                <div>
                  <h4 className="font-semibold text-sm text-[#ff003b] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    L'Oréal Product-Aware AI Routine Builder
                  </h4>
                  <p className="text-xs opacity-80 mt-0.5">Select products below to construct your custom beauty schedule.</p>
                </div>
                <button
                  onClick={() => setRtlMode(!rtlMode)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border border-[#ff003b]/40 font-mono hover:bg-[#ff003b]/20"
                >
                  <Globe className="w-3.5 h-3.5" />
                  RTL Mode: {rtlMode ? 'ON' : 'OFF'}
                </button>
              </div>

              {/* Product Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lorealProducts.map((p) => {
                  const isSelected = selectedProducts.includes(p.name);
                  return (
                    <div
                      key={p.name}
                      onClick={() => handleToggleProduct(p.name)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'border-[#ff003b] bg-[#ff003b]/10'
                          : darkMode ? 'bg-[#231725] border-[#3d273e]' : 'bg-white border-[#d8b5ca]'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] font-bold text-[#ff003b] uppercase tracking-wider">{p.brand} • {p.category}</span>
                        <h5 className="font-semibold text-xs mt-0.5">{p.name}</h5>
                        <p className="text-[11px] opacity-70 mt-1">{p.desc}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="mt-1 accent-[#ff003b]"
                      />
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleGenerateRoutine}
                className="w-full py-2.5 rounded-full text-xs font-bold bg-[#ff003b] text-white hover:bg-rose-600 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate Personalized Routine ({selectedProducts.length} Selected)
              </button>

              {/* Chat & Generated Routine Output */}
              {generatedRoutine && (
                <div className={`p-4 rounded-xl border font-mono text-xs whitespace-pre-line ${
                  darkMode ? 'bg-[#150d17] border-[#3d273e] text-[#f5e6ee]' : 'bg-white border-[#d8b5ca] text-[#2e1828]'
                }`}>
                  {generatedRoutine}
                </div>
              )}

              {/* Chat Interface */}
              <div className={`p-4 rounded-xl border space-y-3 ${
                darkMode ? 'bg-[#180e1a] border-[#3d273e]' : 'bg-white border-[#d8b5ca]'
              }`}>
                <div className="space-y-2 max-h-40 overflow-y-auto p-2">
                  {chatMessages.map((m, idx) => (
                    <div key={idx} className={`p-2.5 rounded-xl text-xs ${
                      m.sender === 'user'
                        ? 'bg-[#e0a8bb] text-black font-medium ml-auto max-w-[80%]'
                        : 'bg-black/20 text-[#f5e6ee] border border-white/10 max-w-[85%]'
                    }`}>
                      {m.text}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendChat} className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask follow-up skincare questions..."
                    className={`flex-1 px-3 py-2 rounded-full text-xs border focus:outline-none ${
                      darkMode ? 'bg-[#281d29] border-[#4a2e4c] text-white' : 'bg-[#faf2f6] border-[#d8b5ca]'
                    }`}
                  />
                  <button type="submit" className="p-2 rounded-full bg-[#ff003b] text-white hover:bg-rose-600">
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* DEMO 3: NASA SPACE EXPLORER */}
          {project.demoType === 'nasa_explorer' && (
            <div className="space-y-6">
              {/* Fact banner */}
              <div className="p-4 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Info className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
                  <p className="text-xs font-medium text-[#38bdf8]">
                    {spaceFacts[currentFactIdx]}
                  </p>
                </div>
                <button
                  onClick={() => setCurrentFactIdx((prev) => (prev + 1) % spaceFacts.length)}
                  className="px-3 py-1 rounded-full text-[11px] border border-[#38bdf8]/40 hover:bg-[#38bdf8]/20 flex-shrink-0"
                >
                  Next Fact
                </button>
              </div>

              {/* Date Filter & Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sampleNasaItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedNasaItem(item)}
                    className={`group relative rounded-2xl overflow-hidden border transition-all cursor-pointer hover:scale-105 hover:shadow-xl ${
                      darkMode ? 'bg-[#231725] border-[#3d273e]' : 'bg-white border-[#d8b5ca]'
                    }`}
                  >
                    <div className="h-36 overflow-hidden relative">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-cyan-300 font-bold">
                        {item.date}
                      </span>
                    </div>
                    <div className="p-3">
                      <h5 className="font-semibold text-xs truncate">{item.title}</h5>
                      <p className="text-[10px] opacity-70 mt-1">Click to open NASA APOD modal view</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* NASA Modal Overlay */}
              {selectedNasaItem && (
                <div className="p-4 rounded-2xl border bg-black/80 text-white space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-cyan-300">{selectedNasaItem.title} ({selectedNasaItem.date})</h4>
                    <button onClick={() => setSelectedNasaItem(null)} className="text-xs p-1 hover:text-cyan-300">Close</button>
                  </div>
                  <img src={selectedNasaItem.url} alt="NASA detail" className="w-full h-48 object-cover rounded-xl" />
                  <p className="text-xs leading-relaxed opacity-90">{selectedNasaItem.explanation}</p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t-2 flex flex-wrap items-center justify-between gap-4 ${
          darkMode ? 'bg-[#121212] border-[#3d3d3d]' : 'bg-[#F4F4F1] border-[#1A1A1A]'
        }`}>
          <div className="text-xs font-mono">
            Built by <span className="font-bold text-[#3B82F6]">Cherish Agusionu</span> • Full source code on GitHub
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-geo-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono"
          >
            <span>Open Full App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
