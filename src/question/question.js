import React,{Component} from 'react';
import Tag from './tag';
import utils from '../utils/utils';
class Question extends Component {

    goToAnswer(questionId){
     return window.open("http://localhost:3000/answer/"+questionId,'_blank');
    }

    render(){
        return (
          <div onClick={()=>window.open("http://localhost:3000/answer/"+this.props.data["question_id"],'_blank')} className="question-item">
            <div>
                <div>
                    {this.props.data.score+" pts"}
                </div>
                <div>
                    {this.props.data["answer_count"]+" answers"}
                </div>
                <div>
                    {this.props.data["view_count"]+" views"}
                </div>
            </div>
            <div>
                <div>
                    {this.props.data.title}
                </div>
                <div dangerouslySetInnerHTML={{__html : this.props.data["body"]}}>

                </div>
            </div>
              <div>
                  <div>
                      {this.props.data["tags"].length > 0 ?
                            this.props.data["tags"].map(
                                                 (tag)=>
                                                     <Tag name={tag} />
                                                  )
                                                 : ""
                      }
                  </div>
                  {"question asked on " +utils.formatDate(this.props.data["creation_date"])}
              </div>
          </div>
        );
    }

}

export default Question;