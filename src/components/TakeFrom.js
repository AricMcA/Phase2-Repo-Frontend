
const TakeForm = (props) => {
    return (
        <>
        <h3>Create a HotTake</h3>
        <form>
            <div>
                <label>User</label>
                <input type="text" />
            </div>
            <div>
                <label>Player</label>
                <input type="text" />
            </div>
            <div>
                <label>Content</label><br/>
                <textarea />
            </div>
            
            <input type="submit" value="Release HotTake" />
        </form>
        </>
    )
}

export default TakeForm