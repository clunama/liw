"use client";

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { aiAgentDemoInteraction, type AiAgentDemoInteractionInput, type AiAgentDemoInteractionOutput } from '@/ai/flows/ai-agent-demo';
import { Send, User, Bot as BotIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export function ChatInterface() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollableView = scrollAreaRef.current.querySelector('div > div'); // Target the viewport
      if (scrollableView) {
        scrollableView.scrollTop = scrollableView.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userInput: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userInput]);
    setInput('');
    setIsLoading(true);

    try {
      const aiInput: AiAgentDemoInteractionInput = { message: input };
      const aiOutput: AiAgentDemoInteractionOutput = await aiAgentDemoInteraction(aiInput);
      const aiResponse: Message = { id: (Date.now() + 1).toString(), text: aiOutput.response, sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error interacting with AI agent:", error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'ai'
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl bg-card/80 border-border/50">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-primary">{t('demoPageTitle')}</CardTitle>
        <CardDescription className="text-muted-foreground">{t('demoPageDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full border border-border/30 rounded-md p-4 mb-4" ref={scrollAreaRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-3 my-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'ai' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><BotIcon className="text-primary" /></AvatarFallback>
                </Avatar>
              )}
              <div className={`max-w-[70%] p-3 rounded-lg ${
                msg.sender === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/30 text-foreground'
              }`}>
                <p className="text-sm">{msg.text}</p>
              </div>
              {msg.sender === 'user' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><User /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
             <div className="flex items-start gap-3 my-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback><BotIcon className="text-primary animate-pulse" /></AvatarFallback>
                </Avatar>
                <div className="max-w-[70%] p-3 rounded-lg bg-secondary/30 text-foreground">
                  <p className="text-sm italic">{t('demoAgentSpeaking')}</p>
                </div>
            </div>
          )}
        </ScrollArea>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('demoInputPlaceholder')}
            className="flex-grow bg-input text-foreground placeholder:text-muted-foreground focus:ring-primary"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Send className="h-4 w-4 mr-2" /> {t('demoSendButton')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}