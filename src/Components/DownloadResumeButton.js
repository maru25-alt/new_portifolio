import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import image from '../resume.png'
import jsPDF from 'jspdf'

export default class pdfGenerate extends Component {
    constructor(props){
        super(props)
        this.state ={
            imageData: ""
        }
    }



   toDataUrl(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
  
    // JSpdf Generator For generating the PDF
    jsPdfGenerator = () => {
          this.toDataUrl(image, function(myBase64) {
                  var doc = new jsPDF('p', 'pt');
                  doc.addImage(myBase64, 'JPEG' ,0, 0);
                  doc.save('Resume'.pdf);
            });

    }
  
    render(){
      return(
         <Button  className="button" onClick={this.jsPdfGenerator} type="primary"><i className="fa fa-download"></i> Download Resume </Button> 
        )
     }
  
  
}