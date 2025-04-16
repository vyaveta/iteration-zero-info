
const UserHeading = () => {
    const user = {
        first_name: "Adwaith"
    }
    
    return (
        <div>
            <p className="text-sm font-bold tracking-tight flex whitespace-nowrap">
                Hi {user?.first_name || "default Adwaith"}
            </p>
        </div>
    )
}

export default UserHeading