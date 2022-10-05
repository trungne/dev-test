// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AxiosBaseQueryResponse, CarBrand } from 'shared/types'
import fs from 'fs'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AxiosBaseQueryResponse<{ id: number }>>
) {
    if (req.method !== 'POST') {
        res.status(405).end('Wrong Method!')
        return
    }

    if (!req.body) {
        res.status(400).end('Bad request!')
        return
    }

    const fileData = fs.readFileSync('server/car-brand.json', 'utf-8')
    const jsonData = JSON.parse(fileData) as CarBrand[]

    if (!jsonData || Object.keys(jsonData).length === 0) {
        res.status(500).end('Bad request!')
        return
    }

    const newCarBrandData = req.body as CarBrand
    let maxId = 0
    jsonData.forEach(brand => {
        maxId = Math.max(brand.id, maxId)
    })
    newCarBrandData.id = maxId + 1
    jsonData.push(newCarBrandData)

    try {
        fs.writeFileSync('server/car-brand.json', JSON.stringify(jsonData))
        res.status(200).json({ data: { id: newCarBrandData.id }, msg: 'success' })
        return
    }
    catch {
        res.status(500).end('Cannot update!')
        return
    }
}
