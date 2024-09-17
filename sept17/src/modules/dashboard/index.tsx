
const Dashboard = () => {
    const LoginData = JSON.parse(localStorage.getItem('isLogin')!)
  return (
    <div className="text-center mt-20">
        <img src={LoginData?.image} className="mx-auto border-[1px] border-white border-opacity-30 p-5 bg-black mb-10" alt="" />
        <div className="overflow-x-auto w-[50%] mx-auto border-white border-[1px] border-opacity-20 bg-black">
            <table className="table">
                <tbody>
                    <tr>
                        <th>Username</th>
                        <td>{LoginData?.username}</td>
                    </tr>
                    <tr>
                        <th>Id</th>
                        <td>{LoginData?.id}</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{LoginData?.firstName}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{LoginData?.lastName}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{LoginData?.email}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{LoginData?.gender}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard