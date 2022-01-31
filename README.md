# Searching for Birds

This project is the codebase for [Searching for Birds](https://www.searchingforbirds.com), a personal space I am using as a creative outlet.

When I created this project, my goal was to build a simple way to publish content via NextJS. My own [personal website](https://www.mikaaguilar.com) is built using Hugo and while I enjoyed writing it, Hugo templates have been unintuitive and the platform is a bit cumbersome despite being so spartan.

So, I built this following some of the patterns in Hugo applied to NextJS. Now everything is React and the content itself is in markdown files that are read by the NodeJS side of Next using pretty simple markdown processors. Huzzah!

At the core, this is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). You can refer to the NextJS docs for the basics on getting this running.

For a general overview of my approach, check `lib` for the bits that parse things from `/managed-content` where I've placed markdown for anything I've decided I'd like to edit easily.
