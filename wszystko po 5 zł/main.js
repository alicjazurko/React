class App extends React.Component {
    state = { 
        items: [
            {id: 1, name: "herbata", active: false},
            {id: 2, name: "cukierki", active: false},
            {id: 3, name: "ziemniaki", active: false},
            {id: 4, name: "chleb", active: false},
            {id: 5, name: "kasza gryczana", active: false},
            {id: 6, name: "pomidory", active: false}, 
        ]
     }

     handleChangeStatus = (id) => {
        const items = this.state.items.map(item => {
            if(id === item.id) {
                item.active =!item.active
            }
            return item
        })

        this.setState({
            items: items
        })
     }
    render() { 
        return ( 
            <div>
                <h1>Wszystko po 5zł</h1>
                <Header items={this.state.items} />
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>
                
            </div>
         );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))