const Hunters = ({hunters}) => {
    return (
        <>
            {hunters.map((hunter) => (<h3>{hunter.name}</h3>))}
        </>
    )
}

export default Hunters

