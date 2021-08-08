import TakeCard from "./TakeCard"

const TakeList = ({takes}) => {
    const takeCards = takes.map(( take, index ) => <TakeCard key={ index } take={take} />)
    return (
        <>
        <h3>HotTakes</h3>
        
        {takeCards}
        </>
    )
}

export default TakeList