// Route Handlers

// to be developed
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { NextResponse } from 'next/server'
//from vid 1:
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
// if(req.method === 'GET'){
//   try{
//     const data = await prisma.post.findMany()
//     return res.status(200).json(data)
//   }catch(error){
//     return res.status(500).json(error)
//   }
// }
}

 
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    // headers: {
    //   'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    // },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}