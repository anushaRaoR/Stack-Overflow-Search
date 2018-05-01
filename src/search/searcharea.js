import React, {Component} from 'react';

import {FormGroup,FormControl} from 'react-bootstrap';

class SearchArea extends Component {

    onTextChange(e){
        this.props.onSearchTextChange(e.target.value);
    }

    onSearchClicked(){
        this.props.onSearchClicked();
    }
    render(){
        return (

            <div className="search-area">
                <div>
            <form>
                <FormGroup
                    controlId="formBasicText"
                >
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        onChange={this.onTextChange.bind(this)}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </form>
                </div>
                <div>
                    <input type="button" value="Search" onClick={this.onSearchClicked.bind(this)} />
                </div>
            </div>
        );
    }
}

export default SearchArea;