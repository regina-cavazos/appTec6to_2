interface RectangleProps{
    color : string;
}

export default function Rectangle({color}:RectangleProps){
    return <div style = {{backgroundColor: color}} className="w-80 h-40"></div>
}