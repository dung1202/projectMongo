import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getStudent } from './axios'

export default function StudentManagement() {
    
  let location = useLocation()
    const [students, setStudents] = useState([])
    useEffect(async () => {
        let a = 1
       let result = await getStudent()
       a = 2
       setStudents(result.data)
        console.log('end',a)
    }, [])

    const renderItem = (item,index) => {
        return (<tr key={index}>
            <td>{index+1}</td>
            <td><Link to={location.pathname+'/edit/'+ item._id}>{item.name}</Link></td>
            <td>{item.address}</td>
            <td>{item.school ? item.school.name:'N/A'}</td>
            <td>{item.class ? item.class.name:"N/A"}</td>
        </tr>)
    }

    return (
        <div className="school">
            <Link  to='/'>Trang chủ</Link>
            <br/>
            <Link  to={location.pathname+'/create'}>Tạo học sinh</Link>
            <table >
               <thead>
               <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Địa chỉ</th>
                    <th>Trường học</th>
                    <th>Lớp học</th>
                </tr>
               </thead>
               <tbody>
               {students.map(renderItem)}
               </tbody>


            </table>

        </div>
    )
}
