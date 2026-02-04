import { useAppStore } from '../../store/appStore';

export function AppleDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-6 font-sans transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="text-center max-w-xs">
        <div className={`w-28 h-28 rounded-[32px] mx-auto mb-5 flex items-center justify-center shadow-lg transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'}`}>
          <div className={`w-16 h-16 rounded-2xl transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
        </div>
        <h1 className={`text-3xl font-semibold mb-1 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Product</h1>
        <p className={`text-base mb-5 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Pro. Beyond.</p>
        <button className="bg-[#0071E3] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#0077ED] transition-all shadow-sm">
          Learn more
        </button>
        <p className={`mt-3 text-xs transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>From $999</p>
      </div>
    </div>
  );
}

export function BraunDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex flex-col font-sans transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="grid grid-cols-12 gap-0 h-full">
        <div className={`col-span-5 flex items-center justify-center border-r transition-colors duration-300 ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
          <div className="text-center p-4">
            <div className={`w-20 h-20 rounded-full mb-3 mx-auto flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className={`w-12 h-12 rounded-full transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Braun</div>
          </div>
        </div>
        <div className={`col-span-7 p-4 flex flex-col justify-between transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`aspect-square flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-100'}`}>
                <div className={`w-5 h-5 transition-colors duration-300 ${i % 2 === 0 ? 'rounded-full' : ''} ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />
              </div>
            ))}
          </div>
          <div className={`text-[9px] uppercase tracking-widest text-right transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Less, but better
          </div>
        </div>
      </div>
    </div>
  );
}

export function SwissDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex flex-col p-3 font-sans transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-1">
        <div className={`col-span-3 row-span-2 flex items-end p-3 transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`}>
          <span className={`text-xl font-bold uppercase tracking-tighter transition-colors duration-300 ${isDark ? 'text-black' : 'text-white'}`} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Typo<br/>graphic
          </span>
        </div>
        <div className="bg-[#FF0000] row-span-2 flex items-center justify-center">
          <span className="text-white text-3xl font-black">A</span>
        </div>
        <div className="bg-[#FFD700] flex items-center justify-center">
          <span className="text-black text-xs font-bold uppercase">1957</span>
        </div>
        <div className={`col-span-2 flex items-center justify-center border-2 transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border-white' : 'bg-white border-black'}`}>
          <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>grid system</span>
        </div>
        <div className={`flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className={`w-4 h-4 rounded-full transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
        </div>
      </div>
    </div>
  );
}

export function BauhausDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#F5F5F5]'}`}>
      <div className="relative w-44 h-44">
        {/* Red Circle */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#E53935] rounded-full shadow-md" />
        {/* Yellow Square */}
        <div className="absolute top-6 right-2 w-14 h-14 bg-[#FDD835] transform rotate-12 shadow-md" />
        {/* Blue Square */}
        <div className="absolute bottom-0 left-6 w-20 h-20 bg-[#1E88E5] shadow-md" />
        {/* Black Rectangle */}
        <div className="absolute bottom-6 right-6 w-10 h-16 bg-black transform -rotate-6 shadow-md" />
        {/* White Circle Outline */}
        <div className={`absolute top-1/2 left-1/2 w-10 h-10 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${isDark ? 'border-white' : 'border-black'}`} />
        {/* Text */}
        <div className={`absolute bottom-0 right-0 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
          1919
        </div>
      </div>
    </div>
  );
}

export function MemphisDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#FFFEF0]'}`}>
      {/* Pattern Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(${isDark ? '#333' : '#ddd'} 1px, transparent 1px)`,
        backgroundSize: '8px 8px'
      }} />

      {/* Decorative Elements */}
      <div className="absolute top-3 left-3 w-10 h-10 bg-[#FF69B4] rounded-full border-3 border-black shadow-[2px_2px_0_0_#000]" />
      <div className="absolute top-6 right-6 w-8 h-8 bg-[#00CED1] transform rotate-45 border-2 border-black" />
      <div className="absolute bottom-10 left-6 w-14 h-3 bg-[#FFD700] border-2 border-black" />
      <div className="absolute top-1/3 right-3 w-5 h-5 bg-black" />
      <div className="absolute bottom-3 right-10 w-8 h-8 border-3 border-black rounded-full" />

      {/* Zigzag Line */}
      <svg className="absolute bottom-1/3 left-1/4 w-16 h-8" viewBox="0 0 80 40">
        <path d="M0,20 L20,0 L40,20 L60,0 L80,20" fill="none" stroke="black" strokeWidth="3" />
      </svg>

      {/* Main Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-xl font-black px-3 py-1.5 border-3 border-black transform -rotate-3 transition-colors duration-300 shadow-[3px_3px_0_0_#FF69B4] ${isDark ? 'bg-[#1a1a1a] text-white' : 'bg-white text-black'}`}>
          MEMPHIS
        </span>
      </div>
    </div>
  );
}

export function GlassmorphismDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900' : 'bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-500'}`}>
      {/* Floating Circles */}
      <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-pink-500/30 blur-xl" />
      <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full bg-cyan-500/30 blur-xl" />

      <div className="relative">
        {/* Main Glass Card */}
        <div className={`w-44 h-28 backdrop-blur-xl rounded-2xl border shadow-2xl flex flex-col items-center justify-center transition-colors duration-300 ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/25 border-white/40'}`}>
          <div className={`w-8 h-8 rounded-lg mb-2 ${isDark ? 'bg-white/20' : 'bg-white/40'}`} />
          <span className="text-white font-semibold text-base drop-shadow-lg">Glass UI</span>
          <span className="text-white/60 text-[10px] mt-1">Modern Design</span>
        </div>

        {/* Floating Glass Elements */}
        <div className={`absolute -top-3 -right-3 w-14 h-14 backdrop-blur-md rounded-xl border transition-colors duration-300 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/15 border-white/25'}`} />
        <div className={`absolute -bottom-2 -left-2 w-10 h-10 rounded-lg transition-colors duration-300 ${isDark ? 'bg-cyan-400/20' : 'bg-cyan-400/30'}`} />
      </div>
    </div>
  );
}

export function NeumorphismDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-4 gap-4 transition-colors duration-300 ${isDark ? 'bg-[#2a2a2a]' : 'bg-[#E0E5EC]'}`}>
      <div className="flex gap-5">
        {/* Convex Button */}
        <button className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-[#2a2a2a] shadow-[6px_6px_12px_#1a1a1a,-6px_-6px_12px_#3a3a3a]' : 'bg-[#E0E5EC] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff]'}`}>
          <div className={`w-5 h-5 rounded-full transition-colors duration-300 ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`} />
        </button>

        {/* Concave Button */}
        <button className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-[#2a2a2a] shadow-[inset_4px_4px_8px_#1a1a1a,inset_-4px_-4px_8px_#3a3a3a]' : 'bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]'}`}>
          <div className="w-5 h-5 bg-blue-500 rounded-full" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className={`w-32 h-3 rounded-full transition-all ${isDark ? 'bg-[#2a2a2a] shadow-[inset_2px_2px_4px_#1a1a1a,inset_-2px_-2px_4px_#3a3a3a]' : 'bg-[#E0E5EC] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]'}`}>
        <div className="w-3/5 h-full bg-blue-500 rounded-full" />
      </div>

      <span className={`text-[9px] uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Soft UI</span>
    </div>
  );
}

export function BrutalismDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full font-mono p-3 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className={`border-4 p-3 h-full flex flex-col transition-colors duration-300 ${isDark ? 'border-white' : 'border-black'}`}>
        <h1 className={`text-3xl font-black mb-2 tracking-tighter leading-none transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
          BRUTAL<br/>ISM
        </h1>
        <div className="bg-[#FFFF00] px-2 py-1 mb-3 inline-block w-fit">
          <span className="text-black text-[10px] font-bold uppercase">Raw HTML</span>
        </div>
        <div className="space-y-1.5 flex-1">
          <div className={`h-2.5 w-full transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
          <div className={`h-2.5 w-4/5 transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
          <div className={`h-2.5 w-3/5 transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
        </div>
        <div className="flex justify-between items-end">
          <div className={`text-[10px] underline transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>READ MORE →</div>
          <div className={`text-[8px] transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>2024</div>
        </div>
      </div>
    </div>
  );
}

export function AntiDesignDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-[#7acc00]' : 'bg-[#89FC00]'}`}>
      {/* Chaotic Text Elements */}
      <div className={`absolute top-1 left-1 text-2xl font-black transform -rotate-12 transition-colors duration-300 ${isDark ? 'text-red-500' : 'text-red-600'}`}>ANTI</div>
      <div className={`absolute bottom-2 right-2 text-3xl font-black transform rotate-6 transition-colors duration-300 ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>DESIGN</div>
      <div className="absolute top-1/4 right-1/4 text-sm font-bold transform rotate-45 text-black/50">rules?</div>

      {/* Central Element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#FF1493] text-white p-3 transform rotate-3 border-2 border-black">
          <div className="text-[10px] mb-0.5 line-through">NO RULES</div>
          <div className="text-xl font-black">CHAOS</div>
        </div>
      </div>

      {/* Random Shapes */}
      <div className="absolute top-6 right-6 w-10 h-10 border-4 border-black bg-[#FFFF00] transform rotate-12" />
      <div className="absolute bottom-8 left-8 w-6 h-6 rounded-full bg-black" />
      <div className={`absolute top-1/2 left-4 w-2 h-16 transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
    </div>
  );
}

export function FlatDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-4 gap-4 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex gap-3">
        <div className="w-12 h-12 bg-[#2196F3] rounded-lg flex items-center justify-center">
          <div className={`w-6 h-6 rounded transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'}`} />
        </div>
        <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center">
          <div className={`w-6 h-6 rounded-full transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'}`} />
        </div>
        <div className="w-12 h-12 bg-[#FF9800] rounded-lg flex items-center justify-center">
          <div className={`w-6 h-6 transform rotate-45 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'}`} />
        </div>
        <div className="w-12 h-12 bg-[#9C27B0] rounded-lg flex items-center justify-center">
          <div className={`w-6 h-6 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        </div>
      </div>

      {/* Simple Flat Button */}
      <div className={`flex gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        <div className="px-4 py-1.5 bg-[#2196F3] text-white rounded text-xs font-medium">Primary</div>
        <div className={`px-4 py-1.5 rounded text-xs font-medium transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>Secondary</div>
      </div>

      <span className={`text-[9px] uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Flat Design 2.0</span>
    </div>
  );
}

export function MaterialDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`rounded-xl shadow-lg overflow-hidden w-40 transition-colors duration-300 ${isDark ? 'bg-[#1e1e1e]' : 'bg-white'}`}>
        {/* Header Image */}
        <div className="h-20 bg-gradient-to-br from-[#4285F4] to-[#34A853] relative">
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-3">
          <div className={`h-2.5 rounded w-4/5 mb-1.5 transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
          <div className={`h-2 rounded w-3/5 mb-3 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />

          <div className="flex gap-2">
            <button className="bg-[#4285F4] text-white text-[10px] px-3 py-1.5 rounded uppercase font-medium shadow-md hover:shadow-lg transition-shadow">
              Action
            </button>
            <button className={`text-[10px] px-3 py-1.5 rounded uppercase font-medium transition-colors duration-300 ${isDark ? 'text-[#4285F4]' : 'text-[#4285F4]'}`}>
              Learn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function JapaneseDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-6 transition-colors duration-300 ${isDark ? 'bg-[#2a2520]' : 'bg-[#F5F3EE]'}`}>
      <div className="text-center">
        {/* Ensō Circle */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke={isDark ? '#8B7355' : '#8B7355'}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="220 30"
              opacity="0.8"
            />
          </svg>
          <div className={`absolute inset-0 flex items-center justify-center`}>
            <div className={`w-12 h-12 rounded-full opacity-60 transition-colors duration-300 ${isDark ? 'bg-[#4a5a4a]' : 'bg-[#2F4F4F]'}`} />
          </div>
        </div>

        {/* Japanese Text */}
        <div className={`text-xs tracking-[0.4em] font-light mb-1 transition-colors duration-300 ${isDark ? 'text-[#a09075]' : 'text-[#8B7355]'}`}>間</div>
        <div className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Ma • Space</div>
      </div>
    </div>
  );
}

export function ScandinavianDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-5 transition-colors duration-300 ${isDark ? 'bg-[#2a2a28]' : 'bg-[#FAFAF8]'}`}>
      <div className="flex gap-3 mb-4">
        <div className={`w-16 h-20 rounded-xl transition-colors duration-300 ${isDark ? 'bg-[#5a4a3d]' : 'bg-[#D4C4B7]'}`} />
        <div className={`w-16 h-20 rounded-xl transition-colors duration-300 ${isDark ? 'bg-[#4a5a3c]' : 'bg-[#8B9A7C]'}`} />
        <div className={`w-16 h-20 rounded-xl transition-colors duration-300 ${isDark ? 'bg-[#5a5040]' : 'bg-[#E8DCC4]'}`} />
      </div>

      {/* Simple Text */}
      <div className="text-center">
        <div className={`text-xs tracking-widest uppercase mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Hygge</div>
        <div className={`text-[9px] transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Comfort • Warmth</div>
      </div>
    </div>
  );
}

export function OrganicDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-[#2a4a3f] to-[#1a2a1a]' : 'bg-gradient-to-br from-[#A8E6CF] to-[#DCEDC1]'}`}>
      <svg viewBox="0 0 200 150" className="w-full h-full">
        {/* Organic Blob 1 */}
        <path
          d="M30,75 Q60,20 110,50 T170,75 Q140,130 90,100 T30,75"
          fill="#FFD3B6"
          opacity="0.8"
        />
        {/* Organic Blob 2 */}
        <path
          d="M50,85 Q80,40 130,70 T150,85 Q120,120 70,100 T50,85"
          fill="#FFAAA5"
          opacity="0.7"
        />
        {/* Accent Circle */}
        <circle cx="155" cy="45" r="18" fill="white" opacity="0.5" />
        <circle cx="45" cy="110" r="12" fill={isDark ? '#4a8a6f' : '#98D8C8'} opacity="0.6" />

        {/* Text */}
        <text x="100" y="80" textAnchor="middle" fill={isDark ? 'white' : '#2F4F4F'} fontSize="10" fontWeight="600" opacity="0.8">
          ORGANIC
        </text>
      </svg>
    </div>
  );
}

export function ClaymorphismDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-pink-900/50 to-blue-900/50' : 'bg-gradient-to-br from-pink-100 to-blue-100'}`}>
      <div className="relative">
        {/* Main Clay Circle */}
        <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full shadow-[0_8px_24px_rgba(255,182,193,0.5),inset_0_-4px_8px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(255,255,255,0.4)] flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full shadow-inner" />
        </div>

        {/* Secondary Clay Shape */}
        <div className="absolute -bottom-2 -right-3 w-14 h-14 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl shadow-[0_6px_16px_rgba(135,206,235,0.5),inset_0_-3px_6px_rgba(0,0,0,0.1),inset_0_3px_6px_rgba(255,255,255,0.4)] transform rotate-12" />

        {/* Small Accent */}
        <div className="absolute -top-2 -left-1 w-6 h-6 bg-gradient-to-br from-green-300 to-green-400 rounded-lg shadow-[0_4px_8px_rgba(152,251,152,0.4)] transform -rotate-12" />
      </div>
    </div>
  );
}

export function NeoBrutalismDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className={`border-3 p-4 transition-all duration-300 ${isDark ? 'bg-[#1a1a1a] border-white shadow-[6px_6px_0_0_#FF6B35]' : 'bg-white border-black shadow-[6px_6px_0_0_#FF6B35]'}`}>
        <h2 className={`text-xl font-black mb-1.5 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>NEO</h2>
        <div className={`px-2 py-0.5 text-xs font-bold inline-block mb-2 transition-colors duration-300 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
          BRUTAL
        </div>
        <div className={`h-1.5 w-full mb-2 transition-colors duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
        <div className="flex gap-2">
          <div className={`w-8 h-8 border-2 flex items-center justify-center text-[10px] font-bold transition-colors duration-300 ${isDark ? 'border-white text-white' : 'border-black text-black'}`}>→</div>
          <div className="w-8 h-8 bg-[#004E89] border-2 border-black flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BentoDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full p-3 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="grid grid-cols-3 grid-rows-2 gap-2 h-full">
        {/* Large Card */}
        <div className={`col-span-2 row-span-2 rounded-xl p-3 flex flex-col justify-between transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          <div className={`w-10 h-10 rounded-xl transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`} />
          <div>
            <div className={`text-[10px] font-medium mb-0.5 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Main Feature</div>
            <div className={`text-[8px] transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Description here</div>
          </div>
        </div>

        {/* Blue Card */}
        <div className="bg-[#007AFF] rounded-xl p-2 flex flex-col justify-between">
          <div className={`w-6 h-6 rounded-lg transition-colors duration-300 ${isDark ? 'bg-white/20' : 'bg-white/30'}`} />
          <div className="text-white text-[8px] font-medium">Feature</div>
        </div>

        {/* Gray Card */}
        <div className={`rounded-xl p-2 flex flex-col justify-between transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className={`w-6 h-6 rounded-lg transition-colors duration-300 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />
          <div className={`text-[8px] font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>More</div>
        </div>
      </div>
    </div>
  );
}

export function DuotoneDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className={`absolute inset-0 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-blue-950 via-indigo-900 to-orange-800' : 'bg-gradient-to-br from-blue-800 via-indigo-700 to-orange-500'}`} />

      {/* Duotone Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 30% 40%, white 2px, transparent 2px)',
        backgroundSize: '20px 20px'
      }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xl font-black text-white drop-shadow-lg tracking-tighter">DUO</div>
        <div className={`text-lg font-bold tracking-widest transition-colors duration-300 ${isDark ? 'text-orange-300' : 'text-orange-200'}`}>TONE</div>
        <div className="flex gap-3 mt-3">
          <div className="w-6 h-6 rounded-full bg-blue-800" />
          <div className="w-6 h-6 rounded-full bg-orange-500" />
        </div>
      </div>
    </div>
  );
}

export function KineticDemo() {
  const { theme } = useAppStore();

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-black'}`}>
      <div className="text-center relative">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-0.5 bg-white"
              style={{
                transform: `rotate(${i * 36}deg)`,
                animation: 'pulse 2s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        <div className="relative">
          <div className="text-3xl font-black text-white tracking-tighter animate-pulse">
            MOVE
          </div>
          <div className="text-xl font-bold text-[#FF0000] tracking-[0.3em] mt-1">
            TYPE
          </div>
          <div className="text-[10px] text-gray-500 mt-2 tracking-widest">KINETIC</div>
        </div>
      </div>
    </div>
  );
}

export function CyberpunkDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#050508]' : 'bg-[#0a0a0f]'}`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30" />

      {/* Scan Lines */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)'
      }} />

      {/* Terminal Text */}
      <div className="absolute top-2 left-2 font-mono text-[10px] text-cyan-400/70">SYS://2077</div>
      <div className="absolute bottom-2 right-2 font-mono text-[10px] text-pink-400/70">v2.0.77</div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-black text-fuchsia-500 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)] tracking-wider">
            CYBER
          </div>
          <div className="text-lg font-bold text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.8)] tracking-widest">
            PUNK
          </div>
        </div>
      </div>

      {/* Neon Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-yellow-400" />
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 via-transparent to-cyan-400 opacity-50" />
    </div>
  );
}

export function VaporwaveDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-pink-700 via-purple-800 to-cyan-700' : 'bg-gradient-to-b from-pink-400 via-purple-500 to-cyan-400'}`}>
      {/* Grid Floor Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)',
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to top, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 10px',
        transform: 'perspective(100px) rotateX(30deg)',
        transformOrigin: 'bottom'
      }} />

      {/* Sun */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-yellow-400 via-orange-500 to-pink-500 opacity-80" style={{
        boxShadow: '0 0 30px rgba(255,100,100,0.5)'
      }} />

      {/* Main Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-black text-white drop-shadow-lg italic tracking-tight">VAPOR</div>
          <div className="text-lg font-bold text-cyan-200 tracking-[0.5em]">W A V E</div>
        </div>
      </div>

      {/* Japanese Text */}
      <div className="absolute bottom-3 right-3 text-xs text-white/60 font-light">蒸気波</div>
    </div>
  );
}

export function MaximalismDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full relative overflow-hidden p-3 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-pink-800 via-yellow-700 to-green-700' : 'bg-gradient-to-br from-pink-500 via-yellow-400 to-green-400'}`}>
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, white 2px, transparent 2px),
          radial-gradient(circle at 80% 20%, white 3px, transparent 3px)
        `,
        backgroundSize: '30px 30px, 40px 40px'
      }} />

      {/* Decorative Elements */}
      <div className="absolute top-2 left-2 w-8 h-8 bg-red-500 rounded-full border-2 border-white" />
      <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 transform rotate-45" />
      <div className="absolute bottom-4 left-4 w-10 h-3 bg-purple-500 rounded-full" />
      <div className="absolute top-1/3 right-2 w-4 h-4 bg-orange-500 rounded-full" />
      <div className="absolute bottom-3 right-6 w-3 h-8 bg-cyan-500" />

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`px-3 py-2 transform -rotate-3 border-3 border-black transition-colors duration-300 ${isDark ? 'bg-black/90' : 'bg-white/90'}`}>
          <span className={`text-lg font-black transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>MORE IS MORE</span>
        </div>
      </div>

      {/* Additional decorations */}
      <svg className="absolute bottom-1 left-1/3 w-8 h-4" viewBox="0 0 40 20">
        <path d="M0,10 Q10,0 20,10 T40,10" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function ArtDecoDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#1a1a1a]'}`}>
      <div className="text-center relative">
        {/* Decorative Lines */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

        {/* Main Geometric Design */}
        <div className="w-20 h-20 border-3 border-[#FFD700] transform rotate-45 flex items-center justify-center mx-auto mb-3">
          <div className="w-14 h-14 border-2 border-[#C0C0C0] transform -rotate-45 flex items-center justify-center">
            <span className="text-[#FFD700] font-bold text-base tracking-wider">1920</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-[#C0C0C0] text-[10px] tracking-[0.4em] uppercase font-light">Art Deco</div>

        {/* Fan Decoration */}
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
          <svg width="20" height="40" viewBox="0 0 20 40">
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0" y1="20"
                x2="20" y2={8 + i * 6}
                stroke="#FFD700"
                strokeWidth="1"
                opacity={0.5 + i * 0.1}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

export function DarkAcademiaDemo() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${isDark ? 'bg-[#1a2018]' : 'bg-[#2F4F4F]'}`}>
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />

      <div className={`relative border-2 p-4 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]/60 border-[#5a3510]/80' : 'bg-[#1a1a1a]/60 border-[#8B4513]/80'}`}>
        {/* Decorative Corner */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#8B4513]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#8B4513]" />

        <div className="font-serif text-center">
          <div className={`text-base italic mb-1.5 leading-tight transition-colors duration-300 ${isDark ? 'text-[#e5e5d5]' : 'text-[#F5F5DC]'}`}>
            "Sapere<br/>aude"
          </div>
          <div className={`text-[8px] uppercase tracking-[0.25em] transition-colors duration-300 ${isDark ? 'text-[#6a4520]' : 'text-[#8B4513]'}`}>
            Dare to Know
          </div>
        </div>

        {/* Book Icon */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className={`w-6 h-4 rounded-sm transition-colors duration-300 ${isDark ? 'bg-[#5a3510]' : 'bg-[#8B4513]'}`}>
            <div className="w-full h-0.5 bg-[#FFD700]/50 mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const demoComponents: Record<string, React.FC> = {
  apple: AppleDemo,
  braun: BraunDemo,
  swiss: SwissDemo,
  bauhaus: BauhausDemo,
  memphis: MemphisDemo,
  glassmorphism: GlassmorphismDemo,
  neumorphism: NeumorphismDemo,
  brutalism: BrutalismDemo,
  'anti-design': AntiDesignDemo,
  flat: FlatDemo,
  material: MaterialDemo,
  japanese: JapaneseDemo,
  scandinavian: ScandinavianDemo,
  organic: OrganicDemo,
  claymorphism: ClaymorphismDemo,
  'neo-brutalism': NeoBrutalismDemo,
  bento: BentoDemo,
  duotone: DuotoneDemo,
  kinetic: KineticDemo,
  cyberpunk: CyberpunkDemo,
  vaporwave: VaporwaveDemo,
  maximalism: MaximalismDemo,
  'art-deco': ArtDecoDemo,
  'dark-academia': DarkAcademiaDemo,
};
