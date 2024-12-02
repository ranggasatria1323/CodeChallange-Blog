import { Button } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react"

export default function Featured(){
    return(<div id="articles" style={{backgroundColor:'white', alignItems:'normal', padding:'100px 10%'}} className="container">
        <div className="section1">
            <div style={{padding:'0 10%', color:'black', width:'900px',display:'flex', alignItems:'center'}}>
                <div>
                    <p style={{marginBottom:'80px', fontSize:'30px', fontWeight:'bold'}}>long established</p>
                    <p style={{fontSize:'14px'}}>It is a long established fact that a reader will be
                    distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem Ipsum is that....
                    </p>
                    <div style={{display:'flex', marginTop:'80px', justifyContent:'space-between'}}>
                        <p>May 20th 2020</p>
                        <a target="blank" href="https://docs.google.com/spreadsheets/d/1pBqazBG9Uv1QWBE8xDgJlpEPxTes0jdLsBy5XlLIoP8/edit?gid=0#gid=0"><Button style={{fontWeight:'bold'}}>Read More</Button></a>
                    </div>
                </div>
            </div>
            <img style={{minHeight:'600px', minWidth:'520px'}} src="https://media.istockphoto.com/id/1217079550/photo/young-man-using-a-phone-at-home.jpg?s=612x612&w=0&k=20&c=CZJal1ZLccLIgn5KwfAhSBGOwc-37j1Mf5lSvW5wL38=" />
        </div>
        <Grid templateColumns="repeat(3, 1fr)" gap="16">
            <div className="section2">
                <img src="https://img.freepik.com/premium-photo/close-up-laptop-white-table-modern-office_35674-3602.jpg" />
            </div>
            <div className="section2">
                <img src="https://positiveroutines.com/wp-content/uploads/2019/08/two-people-working-together-in-office.jpg" />
            </div>
            <div className="section2">
                <img src="https://img.freepik.com/premium-photo/laptop-placed-cafe-table-beside-steaming-cup-coffee_997602-420.jpg" />
            </div>
        </Grid>
    </div>)
}