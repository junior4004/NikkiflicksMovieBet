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
          </div>
        </aside>
        
        <main className="flex-1 bg-black relative flex items-center justify-center p-8">
           <div className="text-center">
             <h2 className="text-5xl font-black text-red-600 mb-4 tracking-tighter">NIKKIFLIX EMPIRE</h2>
             <p className="text-zinc-500">System Live - Connection Stable</p>
           </div>
        </main>
      </div>
    </div>
  );
}
