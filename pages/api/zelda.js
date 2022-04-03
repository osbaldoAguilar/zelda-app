// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const res = await fetch('https://zelda.fanapis.com/api/games?limit=2')
  res.status(200).json(res)
  console.log('res',res);
}
