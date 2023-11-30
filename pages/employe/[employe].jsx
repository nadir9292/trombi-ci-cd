import { useRouter } from "next/router"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import data from "../../public/data/employees.json"
import Image from "next/image"

const Employe = () => {
  const router = useRouter()
  const id = router.asPath.slice(-1)

  if (data) {
    const employe = data.employes[id - 1]
    if (employe) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div>
            <Image
              src={employe.avatar}
              alt="avatar"
              width="250"
              height="250"
              className="rounded-xl shadow-xl"
            />
            <Typography color="white" className="text-center font-bold text-xl">
              {employe.name} {employe.firstname}
            </Typography>
            <Typography color="white" className="text-center">
              Age : {employe.age}
            </Typography>
            <Typography color="white" className="text-center">
              Job : {employe.job}
            </Typography>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>No employee found with ID {id}</h1>
        </div>
      )
    }
  } else {
    return (
      <div>
        <h1>Employee data is not available</h1>
      </div>
    )
  }
}

export default Employe
