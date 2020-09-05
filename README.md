**This is a Work in Progress**

# A Basic Eleventy Starter 🎈

Eleventy is amazing and made by nice people. I like it very much. Combined with Netlify, it makes web development fun and approachable for perpetual n00bs like me.

There are many ways to setup an Eleventy site. I’ve read many tutorials and blog posts, where I’ve picked up bits and pieces that made sense to me and the way I work. This is just simplified version of how I do it for all the sites I’ve built recently. Some of them were originally in Jekyll, another good Static Site Generator (SSG). I still have to do one that’s in WordPress, which might be a bit more difficult to switch from.

## Getting Started

`git clone https://github.com/srwild/wild-11ty.git`

`cd wild-11ty`

`npm install` to get everything installed

## Usage

`npm start` for local development.* Site is served at `http://localhost:8080/`.

*Uses the development environment variable so you can hide or show things for local development, such as analytics and other things you don’t need locally. 

```
{% if project.environment == "development" %}
  <!-- Show me in development environments -->
{% else %}
  <!-- Show me in other environments or if one isn't set -->
{% endif %}
```

NOTE: Sass is kind of wonky. The sourcemaps don’t work (paths are wrong). In the `npm start` script I have it run before concurrently because Eleventy doesn’t pull it in when it starts up. I also have a `clean` script that removes the `_site` and compiled `CSS` so when you rerun it there’s no `CSS` file. Does that make sense? Probably not. It makes sense to me how it doesn’t make sense. Anyway, it works and it doesn’t mess anything up.

`npm run debug` for figuring out what’s wrong. Usually something dumb I did, like bad speeling.

`npm run performance` gives you a lot of information on what Eleventy is doing.

`npm run build` builds your awesome site. This is what Netlify will use when they* build your site. It’s set in `netlify.toml`

*I always picture someone at Netlify getting a message from a pneumatic tube that I want to deploy a site. A bell rings. That message gets handed off to many people. Then my code goes down an assembly line.
