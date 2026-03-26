```tsx
"use client";

import React, { useEffect, useState, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { 
  Play, Tv, ArrowLeft, Plus, Trophy, Menu, Search, Volume2, Shield, 
  Zap, Crown, CircleDot, Star, Coins, Gem, Flame, Target, Gift,
  Dices, LayoutGrid, Monitor, Settings, User, Bell, Maximize2, Ghost,
  Mountain, Dog, Landmark, Map, Clapperboard, MessageSquare, Send,
  TrendingUp, Activity, Sparkles, Rocket, Film, Music, Eye
} from 'lucide-react';

export default function NikkiflixEmpireTotalMonolith() {
  const [activeRoom, setActiveRoom] = useState('LOBBY');
  const [balance, setBalance] = useState(154896390);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winAmount, setWinAmount] = useState(0);
  const [currentMachine, setCurrentMachine] = useState<any>(null);
  const [chatInput, setChatInput] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const MACHINE_REGISTRY = useMemo(() => [
    { id: 'TRIPLE_7', name: 'Triple 7 Classic', type: 'Classic', icon: <Flame size={60} />, color: 'from-red-600 to-black', jackpot: '25M', symbols: ['7️⃣', '🍒', '🔔', '🍋', '🍇', '💎'], bg: 'bg-[#0a0000]', border: 'border-red-600' },
    { id: 'DOUBLE_DIAMOND', name: 'Double Diamond', type: 'Classic', icon: <Gem size={60} />, color: 'from-cyan-600 to-blue-900', jackpot: '150M', symbols: ['💎', '💎', '7️⃣', '🔔', '🍒', '🍊'], bg: 'bg-[#000a1a]', border: 'border-blue-400' },
    { id: 'WHEEL_FORTUNE', name: 'Wheel of Empire', type: 'Special', icon: <CircleDot size={60} className="animate-spin-slow" />, color: 'from-yellow-500 to-amber-900', jackpot: 'SPIN WHEEL', symbols: ['🎡', '💰', '🎁', '⭐', '💎', '👑'], bg: 'bg-[#1a1400]', border: 'border-yellow-500' },
    { id: 'AZTEC_GOLD', name: 'Aztec Sun God', type: 'Theme', icon: <Zap size={60} />, color: 'from-orange-600 to-yellow-900', jackpot: '850M', symbols: ['🗿', '🐍', '🐆', '🪙', '☀️', '🎭'], bg: 'bg-[#1a0f00]', border: 'border-orange-600' },
    { id: 'GOTHIC_HORROR', name: 'Vampire Cathedral', type: 'Theme', icon: <Ghost size={60} />, color: 'from-purple-900 to-black', jackpot: '1.2B', symbols: ['bat', 'coffin', 'wine', 'vampire', 'heart', 'moon'], bg: 'bg-[#0a000a]', border: 'border-purple-600' },
    { id: 'CITY_NEON', name: 'Neon Nightride', type: 'Theme', icon: <Landmark size={60} />, color: 'from-blue-600 to-fuchsia-900', jackpot: '678M', symbols: ['🏎️', '💎', '🍹', '🕶️', '🏙️', '🌃'], bg: 'bg-[#00001a]', border: 'border-fuchsia-600' },
    { id: 'BUFFALO_RUN', name: 'Buffalo Stampede', type: 'Animal', icon: <Mountain size={60} />, color: 'from-amber-800 to-orange-950', jackpot: '412M', symbols: ['🦬', '🦅', '🐺', '🌵', '🌽', '☀️'], bg: 'bg-[#1a0a00]', border: 'border-orange-800' },
    { id: 'SCARAB_GOLD', name: 'Pharaoh\'s Tomb', type: 'Ancient', icon: <Star size={60} />, color: 'from-yellow-600 to-stone-900', jackpot: '900M', symbols: ['🪲', '🏺', '🕌', '🐈', '👁️', '🔱'], bg: 'bg-[#0a0500]', border: 'border-yellow-700' },
    { id: 'OCEAN_REEL', name: 'Deep Sea Riches', type: 'Nature', icon: <Activity size={60} />, color: 'from-blue-500 to-teal-900', jackpot: '210M', symbols: ['🧜‍♀️', '🦈', '🐚', '🦀', '🌊', '⚓'], bg: 'bg-[#000a10]', border: 'border-teal-500' },
    { id: 'DRAGON_FIRE', name: 'Dragon Fortune', type: 'Myth', icon: <Flame size={60} />, color: 'from-red-800 to-orange-900', jackpot: '3.5B', symbols: ['🐉', '🏮', '🉐', '🧧', '🪙', '🎋'], bg: 'bg-[#100000]', border: 'border-red-800' },
    { id: 'SPACE_LOTO', name: 'Galactic Jackpots', type: 'Sci-Fi', icon: <Rocket size={60} />, color: 'from-indigo-600 to-black', jackpot: 'MEGA', symbols: ['👽', '🪐', '🚀', '🛰️', '☄️', '🌌'], bg: 'bg-[#00000a]', border: 'border-indigo-600' },
    { id: 'KENO_ELITE', name: 'Empire Keno HD', type: 'Table', icon: <LayoutGrid size={60} />, color: 'from-green-600 to-black', jackpot: 'MAX WIN', symbols: ['1', '12', '45', '77', '23', '9'], bg: 'bg-[#000d00]', border: 'border-green-600' }
  ], []);

  useEffect(() => {
    if (!canvasRef.current || activeRoom !== 'POKER_VIP') return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const tableGeo = new THREE.CylinderGeometry(15, 15, 0.8, 64);
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x074a1e, roughness: 0.1, metalness: 0.2 });
    const table = new THREE.Mesh(tableGeo, tableMat);
    scene.add(table, new THREE.PointLight(0xffffff, 1500, 100), new THREE.AmbientLight(0xffffff, 0.4));
    camera.position.set(0, 20, 30); camera.lookAt(0, -2, 0);
    const animate = () => { requestAnimationFrame(animate); renderer.render(scene, camera); };
    animate();
    return () => renderer.dispose();
  }, [activeRoom]);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true); setWinAmount(0);
    setTimeout(() => {
      setIsSpinning(false);
      if (Math.random() > 0.75) {
        const win = Math.floor(Math.random() * 5000000);
        setWinAmount(win); setBalance(b => b + win);
      }
    }, 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden flex flex-col">
      <header className="h-20 bg-black/95 backdrop-blur-3xl border-b border-white/5 flex items-center justify-between px-8 z-[1000]">
        <div className="flex items-center gap-8">
          <div className="text-3xl font-black italic tracking-tighter text-yellow-500 uppercase">Empire Elite</div>
          <div className="bg-zinc-900 border border-white/10 rounded-xl flex items-center gap-3 px-4 py-1.5 shadow-2xl">
            <Coins className="text-yellow-500" size={20} />
            <span className="text-xl font-black tabular-nums tracking-tighter">GC {balance.toLocaleString()}</span>
            <Plus size={16} className="bg-red-600 rounded cursor-pointer hover:bg-red-500" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <TrendingUp className="text-green-500" size={24} />
          <Trophy className="text-yellow-500" size={24} />
          <Menu className="text-white cursor-pointer" size={32} />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[350px] bg-zinc-950 border-r border-white/5 flex flex-col hidden xl:flex">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-widest text-white/40">Executive Social</h3>
            <div className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> <span className="text-[10px] font-bold">LIVE</span></div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
             <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <p className="text-[10px] font-black uppercase text-yellow-500 mb-3">Recent Global Wins</p>
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center gap-3 text-xs border-b border-white/5 pb-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-yellow-600" />
                    <div><p className="font-black">User_Elite_{i*11}</p><p className="text-green-400 font-bold">WON {(i*1.2).toFixed(1)}M</p></div>
                  </div>
                ))}
             </div>
             <div className="bg-black/40 rounded-2xl p-4 border border-white/5 h-[350px] flex flex-col">
                <div className="flex-1 space-y-3 text-[11px] overflow-y-auto">
                  <div className="text-blue-400 font-bold">Host: <span className="text-white font-medium">VIP Tables are now open.</span></div>
                  <div className="text-yellow-500 font-bold">System: <span className="text-white font-medium">New 4K Cinema feeds active.</span></div>
                  <div className="text-red-500 font-bold">Manager: <span className="text-white font-medium">Check out the Dragon Fire machine.</span></div>
                </div>
                <div className="mt-4 flex gap-2">
                  <input value={chatInput} onChange={e => setChatInput(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[10px]" placeholder="Message Executive Hub..." />
                  <button className="bg-yellow-500 text-black p-2 rounded-lg"><Send size={14}/></button>
                </div>
             </div>
          </div>
        </aside>

        <main className="flex-1 relative overflow-y-auto p-8 scrollbar-hide">
          {activeRoom === 'LOBBY' && (
            <div className="space-y-12 animate-in fade-in duration-500">
               <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  <div onClick={() => setActiveRoom('NIKKIFLIX')} className="h-48 rounded-[2rem] bg-gradient-to-br from-red-900 to-black p-8 border border-white/10 cursor-pointer hover:border-red-500 flex flex-col justify-end">
                    <Film className="text-red-600 mb-2" size={32} />
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">Cinema</h3>
                  </div>
                  <div onClick={() => setActiveRoom('LIVE_TV')} className="h-48 rounded-[2rem] bg-gradient-to-br from-blue-900 to-black p-8 border border-white/10 cursor-pointer hover:border-blue-500 flex flex-col justify-end">
                    <Tv className="text-blue-500 mb-2" size={32} />
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">Live TV</h3>
                  </div>
                  <div onClick={() => setActiveRoom('MUSIC_VIDEOS')} className="h-48 rounded-[2rem] bg-gradient-to-br from-purple-900 to-black p-8 border border-white/10 cursor-pointer hover:border-purple-500 flex flex-col justify-end">
                    <Music className="text-purple-500 mb-2" size={32} />
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">Music Hub</h3>
                  </div>
                  <div onClick={() => setActiveRoom('ADULT_THEATER')} className="h-48 rounded-[2rem] bg-gradient-to-br from-pink-900 to-black p-8 border border-white/10 cursor-pointer hover:border-pink-500 flex flex-col justify-end">
                    <Eye className="text-pink-600 mb-2" size={32} />
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">Private Lounge</h3>
                  </div>
               </section>

               <section className="space-y-8 pb-12">
                  <div className="flex justify-between items-center border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4 text-3xl font-black uppercase italic tracking-tighter"><Dices className="text-yellow-500" /> Empire Casino Floor</div>
                    <button onClick={() => setActiveRoom('POKER_VIP')} className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-black uppercase italic hover:scale-105 transition-transform">VIP Poker Suite</button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {MACHINE_REGISTRY.map(m => (
                      <div key={m.id} onClick={() => { setCurrentMachine(m); setActiveRoom('SLOTS'); }} className={`group relative h-80 rounded-[2.5rem] border-2 ${m.border} bg-zinc-950 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all shadow-xl`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-5 group-hover:opacity-20`} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform">{m.icon}</div>
                        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black to-transparent">
                          <h4 className="text-2xl font-black uppercase italic mb-1">{m.name}</h4>
                          <div className="flex justify-between items-center"><span className="text-[10px] font-black text-white/40 tracking-widest uppercase">Jackpot</span><span className="text-lg font-black text-yellow-400">{m.jackpot}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
               </section>
            </div>
          )}

          {activeRoom === 'SLOTS' && currentMachine && (
            <div className={`fixed inset-0 z-[2000] ${currentMachine.bg} flex flex-col items-center justify-center p-10 animate-in zoom-in-95 duration-300`}>
               <button onClick={() => setActiveRoom('LOBBY')} className="absolute top-10 left-10 p-4 bg-white/10 rounded-2xl hover:bg-red-600 transition-all"><ArrowLeft size={32}/></button>
               <div className={`w-full max-w-6xl aspect-[16/9] bg-black/60 backdrop-blur-3xl rounded-[4rem] border-[15px] ${currentMachine.border} shadow-2xl p-12 flex flex-col relative overflow-hidden`}>
                  <div className="flex justify-between items-start mb-8">
                    <div><h2 className="text-6xl font-black italic uppercase text-white tracking-tighter">{currentMachine.name}</h2><p className="text-green-500 font-black text-xs uppercase tracking-widest mt-2 tracking-tighter">Empire High Fidelity Engine</p></div>
                    <div className="text-right bg-black/50 p-6 rounded-3xl border border-white/5"><p className="text-xs font-black text-yellow-500 uppercase tracking-widest mb-1">Grand Jackpot</p><p className="text-5xl font-black text-white tabular-nums tracking-tighter">{currentMachine.jackpot}</p></div>
                  </div>
                  <div className="flex-1 flex gap-4 mb-10 overflow-hidden">
                    {[0,1,2,3,4].map(i => (
                      <div key={i} className="flex-1 bg-black/50 rounded-2xl border border-white/10 relative overflow-hidden">
                        <div className={`flex flex-col items-center gap-8 py-4 ${isSpinning ? 'animate-reel-flow' : ''}`} style={{ animationDelay: `${i*100}ms` }}>
                          {[...Array(10)].map((_, idx) => <div key={idx} className="text-7xl">{currentMachine.symbols[idx % currentMachine.symbols.length]}</div>)}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-10">
                       <div className="text-center"><p className="text-[10px] font-black text-white/40 uppercase">Bet</p><p className="text-3xl font-black tabular-nums tracking-tighter">50,000</p></div>
                       <div className="text-center"><p className="text-[10px] font-black text-yellow-500 uppercase">Win</p><p className={`text-3xl font-black tabular-nums tracking-tighter ${winAmount > 0 ? 'text-green-400' : 'text-white/20'}`}>{winAmount.toLocaleString()}</p></div>
                    </div>
                    <button onClick={handleSpin} className={`w-40 h-40 rounded-full border-8 border-black flex items-center justify-center font-black text-2xl italic uppercase tracking-tighter ${isSpinning ? 'bg-zinc-800' : 'bg-gradient-to-b from-yellow-400 to-yellow-700 hover:scale-105 active:scale-90 cursor-pointer shadow-[0_0_50px_rgba(234,179,8,0.3)]'}`}>
                      {isSpinning ? '...' : 'Spin'}
                    </button>
                    <div className="flex gap-4"><div className="p-4 bg-white/5 rounded-full border border-white/10"><Volume2 size={30}/></div><div className="p-4 bg-white/5 rounded-full border border-white/10"><Shield size={30}/></div></div>
                  </div>
               </div>
            </div>
          )}

          {activeRoom === 'POKER_VIP' && (
            <div className="fixed inset-0 z-[2000] bg-[#001000] animate-in fade-in duration-500">
               <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
               <button onClick={() => setActiveRoom('LOBBY')} className="absolute top-10 left-10 z-[3000] bg-white/10 p-4 rounded-xl hover:bg-red-600 transition-all"><ArrowLeft size={32}/></button>
               <div className="absolute bottom-10 inset-x-10 flex justify-between items-end">
                  <div className="bg-black/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 w-[350px]">
                     <h3 className="text-3xl font-black uppercase italic text-green-500 mb-4 tracking-tighter">VIP Table 09</h3>
                     <button className="w-full bg-green-600 py-4 rounded-xl text-xl font-black uppercase italic hover:bg-green-500 transition-colors shadow-2xl">Join Seat</button>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-xl font-black cursor-pointer active:scale-90">FOLD</div>
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-xl font-black cursor-pointer active:scale-90">CALL</div>
                    <div className="w-28 h-28 bg-yellow-500 text-black rounded-full flex items-center justify-center text-2xl font-black cursor-pointer active:scale-90 shadow-2xl">RAISE</div>
                  </div>
               </div>
            </div>
          )}

          {['NIKKIFLIX', 'LIVE_TV', 'MUSIC_VIDEOS', 'ADULT_THEATER'].includes(activeRoom) && (
             <div className="fixed inset-0 z-[2000] bg-black flex flex-col items-center justify-center animate-in slide-in-from-bottom-20 duration-500 p-10">
                <button onClick={() => setActiveRoom('LOBBY')} className="absolute top-10 left-10 z-[3000] p-4 bg-white/10 rounded-full hover:bg-red-600 transition-all"><ArrowLeft size={32}/></button>
                <div className="w-full max-w-6xl aspect-video bg-zinc-950 rounded-[4rem] border-[20px] border-white/5 shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Play size={100} className="text-red-600 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" />
                      <p className="mt-8 text-white/10 font-black uppercase tracking-[1em]">Establishing HD Stream...</p>
                   </div>
                   <div className="absolute bottom-10 inset-x-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                      <div><h4 className="text-3xl font-black uppercase italic tracking-tighter">{activeRoom.replace('_', ' ')}</h4></div>
                      <button className="bg-white text-black px-12 py-4 rounded-xl font-black uppercase italic hover:bg-yellow-500 transition-colors">Play Stream</button>
                   </div>
                </div>
             </div>
          )}
        </main>
      </div>

      <style jsx global>{`
        @keyframes reel-flow { 0% { transform: translateY(0); } 100% { transform: translateY(-75%); } }
        .animate-reel-flow { animation: reel-flow 0.1s linear infinite; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
