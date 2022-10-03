import React from "react";
import { CarInfo } from "shared/types";
import { useGetCarInfoQuery } from "store/carapi.slice";

type Props = {
    defaultCarData: CarInfo[]
}
const CarList: React.FC<Props> = ({ defaultCarData }) => {
    // refetch car data to make sure that the data displayed is the latest one
    const { data } = useGetCarInfoQuery()
    console.log(data)
    return <div>
        {JSON.stringify(defaultCarData)}
        {JSON.stringify(data)}
    </div>
}

export default CarList