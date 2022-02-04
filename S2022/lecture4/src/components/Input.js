// const Input = ({ setInput }) => {
//   // const { setInput } = prop
//   return (<input size={20} onChange={e => setInput(e.target.value)}/>)
// }

const Input = ({ setInput }) => (<input size={20} onChange={e => setInput(e.target.value)}/>)

export default Input