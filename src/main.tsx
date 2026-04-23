import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

// Initialize PostHog
// The phc_ key is a public key designed to be exposed in the frontend.
posthog.init(import.meta.env.VITE_POSTHOG_KEY || 'phc_o6isXPcgHbCORo4DdLkOCKK3Pm1rrskenU57gEVb2U8', {
  api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
  person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
);
