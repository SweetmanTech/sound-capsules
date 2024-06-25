# NFT Capsules

## Getting started

### Prerequisites

Ensure you have [`yarn`](https://yarnpkg.com/) and Node version 18 installed.

### Installation

Clone the repo and install dependencies

```
git clone git@github.com:jordanoverbye/nft-capsules.git
cd nft-capsules
yarn
```

## Starting the website

The website is built using NextJS.

Run `yarn site:dev` from the root of the repo to run the website locally.

Run `yarn site:build` to generate the production build of the website.

[Vercel website deployment](https://6551-playlist-site.vercel.app/)

## Starting the NFT web page

The NFT web page has been built using Vite.

Run `yarn nft:dev` from the root of the repo to run the NFT asset locally.

Run `yarn nft:build` to generate the production build of the NFT asset.

> TODO investigate using preact to make it faster

[Vercel NFT deployment](https://6551-playlist-nft.vercel.app/)

## Player

The player is a shared react component which accepts a list of tracks via props. The reason is it separated is because it's shared between the website and the nft asset.
