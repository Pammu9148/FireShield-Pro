import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User } from 'lucide-react'

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! I\'m the FireShield Pro AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

  const quickResponses = [
    'Tell me about the Emergency Tripod LED Light',
    'What are the technical specifications?',
    'How do I request a demo?',
    'What are the pricing options?',
    'How do I become a dealer?',
  ]

  const handleSend = (text) => {
    if (!text.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getAIResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (input) => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes('spec') || lowerInput.includes('technical')) {
      return 'The Emergency Tripod LED Light features 10,000 lumens output, 12-hour battery life, IP67 waterproof rating, and can be deployed in under 60 seconds. Would you like more detailed specifications?'
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return 'Our products range from $899 for the Compact model to $2,499 for the Military Grade model. We also offer bulk discounts for large orders. Would you like a detailed quotation?'
    }
    if (lowerInput.includes('demo')) {
      return 'You can request a demo by clicking the "Request Demo" button on our homepage or contact page. Our team will schedule a live demonstration at your convenience.'
    }
    if (lowerInput.includes('dealer')) {
      return 'To become a dealer, please click the "Become Dealer" button and fill out the application form. Our business development team will review your application and contact you within 2 business days.'
    }
    if (lowerInput.includes('warranty')) {
      return 'All FireShield Pro products come with a standard 2-year warranty covering manufacturing defects. Extended warranty options are available for purchase.'
    }
    if (lowerInput.includes('battery') || lowerInput.includes('runtime')) {
      return 'The battery provides up to 12 hours of continuous operation at full brightness. It can be fully recharged in approximately 4 hours using the included fast charger.'
    }
    if (lowerInput.includes('waterproof') || lowerInput.includes('ip')) {
      return 'Yes, the FireShield Pro has an IP67 rating, making it completely dust-tight and protected against water immersion up to 1 meter depth for 30 minutes.'
    }
    
    return 'I\'d be happy to help you with information about FireShield Pro products. You can ask about specifications, pricing, demos, dealer partnerships, or any other questions you might have. How can I assist you?'
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 md:bottom-24 right-4 md:right-8 z-50 w-[calc(100%-2rem)] md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">FireShield AI Assistant</h3>
                <p className="text-xs text-primary-100">Online • Typically replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-primary-200' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickResponses.slice(0, 3).map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(response)}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(inputText)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSend(inputText)}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AIChatbot
