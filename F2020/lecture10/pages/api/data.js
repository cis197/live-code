const handler = (req, res) => {
  res.status(200).json(JSON.stringify({ name: 'John Doe' }))
}

export default handler