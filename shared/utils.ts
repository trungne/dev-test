import { CDN_HOST } from "./constants";


export const getCDNImage = (path: string) => {
    return CDN_HOST + path
}

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
export const detectMobile = (userAgent: string) => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return userAgent.match(toMatchItem);
    });
}