import style from './Home.module.css'
export default function Home(){
    return(<div id='home' style={{height:'757px', marginTop:"90px", display:'flex'}} className='container'>
        <div>
            <p className={style['headline-home']} style={{top:'10%', zIndex:'1'}}>Make Better Coffee</p>
            <p className={style['headline-home']} style={{fontSize:'30px', letterSpacing:'1px', zIndex:'1'}}>why learn how to blog?</p>
        </div>
        <img style={{height:'600px', minWidth:'600px', position:'absolute', right:'0', }} src='https://static.vecteezy.com/system/resources/previews/028/711/754/large_2x/diverse-group-of-people-chat-with-a-personal-coach-small-business-ai-generated-free-png.png'/>
    </div>)
}