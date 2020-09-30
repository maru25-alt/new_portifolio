import React, { Component } from 'react';
import $ from 'jquery';
import PrintButton from '../extras/PrintButton';
import ResumePage from '../extras/ResumeFinal.js'

export class DownloadResume extends Component {
    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          resumeData: {}
        };
      }
      getResumeData(){
        $.ajax({
          url:'/resumeData.json',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({resumeData: data});
          }.bind(this),
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }
      componentWillMount(){
        this.getResumeData();
      }
    render() {
        return (
            <div>
                 <div className="float-right mt-5 mr-5">
                    <a className="btn btn-outline-success btn-lg" href="/">Go Back <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <PrintButton id={"singlePage"} label={"Download Resume Pdf"} />
               
                <ResumePage id={"singlePage"}
                    resume={this.state.resumeData.resume}
                    main={this.state.resumeData.main}
                    resumeData={this.state.resumeData}/>
            </div>
        )
    }
}

export default DownloadResume



