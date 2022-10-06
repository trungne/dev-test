// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AxiosBaseQueryResponse, CarBrand } from 'shared/types'
import fs from 'fs'
import path from 'path'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AxiosBaseQueryResponse<string>>
) {
    if (req.method !== 'POST') {
        res.status(405).end('Wrong Method!')
        return
    }

    if (!req.body) {
        res.status(400).end('Bad request!')
        return
    }
    const jsonPath = path.join(process.cwd(), 'server/car-brand.json')

    const fileData = fs.readFileSync(jsonPath, 'utf-8')
    const jsonData = JSON.parse(fileData) as CarBrand[]

    if (!jsonData || Object.keys(jsonData).length === 0) {
        res.status(500).end('Bad request!')
        return
    }

    const newCarBrandData = req.body as CarBrand
    let hasUpdated = false
    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].id === newCarBrandData.id) {
            jsonData[i] = newCarBrandData
            hasUpdated = true
            break
        }
    }
    if (!hasUpdated) {
        res.status(500).end('Object not exist!')
        return
    }
    try {
        fs.writeFileSync(jsonPath, JSON.stringify(jsonData))
        res.status(200).json({ data: 'update successful', msg: 'success' })
        return
    }
    catch {
        res.status(500).end('Cannot update!')
        return
    }
}
