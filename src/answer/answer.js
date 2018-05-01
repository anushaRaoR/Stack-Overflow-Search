import React,{Component} from 'react';
import utils from '../utils/utils';
import Tag from '../question/tag';
class Answer extends Component {

    render(){
        return (

            <div className="question-item">
                 <div>
                     <div>
                     {this.props.data["score"]+" pts"}
                     </div>
                     <div>
                         {this.props.data["is_accepted"] ? "Accepted Answer" : ""}
                     </div>
                 </div>
                 <div dangerouslySetInnerHTML={{__html: this.props.data["body"]}}>
                 </div>
                <div>
                    <div>
                        {"answered on "+utils.formatDate(this.props.data["creation_date"])}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Answer;