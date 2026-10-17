# Code Red

A new Code Red Digital Solutions website using the existing frontend stack:
Next.js, React, TypeScript, and Tailwind CSS 4. The original logo and written
website content are retained; the previous image assets and component styling
are not.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Legal pages

The site includes `/terms-of-use` and `/privacy-policy`. Their content is
carried over from the existing site and still contains bracketed placeholders;
complete those details and have the policies reviewed by qualified legal
counsel before publishing.

## Contact form and admin dashboard

The contact form posts to the local Next.js route at `/api/contact`, which
forwards inquiries to the existing FastAPI backend (`POST /api/contact`) for
validation and storage. It collects an optional company name as well, which is
shown with the inquiry in the admin dashboard.

Open `/admin` to use the dashboard. It uses the backend's authenticated admin session and
inquiry endpoints to show contact details, paginate submissions, update
inquiry status, and sign out. The Next.js API proxy forwards the backend's
HttpOnly session cookie and CSRF token; it does not store admin credentials.
Configure the admin username, password hash, and session secret on the backend,
not in the frontend environment.

Start the FastAPI backend and set `BACKEND_API_URL` if it is not available at
`http://localhost:8000`. See `.env.example` for the local setting.

## Production

```bash
npm run build
npm run start
```
