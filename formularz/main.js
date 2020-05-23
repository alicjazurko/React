class Form extends React.Component {
    state = { 
        user: "Jan Nowak",
        text: "Jestem...",
        checked: false,
        sex: ""
     }

     handleChange = event => {
         if(event.target.type === "checkbox") {
            this.setState({
                [event.target.name] : event.target.checked
            })
         }else {
             this.setState({
             [event.target.name] : event.target.value
         })
         }
         
     }
    render() { 
        return ( 
            <div>
                <label>
                    Podaj imię:
                    <input name="user" type="text" value={this.state.user} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Napisz coś o sobie:
                    <br/>
                    <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                </label>
                <br/>
                <label>
                    Chcę otrzymywać więcej ofert
                    <input name="checked" type="checkbox" checked = {this.state.checked} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Wybierz płeć
                    <select name="sex" value={this.state.sex} onChange={this.handleChange}> 
                        <option value="man">Mężczyzna</option>
                        <option value="woman">Kobieta</option>
                    </select>
                </label>
                <br/>

                <button>Zapisz się do newslettera</button>
            </div>
         );
    }
}
 
ReactDOM.render(<Form />, document.getElementById('root'))