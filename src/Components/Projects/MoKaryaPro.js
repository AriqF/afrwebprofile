import { Badge } from "react-bootstrap";
import imgMokarya from '../../assets/img/mokarya2.png';



function MoKaryaPro(){
    return(
        <div className="project-items">
            <img className="img-fluid" src={imgMokarya} alt="mokarya-project"/>
            <a href="https://github.com/AriqF/MoKarya" className="projectLink">
                <h4>MoKarya <span><small style={{fontSize: "0.5em"}}>(2021)</small></span></h4>
            </a>
            <div className="box-body">
                <div className="d-flex d-row text-center tag-container">   
                    <div class="tag pl-0"><Badge bg="danger">HTML&CSS</Badge></div>
                    <div class="tag"><Badge bg="danger">Javascript</Badge></div>
                    <div className="tag"><Badge bg="danger">php</Badge></div> 
                    <div className="tag"><Badge bg="danger">MySQL</Badge></div>
                </div>
                <p>
                    MoKarya is a website created with the aim that users can share their work. 
                    This website created with native php and MySQL as a database.
                </p>
            </div>
            {/* <div className="box-button">
                <div className="d-flex flex-row">
                    <div className="p-2" style={{paddingLeft: '0 !important'}}>
                    <a href="https://github.com/AriqF/MoKarya" class="btnrs btnr-git"><i class="fab fa-github"></i> Github Repo</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default MoKaryaPro;