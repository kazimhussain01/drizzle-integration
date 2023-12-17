import Link from "next/link"
import Input from "./input"

const getData = async () => {
  const fetchData = await fetch("http://localhost:3000/api/user")
  const res = await fetchData.json()
  return res
}


export default async function Home() {
  const data = await getData()
  // console.log(data)
  return (
    <div>
      <h1 className='text-5xl font-bold text-center py-4'>Drizzle Integration</h1>
      <div className="text-center">
        <Input />
      </div>
      {
        data.map((val: any, index: any) => {
          return (
            <div className="text-2xl text-center py-3 font-sans font-bold uppercase flex justify-between px-44" key={index}>
              <h1>{val.username}</h1>
              <h1 className="lowercase">{val.email}</h1>
            </div>
          )
        })
      }
    </div>

  )
}
