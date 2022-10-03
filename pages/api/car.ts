// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AxiosBaseQueryResponse, CarInfo } from 'shared/types'
import carData from 'server/car.json'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AxiosBaseQueryResponse<CarInfo[]>>
) {
    if (req.method !== 'GET') {
        res.status(405).end('Wrong Method!')
        return
    }
    res.status(200).json({ data: carData, msg: 'success' })
}
