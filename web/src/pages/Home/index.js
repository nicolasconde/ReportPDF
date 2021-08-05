import React, { useEffect } from "react";

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Home = () => {
    
    useEffect(() =>{

    },[])

    const handlePdf = () =>{
        const element = document.getElementById("container")
        html2canvas(element, {}).then((canvas) =>{
            const imgData = canvas.toDataURL("image/jpeg", 1.0)
            const pdf = new jsPDF("p", "mm", "a4")
            const width = pdf.internal.pageSize.width;
            const height = pdf.internal.pageSize.height;
            pdf.addImage(imgData, "JPEG", 0, 0, width, height)
            pdf.save("Report.pdf")
        })
    }

    return(
        <>
        <Button
        onClick={ () => handlePdf() }
        variant="contained"
        color="default"
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <div id="mainContainer" style={{ overflow: 'hidden', height: '0', width: '700px' }}>
          <div id="container" style={{ width: '100%'}}>
                <img style={{ height: '100%', width: '100%'}}/>
          </div>
      </div>
      </>
    )
}
export default Home;