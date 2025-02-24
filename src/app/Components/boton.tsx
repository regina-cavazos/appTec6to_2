interface BotonProps{
    color : string;
}

export default function Boton({color}:BotonProps){
    return <div style = {{backgroundColor: color}} className="w-32 h-32"></div>
}