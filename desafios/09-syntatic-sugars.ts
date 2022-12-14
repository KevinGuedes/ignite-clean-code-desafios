function getFirstFiveRatings(ratings: string[]) {
  return ratings.slice(0, 5)
}

function sumFirstFiveRatings(ratings: string[]): {
  firstFiveRatingsSum?: number
  createdAt?: Date
  error?: string
} {
  const areRatingsInvalid = ratings === null || ratings === undefined
  if (areRatingsInvalid) return { error: 'ratings is required' }

  const hasLessThanFiveRatings = ratings.length < 5
  if (hasLessThanFiveRatings)
    return { error: 'there must be at least 5 ratings' }

  const firstFiveRatings = getFirstFiveRatings(ratings)
  const firstFiveRatingsSum = firstFiveRatings.reduce(
    (acc: number, rating: string) => acc + Number(rating),
    0
  )

  return { firstFiveRatingsSum, createdAt: new Date() }
}

const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
sumFirstFiveRatings(appRatings)
