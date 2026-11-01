<h1 align="center">
 
  Amber Alert Network
</h1>

<p align="center">
  <img src="./image/Screenshot%202026-11-01%20140135.png"
       alt="Amber Alert Network Preview"
       width="100%" />
</p>

A responsive, retro-editorial concept dashboard for a community missing-person and public-safety alert network. Built as a self-contained HTML/CSS/JavaScript front end.

## Preview

Open `index.html` directly in a modern browser, or use a local development server:

```bash
# Python
python -m http.server 5500

# Then visit http://localhost:5500
```

## Interface highlights

- Warm paper, terracotta, amber, and ink palette
- Vintage print/editorial typography, grain texture, and geometric signal artwork
- Responsive desktop and mobile navigation
- Search and status filtering for alert cards
- Alert detail dialogs
- Clearly labeled fictional demo records
- Local-only demo sighting form (does not transmit or persist data)
- Public-safety guidance and emergency-service link

## Safety and production notes

This is a UI prototype, **not an official emergency alert system**. All case records are fictional placeholders. The sample form is non-functional and must not be used for actual reports.

Before any production use:

1. Integrate authorized, verified alert feeds and clearly show their source and update timestamps.
2. Establish moderation, identity verification, escalation, and audit procedures.
3. Route reports securely to authorized agencies; do not expose sensitive personal data publicly.
4. Add authentication, access control, rate limits, secure storage, monitoring, and privacy/legal review.
5. Follow local emergency alert policy and accessibility requirements.

## Project structure

```text
AmberAlert-Network/
├── index.html
├── styles.css
├── script.js
├── README.md
└── image/
    ├── logo.png          # 512 × 512
    ├── favicon.png       # 512 × 512
    ├── favicon-16.png   # 16 × 16
    ├── favicon-32.png   # 32 × 32
    └── favicon-192.png  # 192 × 192
```

## License

No license has been assigned. Add a license before allowing reuse.
