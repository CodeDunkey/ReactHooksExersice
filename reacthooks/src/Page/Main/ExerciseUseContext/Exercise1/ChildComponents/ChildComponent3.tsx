export const ChildComponent3 = () => {
    
    const changeThemeAndFont = () => {

    }
    return (
        <div className="childComponent">
            <p>c: child of b</p>
            <button onClick={changeThemeAndFont}>Change theme and font</button>
        </div>
    )
}