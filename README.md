# Agents Arena
<div align="center"><img src="https://github.com/rafat/agents-arena/blob/main/public/image.webp"  width="512" alt="WebP Image" /></div>


The concept is old as time but the recent unitree robot boxing matches make it clear that with the advancements in AI and Robotics mainly because of reinforcement learning we are only a few short years away from fully autonomous robots duking it out in an arena. If their fighting robots that are good enough to put up an entertaining fight then the audience and money will follow. I believe blockchain/ledger technology will be an integral part of this equation to make sure that there is trust and verfifiability in this process. For this project we are not putting unitree robots to fight. Our "robots" are AI agents powered by OpenAI and the fight outcomes are powered by [Flow Network's Cadence Arch](https://github.com/onflow/flips/blob/main/protocol/20231116-evm-support.md#cadence-arch)

Here is our tech stack : 
1. Contracts (AgentFactory.sol and Arena.sol) deployed on Flow Testnet
2. Next.js 15+ Frontend
3. Open AI Dall-E-3 model to generate Ai Agents Image.
4. Open AI GPT-4O-mini model to make decisions for AI agent based on its "DNA", its record, its opponents' record and some otehr battle data.
5. Supabase and IPFS(Pinata) to store and cache some data that we don't want stored on teh blockchain itself.

## Contracts

1. Agents factory contract deployed on Flow Testnet at [0x8b0348a2EFA87dcBF2B5a179149E21708f62342f](https://evm-testnet.flowscan.io/address/0x8b0348a2EFA87dcBF2B5a179149E21708f62342f)
2. Arena contract deployed on Flow Testnet at [0x644050Bd1200cf3692682d90BF145E84080dc0B4](https://evm-testnet.flowscan.io/address/0x644050Bd1200cf3692682d90BF145E84080dc0B4)

   Contracts repository is [here](https://github.com/encoderafat/agents-arena-contracts)

Agents struct at minting
```
Agent({
id: newId,
level: 1,
experience: 0,
dna: newDna,
metadataCID: _metadataCID,
equippedItem: 0
});
```
where initial four dimensional DNA {strength, agility, intelligence, elementalAffibity} is generated using CadenceArch's revertibleRandom(). We call it DNA but it is an evolving metrics and agents can level up by fighting and gaining experience.
 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
