const DestinationItems = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li>
      <img src={imgUrl} alt={name} className="destination" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItems
