import React,{Component} from 'react';
import * as ansapi from './answerapi';
import Answer from './answer';

class Answers extends Component {

    getInitialState(){
        return {
            answers : []
        }
    }

    constructor(){
        super();
        this.state = {
            answers : []
        }
    }

    // componentDidMount(){
    //     var ansjson = require('../stakcexansapi.json');
    //     this.setState({
    //         answers : ansjson["items"]
    //     })
    // }

    render(){
        ansapi.getAnswersForQuestion(this.props.match.params.questionid).then((res)=>{
            this.setState({
                answers : res["items"]
            });
        }).catch((err)=>{

        });
        return (
            <div className="answer-list">
                {this.state.answers.length > 0 ?
                 this.state.answers.map((item)=><Answer data={item}/>) : ""
                }
            </div>
        )
    }
}

export default Answers;