import React from "react";

type Props = {
    width?: number,
    height?: number
}
const PinDrop: React.FC<Props> = ({ width = 20, height = 20 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.99996 16.6667H15C15.4583 16.6667 15.8333 17.0417 15.8333 17.5001C15.8333 17.9584 15.4583 18.3334 15 18.3334H4.99996C4.54163 18.3334 4.16663 17.9584 4.16663 17.5001C4.16663 17.0417 4.54163 16.6667 4.99996 16.6667ZM9.99996 5.83341C9.08329 5.83341 8.33329 6.58341 8.33329 7.50008C8.33329 8.41675 9.08329 9.16675 9.99996 9.16675C10.9166 9.16675 11.6666 8.41675 11.6666 7.50008C11.6666 6.58341 10.9166 5.83341 9.99996 5.83341ZM9.99996 1.66675C12.725 1.66675 15.8333 3.71675 15.8333 7.62508C15.8333 10.1084 14.0583 12.7251 10.5083 15.4501C10.2083 15.6834 9.79163 15.6834 9.49163 15.4501C5.94163 12.7167 4.16663 10.1084 4.16663 7.62508C4.16663 3.71675 7.27496 1.66675 9.99996 1.66675Z" fill="#232323" />
        </svg>
    )
}

export default React.memo(PinDrop)