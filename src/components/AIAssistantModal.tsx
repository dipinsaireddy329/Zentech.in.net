import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, Loader2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/zentechData';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
  time: string;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal
}) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'assistant',
      text: "Namaste! I am Zentech's Registered Architect & Structural Engineer Consultant. How can I assist you today with construction costs, architectural layout, steel selection, or TUDA approvals in Tirupati?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const quickQuestions = [
    "What is the cost for G+1 construction in Tirupati?",
    "Difference between Fe 500D & Fe 550D TMT steel?",
    "Modern layout rules for kitchen & master bedroom position?",
    "What are the steps for TUDA layout permission?"
  ];

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          history: messages.map(m => ({ role: m.sender, content: m.text }))
        })
      });

      const data = await response.json();

      if (data.reply) {
        setMessages(prev => [
          ...prev,
          {
            sender: 'assistant',
            text: data.reply,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else {
        throw new Error('Invalid response');
      }
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: "I am experiencing a momentary connection glitch. Please call our senior engineers directly at " + COMPANY_INFO.primaryPhone + " or request an official quote.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full h-[85vh] flex flex-col justify-between overflow-hidden shadow-2xl relative text-slate-900">
        {/* Header */}
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-amber-600 flex items-center justify-center text-white shadow-md shadow-[#F97316]/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm text-slate-900">Registered Architect Consultant</h3>
                <span className="bg-[#F97316]/10 text-[#EA580C] text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#F97316]/30">COA & TUDA Licensed</span>
              </div>
              <p className="text-[11px] text-slate-500">Tirupati Local Civil & Architecture Assistant</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-[#FAF9F6]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[80%] rounded-2xl p-3.5 space-y-1 ${
                m.sender === 'user'
                  ? 'bg-[#F97316] text-white rounded-tr-none shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs'
              }`}>
                <p className="leading-relaxed font-normal whitespace-pre-line">{m.text}</p>
                <span className={`text-[9px] block text-right ${m.sender === 'user' ? 'text-white/80' : 'text-slate-400'}`}>
                  {m.time}
                </span>
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-white shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-2 text-[#EA580C] bg-white p-3 rounded-xl border border-slate-200 w-fit shadow-xs">
              <Loader2 className="w-4 h-4 animate-spin text-[#F97316]" />
              <span className="text-xs font-mono">Analyzing structural & layout guidelines...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex items-center space-x-2 overflow-x-auto text-[11px]">
          <span className="text-slate-400 shrink-0 font-bold">Ask AI:</span>
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap transition-colors cursor-pointer shadow-2xs"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Type your construction, design, or material question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#F97316] hover:bg-amber-600 disabled:opacity-50 text-white p-3 rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>Powered by Zentech AI & Engineering Knowledgebase</span>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="text-[#EA580C] hover:underline font-bold flex items-center space-x-1"
            >
              <span>Get Human Engineer Estimate</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
