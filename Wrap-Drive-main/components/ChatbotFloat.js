'use client';
import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { HiChatAlt2 } from 'react-icons/hi';

export default function ChatbotFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '✨ <b>Welcome to Wrap & Drive!</b> Ask about:<br>• Vinyl Wrap Pricing<br>• PPF Installation<br>• Ceramic Coating<br><em>Type "help" for options</em>',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "Price for full wrap?",
    "PPF warranty?",
    "How long for coating?",
    "Your location?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const faqs = {
    "hello": `👋 Hello! I'm your Wrap & Drive assistant. How can I help?`,
    "hi": `👋 Hi there! Ask me about:<br>• <b>Wrapping</b><br>• <b>PPF</b><br>• <b>Coating</b>`,
    "hey": `👋 Hey! Need info on our services? Just ask!`,
    "habari": `Jambo! Unauliza kuhusu huduma gani? Tuna:<br>• Vinyl Wrapping<br>• PPF<br>• Ceramic Coating`,
    "services": `🎨 <b>Our Services:</b><br><br>• <u>Vinyl Wrapping</u><br>- Full: KSh 70,000+<br>- Partial: KSh 25,000+<br><br>• <u>Paint Protection Film (PPF)</u><br>- Full Front: KSh 50,000+<br><br>• <u>Ceramic Coating</u><br>- Standard: KSh 40,000+<br>- Premium: KSh 65,000+`,
    "wrapping": `🚗 <b>Vinyl Wraps:</b><br>• Full: KSh 100,000+ (3-5 days)<br>• Partial: KSh 25,000+ (2-3 days)<br>• <i>5-year color warranty</i>`,
    "ppf": `🛡️ <b>Paint Protection Film:</b><br>• Self-healing clear film<br>• Full front: KSh 50,000+<br>• Full car: KSh 120,000+<br>• <i>7-year warranty</i>`,
    "ceramic": `✨ <b>Ceramic Coating:</b><br>• Standard: KSh 40,000 (2 yrs)<br>• Premium: KSh 65,000 (5 yrs)<br>• <i>Hydrophobic protection</i>`,
    "price": `💵 <b>Price Guide:</b><br><br>• <u>Wrapping</u><br>- Full: KSh 70,000+<br>- Partial: KSh 25,000+<br><br>• <u>PPF</u><br>- Front: KSh 50,000+<br><br>• <u>Coating</u><br>- Standard: KSh 40,000+`,
    "bei": `💵 <b>Bei:</b><br>• Wrap: KSh 70,000+<br>• PPF: KSh 50,000+<br>• Coating: KSh 40,000+`,
    "how long": `⏳ <b>Duration:</b><br>• Full Wrap: 3-5 days<br>• PPF: 2-3 days<br>• Coating: 1-2 days<br><br><i>Same-day estimates available!</i>`,
    "muda": `⏳ <b>Muda:</b><br>• Wrap: Siku 3-5<br>• PPF: Siku 2-3<br>• Coating: Siku 1-2`,
    "warranty": `🛡️ <b>Warranty:</b><br>• Wraps: 5 years<br>• PPF: 7 years<br>• Coating: 2-5 years<br><br><i>Transferable to new owners</i>`,
    "dhamana": `🛡️ <b>Dhamana:</b><br>• Wrap: Miaka 5<br>• PPF: Miaka 7<br>• Coating: Miaka 2-5`,
    "location": `📍 <b>Our Workshop:</b><br>Nothern bypass, Nairobi<br>opposite quickmart thome<br><br>📅 <b>Hours:</b><br>Mon-Sat: 8AM-6PM<br>Sun: By Appointment <br><a href="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d908.7408648317944!2d36.872593904936906!3d-1.2124852129012467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1748451817765!5m2!1sen!2ske" target="_blank" className="underline">View on Google Maps</a>`,
    "address": `📍 <b>Address:</b><br>Wrap & Drive Auto<br>Nothern bypass, Nairobi<br><br><a href="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d908.7408648317944!2d36.872593904936906!3d-1.2124852129012467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1748451817765!5m2!1sen!2ske" target="_blank" className="underline">View on Google Maps</a>`,
    "contact": `📞 <b>Contact Us:</b><br>Phone: +254 703 201556<br>WhatsApp: <a href="https://wa.me/254703201556" className="underline">Chat Now</a><br>Email: info@wrapanddrive.com`,
    "help": `💡 <b>Try asking:</b><br><br>• "What's the price for PPF?"<br>• "How long does wrapping take?"<br>• "Do you offer ceramic coating?"<br>• "Where are you located?"<br><br><i>Or tap the quick questions below!</i>`
  };

  const synonyms = {
    "cost": "price", "how much": "price", "pricing": "price",
    "vinyl": "wrapping", "wrap": "wrapping", "color change": "wrapping",
    "paint protection": "ppf", "film": "ppf", "clear bra": "ppf",
    "coating": "ceramic", "ceramic coat": "ceramic", "nano": "ceramic",
    "time": "how long", "duration": "how long", "long": "how long",
    "where": "location", "address": "location", "map": "location",
    "number": "contact", "email": "contact", "call": "contact",
    "warranty": "warranty", "guarantee": "warranty", "dhamana": "warranty"
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const cleanedInput = inputValue.toLowerCase().replace(/[^\w\s]/gi, '').trim();

      let matchedKey = Object.keys(synonyms).find(key => cleanedInput.includes(key));
      if (matchedKey) {
        matchedKey = synonyms[matchedKey];
      } else {
        matchedKey = Object.keys(faqs).find(key => cleanedInput.includes(key));
      }

      const reply = faqs[matchedKey] || `I couldn't find an answer. For immediate help:<br><a href="https://wa.me/254703201556" class="underline">Chat on WhatsApp</a> or call +254703201556`;

      setMessages(prev => [...prev, {
        sender: 'bot',
        text: reply,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={20} /> : <HiChatAlt2 size={29} />}
        {!isOpen && <span className="chatbot-alert">Hi</span>}
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <FaRobot />
              <div>
                <h3>Wrap & Drive Assistant</h3>
                <p>Online • Instant Response</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <FaTimes size={18} />
            </button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="bubble" dangerouslySetInnerHTML={{ __html: msg.text }} />
                <div className="timestamp">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="bubble typing-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-footer">
            <div className="quick-buttons">
              {quickQuestions.map((q, i) => (
                <button key={i} onClick={() => handleQuickQuestion(q)} className="quick-btn">
                  {q}
                </button>
              ))}
            </div>
            <div className="input-section">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about wraps, PPF, or coating..."
              />
              <button onClick={handleSend} disabled={!inputValue.trim()} className="send-btn">
                <IoMdSend size={16} />
              </button>
            </div>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/254703201556?text=${encodeURIComponent("Hi Wrap & Drive! I need help...")}`,
                  "_blank"
                )
              }
              className="whatsapp-btn"
            >
              <FaWhatsapp size={16} />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
