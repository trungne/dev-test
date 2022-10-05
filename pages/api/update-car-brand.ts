// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AxiosBaseQueryResponse, CarBrand } from 'shared/types'
import carBrandsJSON from 'server/car-brand.json'
import fs from 'fs'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AxiosBaseQueryResponse<string>>
) {
    if (req.method !== 'POST') {
        res.status(405).end('Wrong Method!')
        return
    }

    // const fileData = fs.readFileSync('server/car-brand.json', 'utf-8')
    // const jsonData = JSON.parse(fileData)
    // console.log(jsonData)
    console.log('body', req.body)
    // res.status(200).json({ data: carBrandsJSON, msg: 'success' })
}
