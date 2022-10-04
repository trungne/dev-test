import { CDN_HOST } from "./constants";


export const getCDNImage = (path: string) => {
    return CDN_HOST + path
}