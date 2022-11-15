

type CarsType = {
    cars: TopCarsType[]
}

type TopCarsType = {
    manufacturer: string,
    model: string,
}

export const TopCars = (props: CarsType) => {
    return (
        <table>
            <tr>
                <th>
                    Manufacturer
                </th>
                <th>
                    Model
                </th>
            </tr>

            {props.cars.map((objCars, index) => {
                return (
                    <tr key={index + 1}>
                        <td>
                            {objCars.manufacturer}
                        </td>
                        <td>
                            model: {objCars.model}
                        </td>
                    </tr>
                )
            })}

        </table>

    )
}