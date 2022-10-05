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
        fs.writeFileSync('server/car-brand.json', JSON.stringify(jsonData))
        res.status(200).json({ data: 'update successful', msg: 'success' })
        return
    }
    catch {
        res.status(500).end('Cannot update!')
        return
    }
}
