# A Very Basic Eleventy Template 🎈

 This is what I use to get started on new builds. It’s like a very light pencil sketch to give me s starting point.

## Getting Started

`git clone https://github.com/srwild/wild-11ty.git`

`cd wild-11ty`

`npm install` to get everything installed

Duplicate `.env.example` and rename it `.env`. You can put tokens, API keys, or whatever in there to use in various places.

## Usage

`npm start` for local development. Site is served at `http://localhost:8080/`.

`npm run debug` for figuring out what’s wrong. Usually something dumb I did, like bad speeling.

`npm run performance` gives you a lot of information on what Eleventy is doing.

`npm run build` builds your awesome site. This is what Netlify will use when they build your site. It’s set in `netlify.toml`
