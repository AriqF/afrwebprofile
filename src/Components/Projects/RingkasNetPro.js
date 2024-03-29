import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgRingkasnet from '../../assets/img/ringkasnet.png';


function MoKaryaPro(){
    return(
        <div className="project-items">
            <img className="img-fluid " src={imgRingkasnet} alt="ringkasnet-project"/>
            <a href="https://github.com/AriqF/Ringkas-Net" className="projectLink">
                <h4>RingkasNet <span><small style={{fontSize: "0.5em"}}>(2021)</small></span></h4>
            </a>
            <div className="box-body">
                <div className="d-flex d-row text-center tag-container">   
                    <div class="tag pl-0"><Badge bg="danger">HTML&CSS</Badge></div>
                    <div class="tag"><Badge bg="danger">Javascript</Badge></div>
                    <div className="tag"><Badge bg="danger">php</Badge></div> 
                    <div className="tag"><Badge bg="danger">MySQL</Badge></div>
                </div>
                <p>
                    Ringkas.Net is a kind of a website to write and share people's thought. This website
                    is created using php native and MySQL as database.
                </p>
            </div>
            {/* <div className="box-button">
                <div className="d-flex flex-row">
                    <div className="p-2" style={{paddingLeft: '0 !important'}}>
                    <a href="https://github.com/AriqF/Ringkas-Net" class="btnrs btnr-git"><i class="fab fa-github"></i> Github Repo</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default MoKaryaPro;