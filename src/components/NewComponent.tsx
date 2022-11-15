
type NewComponentType = {
    students: Array<StudentType>
    //students: StudentType[] - это второй способ протипизировать массив со студентами
}

type StudentType = {
    id: number,
    name: string,
    age: number;
}

export  const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objFromStudAr) => {

                return (
                    <li key={objFromStudAr.id}>
                        <span>{objFromStudAr.name}</span>
                        <span> age: {objFromStudAr.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}