import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background: rgba(24,24,27,0.92);
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  width: 100%;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const Label = styled.label`
  color: #fff;
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 0.7rem;
  border: 1px solid #232323;
  background: #18181b;
  color: #fff;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.7rem 1rem;
  border-radius: 0.7rem;
  border: 1px solid #232323;
  background: #18181b;
  color: #fff;
  font-size: 1rem;
  min-height: 15dvh;
`;

const Button = styled.button`
  background: #fff;
  color: #111;
  border-radius: 9999px;
  padding: 0.8rem 1.7rem;
  font-weight: 700;
  font-size: 1.08rem;
  border: none;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  width: 40%;
  &:hover {
    background: #e5e5e5;
    color: #111;
  }
`;

const Message = styled.div<{ success?: boolean }>`
  color: ${({ success }) => (success ? '#22c55e' : '#f87171')};
  font-size: 1.05rem;
  margin-top: 0.7rem;
  text-align: center;
`;

type Props = {
  service: string;
};

const ContactForm: React.FC<Props> = ({ service }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setFeedback('');
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, service }),
      });
      if (res.ok) {
        setStatus('success');
        setFeedback('Message envoyé ! Je vous réponds rapidement.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setFeedback("Erreur lors de l'envoi. Veuillez réessayer ou me contacter par email.");
      }
    } catch {
      setStatus('error');
      setFeedback("Erreur lors de l'envoi. Veuillez réessayer ou me contacter par email.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="hidden" name="service" value={service} />
      <Label htmlFor="name">Nom</Label>
      <Input id="name" name="name" value={name} onChange={e => setName(e.target.value)} required autoComplete="name" />
      <Label htmlFor="email">Email</Label>
      <Input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} required />
      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'Envoyer'}
      </Button>
      {feedback && <Message success={status === 'success'}>{feedback}</Message>}
    </Form>
  );
};

export default ContactForm; 