// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AxiosBaseQueryResponse, CarBrand } from 'shared/types'
import carBrandsJSON from 'server/car-brand.json'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AxiosBaseQueryResponse<CarBrand[]>>
) {
    if (req.method !== 'GET') {
        res.status(405).end('Wrong Method!')
        return
    }
    res.status(200).json({ data: carBrandsJSON, msg: 'success' })
}
