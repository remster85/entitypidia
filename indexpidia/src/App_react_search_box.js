import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _filter from 'lodash/filter';
import Dropdown from './dropdown';


class SearchBox extends Component {

    constructor() {
        super();
    
        this.state = {
          matchedData: [],
          value: '',
          showDropdown: false
        };
      }

    getValueByKey(key, array) {
        if (this.props.exactSearch) {
          return this.exactSearchQuery(key, array);
        }
    
        return this.fuzzySearchQuery(key, array);
      }

    exactSearchQuery(key, array) {
        let _this = this;
    
        return _filter(array, { [`${_this.props.searchKey}`]: key });
    }
    
    fuzzySearchQuery(key, array) {
        let _this = this;
    
        return _filter(array, (item) => {
          let searchableItem = item[`${_this.props.searchKey}`].toString();
          if (searchableItem.indexOf(key) !== -1) {
            return searchableItem;
          }
        });
    }
    
    handleSetValue(value) {
        this.setState({
          value: value.target.innerText,
          showDropdown: false
        }, () => {
          if (this.props.onChange) {
            this.props.onChange(this.state.value);
          }
        });
      }
    

    handleChange(e) {
        if (e.target.value.trim()) {

          console.log(e.target.value);  
          let matchedData = this.getValueByKey(e.target.value.trim(), this.props.data);

          console.log(matchedData);
    
          this.setState({
            matchedData,
            value: e.target.value,
            showDropdown: true
          });
        } else {
          this.setState({
            value: e.target.value,
            showDropdown: false
          });
        }
      }


    render() {
      return ( <div className="search__input">
      <input
        type="text" length="500"
        placeholder={ this.props.placeholder }
        onChange={ this.handleChange.bind(this) }
        value={ this.state.value }
      />


        <div className="search__dropdown">
        <datalist id="browsers">
            <option value="Chrome" />
            <option value="Firefox" />
        </datalist>
        </div>



        {this.state.matchedData.map(match => {
            return ( <div key={match.name}>
                    <dt>{match.id}</dt>
                    </div>
                    )
        })
        }
    </div>)
    }
  }





class App extends Component {

    constructor() {
        super();
    
        this.state = {
          data: [],
          loading: false
        };
      }



  componentDidMount() {
    this.setState({
      loading: true
    });

    fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data.items,
        loading: false
      });
    })
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to IndexPidia</h1>
        </header>

        <br/>
        
        <SearchBox 
        data={ this.state.data } 
        searchKey="full_name"/>
      </div>
    );
  }
}

export default App;
