import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3 aria-live="polite">{greeting}! Thank you for visiting!</h3>
      <button id="new-greeting" aria-label="Generate a new random greeting" type="button" onClick={() => setGreeting(randomMessage)}>
        New Greeting
      </button>
    </div>
  );
}