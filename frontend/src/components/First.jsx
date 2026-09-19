export default function First() {

    let username ="John"
    let s = {color:"red",backgroundColor:'blue',fontSize:"25px"}
    return (
    <>
    <div style={s}>welcome {username}</div>
    <h2 style={{height:"100px",width:"100px",border:"1px solid black",
        textAlign:"center"
    }}>2+2 = {2+2}</h2>
</>
  )
}
