
const TakeCard = ({take: {user, player, content}}) => {
    return (
        <div>
            <h4>{user}</h4>
            <p>{player}</p>
            <p>{content}</p>
        </div>
    )
}

export default TakeCard