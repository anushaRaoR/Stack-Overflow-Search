import React,{Component} from 'react';

class Tag extends Component {

    render(){
        return(
            <div className="tag-item">
                <span> {this.props.name} </span>
            </div>
        )
    }

}

export default Tag;