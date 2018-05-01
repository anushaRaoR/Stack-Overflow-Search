import React,{Component} from 'react';
import logo from './logo.svg';
import SearchArea from './search/searcharea';
import Question from './question/question'
import * as questionapi from './question/questionapi';


class Search extends Component {

    getInitialState(){
        return {
            searchItem : "",
            searchData : []
        }
    }

    constructor(){
        super();
        this.state = {
            searchItem : "",
            searchData: []
        }
    }

    onSearchClicked(){
        if(this.state.searchItem.length > 0){
            questionapi.searchQuestion(this.state.searchItem).then((res)=>{
                console.log(res);
                this.setState({
                    searchItem : this.state.searchItem,
                    searchData : res["items"]
                });
            })
        }
    }

    onSearchTextChange(val){
        this.setState({
            searchItem : val,
            searchData : this.state.searchData
        });
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    StackEx
                </header>
                <SearchArea onSearchTextChange={this.onSearchTextChange.bind(this)} onSearchClicked={this.onSearchClicked.bind(this)} />
                <div className="questions-list">
                    { this.state.searchData.length > 0  ? this.state.searchData.map(
                        (item) =>
                            <Question data={item} />
                    ) : ""
                    }

                </div>
            </div>
        );
    }

}

export default Search;