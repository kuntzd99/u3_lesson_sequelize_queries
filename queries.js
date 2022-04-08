const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllBusinesses = async () => {
  const result = await Business.findAll()
  stringify(result)
}

const findBusinessById = async (id) => {
  const result = await Business.findByPk(id)
  stringify(result)
}

const findBusinessByRating = async (rating) => {
  const result = await Business.findOne({ where: { rating: rating } })
  stringify(result)
}

const createBusiness = async () => {
  const result = await Business.create({
    name: "Daniel's Business",
    address: 'Hyde Park',
    rating: 5
  })
  stringify(result)
}

const updateBusiness = async () => {
  const result = await Business.update(
    {
      name: "Daniel's Better Business",
      address: 'HydePark',
      rating: 5
    },
    { where: { name: "Daniel's Business" } }
  )
  stringify(result)
}

const deleteBusiness = async () => {
  await Business.destroy({
    where: { name: "Daniel's Better Business" }
  })
}

async function main() {
  try {
    //await findAllBusinesses()
    //await findBusinessById(4)
    //await findBusinessByRating(5)
    //await createBusiness()
    //await updateBusiness()
    //await deleteBusiness()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
