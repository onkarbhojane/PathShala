import Footer from "./Footer"
import './Schooldata.css'
import {Link, useNavigate} from 'react-router-dom'
const Card=(props)=>{
    return (
        <>
            <div className="card mb-3" style={{width:'fill',padding:'50px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${props.School.Image}`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8" style={{
                    paddingLeft:'20px'
                }}>
                    <div className="card-body">
                        <h3 className="card-title">{props.School.Name}</h3>
                    </div>
                    <div style={{
                        height:'100px',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        width:'500px'
                    }}>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '0%' }}></div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '25%' }}></div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '50%' }}></div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '75%' }}></div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
        </>
    )
}


const SchoolsData=()=>{
    const Navigate=useNavigate();
    const schools=[{Name:"ZP School Parite",Image:'https://thumbs.dreamstime.com/b/modern-red-brick-school-building-11156872.jpg'},
        {Name:"ZP School Parite1",Image:'https://thumbs.dreamstime.com/b/modern-red-brick-school-building-11156872.jpg'},
        {Name:"ZP School Parite2",Image:'https://thumbs.dreamstime.com/b/modern-red-brick-school-building-11156872.jpg'}
    ]
    return (
        <>
            <nav className="navbar bg-body-tertiary">
            <div className="container-fluid" style={{
                backgroundColor:'#d0e7f9',
                height:'70px',
                margin:'0px',
            }}>
                <h1 className="navbar-brand" style={{
                    fontSize:'30px'
                }}>Schools</h1>
                <form className="d-flex" role="search" style={{
                    width:'500px'
                }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
            {schools.map((data,index) => <Link to={`/${encodeURIComponent(data.Name)}`} style={{
                color:'black',
                textDecoration:'none'
            }}><Card School={data} ></Card></Link>)}
            <Footer></Footer>
        </>
    )
}
export default SchoolsData