
    const data = {
        users: [
            {
                id: 1,
                age: 29,
                name: 'Arek',
                sex: "male"
            },
            {
                id: 2,
                age: 49,
                name: 'Marta',
                sex: "female"

            },
            {
                id: 3,
                age: 19,
                name: 'Stasia',
                sex: "female"

            },
            {
                id: 4,
                age: 25,
                name: 'Karol',
                sex: "male"
            }
        ]
    }

  const Item = ({user}) => (
      <div className="userInfo">
        <h1>Użytkownik {user.name}</h1>
        <p>Płeć: {user.sex}</p>
        <p>Wiek użytkownika: <strong>{user.age}</strong></p>
      </div>
  )

    class ListItems extends React.Component {
        state = {
            select: "all",

        }

        handleUserFilter(option){
            this.setState({
                select: option
            })
        }

        usersList = () => {
            let users = this.props.data.users;
            switch(this.state.select) {
                case "all":
                return users.map(user => <Item user = {user} key = {user.id}/>)
                case "female":
                users = users.filter(user => user.sex === "female")
                return users.map(user => <Item user = {user} key = {user.id}/>)
                case "male": 
                users = users.filter(user => user.sex === "male")
                return users.map(user => <Item user = {user} key = {user.id}/>)
                default: 
                return "coś się zepsuło"
            }
            
        }
        render() {
        
            
            let users = this.props.data.users;
            // users = users.filter((user) => user.sex === 'female')
            const Items = users.map(user => <Item key = {user.id} content = {user} />)
            return (
                <div>
                    <button onClick = {this.handleUserFilter.bind(this,'all')}>Pokaż wszystkich użytkowników</button>
                    <button onClick = {this.handleUserFilter.bind(this,'female')}>Pokaż kobiety</button>
                    <button onClick = {this.handleUserFilter.bind(this,'male')}>Pokaż mężczyzn</button>

                    {this.usersList()}
                    
                </div>
            )
        }
    }
    
    ReactDOM.render(<ListItems data = {data} />, document.getElementById('root'))