import './index.css'

const ImagesAndButtons = props => {
  const {details, isActive, setActiveImgId} = props
  const {buttonText, id} = details
  const clsName = isActive ? 'bgActive' : 'bgInactive'
  const getId = () => {
    setActiveImgId(id)
  }

  return (
    <li>
      <button type="button" className={clsName} onClick={getId}>
        {buttonText}
      </button>
    </li>
  )
}

export default ImagesAndButtons
