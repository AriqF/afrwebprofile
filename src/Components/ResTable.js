import { Container, Table } from 'react-bootstrap';
import ResProg from './ResProg';

function ResTable(){
    return (
        <div className="page-section" id="profile">
            <Container>
                <h2 className="subheader-resume">Formal Education</h2>
                <Table className="table-education" data-aos="fade-down" data-aos-duration="1000">
                    <tbody>
                        <tr>
                            <td className="td-org">
                                Bachelor of Applied Science in Software Engineering <span className="text-muted"> - State University of Surabaya</span>
                                <br /> <span className="text-muted"><small>Surabaya - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2019 - Present
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                Natural Science <span className="text-muted"> - SMAN 2 Gunungputri</span>
                                <br /> <span className="text-muted"><small>Bogor - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2016 - 2019
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                An Nahl Junior High School
                                <br /> <span className="text-muted"><small>Bogor - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2013 - 2016
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <h2 className="subheader-resume">Non Formal Education</h2>
                <Table className="table-education" data-aos="fade-down" data-aos-duration="1000">
                    <tbody>
                        <tr>
                            <td className="td-org">
                                English Course <span className="text-muted"> - The British Institute</span>
                                <br /> <span className="text-muted"><small>Bogor - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2017 - 2018
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <h2 className="subheader-resume">Awards, Certification, and Experiences</h2>
                <Table className="table-education" data-aos="fade-down" data-aos-duration="1000">
                    <tbody>
                        <tr>
                            <td className="td-org">
                                Backend Developer Bootcamp <span className="text-muted"> - Ruangguru CAMP</span>
                                <br /> <span className="text-muted"><small>Kampus Merdeka Programme</small></span>
                            </td>
                            <td className="td-year text-center">
                                Aug - Dec 2022 (Ongoing)
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                Backend Developer Intern <span className="text-muted"> - Tokocrypto</span>
                                <br /> <span className="text-muted"><small>Kampus Merdeka Programme</small></span>
                            </td>
                            <td className="td-year text-center">
                                Mar - Aug 2022 
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                Students Association (HIMAPRO) <span className="text-muted"> - State University of Surabaya</span>
                                <br /> <span className="text-muted"><small>Surabaya - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2021 
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                English TEP 517 <span className="text-muted"> - State University of Surabaya Language Center</span>
                                <br /> <span className="text-muted"><small>Surabaya - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2019 
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                Contribution as a Delegate in World Study Abroad in Tokyo  <span className="text-muted"> - World Study Abroad</span>
                                <br /> <span className="text-muted"><small>Tokyo - Japan</small></span>
                            </td>
                            <td className="td-year text-center">
                                2018 
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <ResProg />
            </Container>
        </div>
    );
}

export default ResTable;