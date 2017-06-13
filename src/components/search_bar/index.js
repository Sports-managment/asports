import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.createSearch = this.createSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  createSearch(event){
    this.setState({value:event.target.value})
  }

  handleSubmit(event){
    console.log(this.state.value)
    event.preventDefault()
    this.props.onSearchRequest(this.state.value)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.createSearch}/>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}

export default SearchBar
