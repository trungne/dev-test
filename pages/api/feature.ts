// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AxiosBaseQueryResponse, FeaturedVehicle } from 'shared/types'
import featureVehiclesJSON from 'server/featured-vehicle.json'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AxiosBaseQueryResponse<FeaturedVehicle[]>>
) {
    if (req.method !== 'GET') {
        res.status(405).end('Wrong Method!')
        return
    }
    res.status(200).json({ data: featureVehiclesJSON, msg: 'success' })
}
