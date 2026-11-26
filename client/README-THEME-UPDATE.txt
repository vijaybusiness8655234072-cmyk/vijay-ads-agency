# Disha frontend — dark theme update

This update changes frontend styling only. React components, content configuration,
video carousel behavior, WhatsApp behavior, analytics calls, social destinations,
and API-related code have not been intentionally changed.

## Run locally
1. Restore your existing environment variables in `.env` (the uploaded `.env` was
   intentionally not copied into this package).
2. Restore your original `public/media/` assets. The supplied ZIP did not contain
   that directory, while `src/config/profile.js` references files under `/media/`.
3. Run `npm install`.
4. Run `npm run dev` or `npm run build`.

The production build could not be verified in this environment because the
uploaded `node_modules` contained platform-specific Rollup dependencies for a
different operating system. Reinstalling dependencies with `npm install` on
your machine/server should resolve that environment mismatch.
