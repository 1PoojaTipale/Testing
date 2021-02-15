function User(props)
{
    return(
        <div>
            <ol>
           <li> Name:{props.name}</li>
           <li>  Age:{props.age}</li>
           <p>{props.children}</p>
       </ol>
            </div>
    );
}

export default User;