import Footer from "./Footer"
import './Schooldata.css'

const Card=(props)=>{
    return (
        <>
            <div className="card mb-3" style={{width:'fill',padding:'50px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={`${props.School.Image}`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{props.School.Name}</h3>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}


const SchoolsData=()=>{
    const schools=[{Name:"ZP School Parite",Image:'https://thumbs.dreamstime.com/b/modern-red-brick-school-building-11156872.jpg'},
        {Name:"ZP School Parite",Image:'https://thumbs.dreamstime.com/b/modern-red-brick-school-building-11156872.jpg'},
        {Name:"ZP School Parite",Image:'https://thumbs.dreamstime.com/b/modern-red-brick-school-building-11156872.jpg'}
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
            {schools.map((data,index) => <Card School={data}></Card>)}
            <Footer></Footer>
        </>
    )
}
export default SchoolsData