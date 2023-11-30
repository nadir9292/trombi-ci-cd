test("get good ID", () => {
  const employees = [
    { id: 1, name: "Doe", firstname: "John", avatar: "john.jpg" },
  ]

  jest.mock("../../public/data/employees.json", () => ({ employes: employees }))

  expect(employees[0].id).toBe(1)
})

test("get good Name", () => {
  const employees = [
    { id: 1, name: "Doe", firstname: "John", avatar: "john.jpg" },
  ]

  jest.mock("../../public/data/employees.json", () => ({ employes: employees }))

  expect(employees[0].name).toBe("Doe")
})
