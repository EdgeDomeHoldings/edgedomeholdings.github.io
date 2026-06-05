import React, { useState } from 'react';

export default function MagicalIntake() {
  const [state, setState] = useState('S0_SPARK'); 
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState('');
  const [ventureData, setVentureData] = useState(null);

  const handleMicToggle = () => {
    if (isListening) {
      setIsListening(false);
      setState('S1_MIRAGE');
      generateMirage(transcript || "Premium sustainable leather goods brand");
    } else {
      setIsListening(true);
      setTranscript('');
    }
  };

  const generateMirage = (input) => {
    const lower = input.toLowerCase();
    let stack = "MICRO_SAAS (Auth, DB Schema, CRUD)";
    if (lower.includes('shop') || lower.includes('brand') || lower.includes('store')) {
      stack = "ECOMMERCE (Headless Store, Inventory API, Stripe)";
    } else if (lower.includes('video') || lower.includes('media') || lower.includes('content')) {
      stack = "MEDIA_ENGINE (Script Pipeline, Automated Asset Schema)";
    }

    setVentureData({
      identity: `${input.split(' ')[0] || 'Venture'}_Edge, LLC (Delaware)`,
      blueprint: stack,
      status: "Infrastructure Staged Successfully."
    });
  };

  const handleDeepDig = (love) => {
    if (love) { setState('MANIFESTED'); } else { setState('S2_DEEP_DIG'); }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center text-white bg-black">
      {state === 'S0_SPARK' && (
        <div className="animate-fade-in">
          <h1 className="text-4xl font-light tracking-tight mb-8">Prophesy your venture.</h1>
          <button onClick={handleMicToggle} className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${isListening ? 'bg-red-500 animate-pulse scale-110' : 'bg-neutral-900 border border-neutral-700 hover:border-white'}`}>
            <span className="text-sm font-mono tracking-widest">{isListening ? "STOP" : "MIC"}</span>
          </button>
          <p className="mt-4 text-xs font-mono text-neutral-500">Tap to speak to your virtual co-founder</p>
        </div>
      )}

      {state === 'S1_MIRAGE' && ventureData && (
        <div className="w-full max-w-xl p-8 border border-neutral-800 rounded-lg bg-neutral-950/50 backdrop-blur animate-slide-up">
          <div className="text-xs font-mono tracking-widest text-emerald-400 mb-2">// PROPHECY GENERATED</div>
          <h2 class="text-2xl font-normal mb-4">{ventureData.identity}</h2>
          <div className="p-4 mb-6 text-left bg-neutral-900/50 rounded border border-neutral-800 font-mono text-sm">
            <p className="text-neutral-400 mb-1"><span className="text-white">Stack:</span> {ventureData.blueprint}</p>
            <p className="text-neutral-400"><span class="text-white">Status:</span> {ventureData.status}</p>
          </div>
          <p className="text-sm text-neutral-400 mb-6">Does this match what you envision?</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => handleDeepDig(true)} className="px-6 py-2 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition">Deploy Infrastructure</button>
            <button onClick={() => handleDeepDig(false)} className="px-6 py-2 border border-neutral-700 text-sm font-medium rounded hover:border-white transition">Pivot Details</button>
          </div>
        </div>
      )}

      {state === 'S2_DEEP_DIG' && (
        <div className="w-full max-w-xl p-8 border border-neutral-800 rounded-lg bg-neutral-950/50 animate-fade-in">
          <h3 className="text-xl font-light mb-4">Let's refine. What specific shift are we adding?</h3>
          <input type="text" placeholder="e.g., Make it look more rugged and add subscriptions" onChange={(e) => setFeedback(e.target.value)} class="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-neutral-600 font-mono mb-6" />
          <button onClick={() => { setState('S1_MIRAGE'); generateMirage(feedback); }} className="px-6 py-2 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition">Re-Prophesy</button>
        </div>
      )}

      {state === 'MANIFESTED' && (
        <div className="animate-fade-in text-emerald-400 font-mono text-sm">[SUCCESS] Venture infrastructure initialized. CCPA Memory Cleaned.</div>
      )}
    </div>
  );
}
