import Link from "next/link"
import data from "../public/data/employees.json"

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4 ">
        {data.employes.map(({ id, name, firstname, avatar }, index) => (
          <div key={index} className="hover:scale-105 shadow-lg">
            <Link
              href={{
                pathname: `./employe/${id}`,
              }}
            >
              <div>
                <img
                  src={avatar}
                  alt="avatar"
                  height="150"
                  width="150"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h1 className="items-center text-white font-bold">
                  {name} {firstname}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
