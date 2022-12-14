function updateUserRoute({ body, params }) {
  const { name, email, password } = body
  const { id } = params

  updateUserController({
    data: { name, email, password },
    params: { id },
  })
}

function updateUserController({ data, params }) {
  const { id } = params
  const { name, email, password } = data

  userRepository.update({
    data: { name, email, password },
    params: { id },
  })
}

const userRepository = {
  update: ({ data, params }) => {
    const { id } = params
    const { name, email, password } = data

    return {
      user,
    }
  },
}
