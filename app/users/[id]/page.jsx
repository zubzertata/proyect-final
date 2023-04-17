async function getUser(id) {

  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  console.log(data)

  return data.data
  
}


async function page({params}) {


  const user = await getUser(params.id)

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt=""></img>
          </div>
          <div className="card-body text-center">
            <h4 className="card-title">{user.id} {user.first_name} {user.last_name}</h4>
            <p className="card-text">{user.email}</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page