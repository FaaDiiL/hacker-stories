import MiddleTwo from './MiddleTwo'

function MiddleOne(props) {
  return (
    <>
      <MiddleTwo {...props} />
    </>
  )
}

export default MiddleOne
