# A Basic Eleventy Starter 🎈

Eleventy is amazing. I like it very much. Combined with Netlify, it makes web development fun and approachable for perpetual n00bs like me.

There are many ways to setup an Eleventy site. It’s not opinionated and it’s made by nice people. This is just simplified version of how I do it for all the sites I’ve built recently. Most of them were originally in Jekyll, another good Static Site Generator (SSG). Ugh, I still have to do one that’s in WordPress.

## Getting Started

`git clone`

`cd `

`npm install` to get everything installed

## Usage

`npm start` for local development.* Site is served at `http://localhost:8080/`.

*Uses the development environment variable so you can hide or show things for local development, such as Googoo Analytics (yuck).

```
{% if project.environment == "development" %}
  <!-- Show me in development environments -->
{% else %}
  <!-- Show me in other environments or if one isn't set -->
{% endif %}
```

`npm run debug` for figuring out what’s wrong. Usually something dumb I did, like bad speeling.

`npm run performance` gives you a lot of information on what Eleventy is doing.

`npm run build` builds your awesome site. This is what Netlify will use when they* build your site. It’s set in `netlify.toml`

*I always picture someone at Netlify getting a message from a pneumatic tube that I want to deploy a site. A bell rings. That message gets handed off to many people. Then my code goes down an assembly line.

NOTE: Sass is kind of wonky. The sourcemaps don’t work. Plus, in the `npm start` script I have it run before concurrently because Eleventy doesn’t pull it in when it starts up. Does that make sense? I makes sense to me how it doesn’t make sense. Anyway, it works it doesn’t mess anything up.

I don’t expect anyone will use this, but if you have any questions or comments, please file an issue.
