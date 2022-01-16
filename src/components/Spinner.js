import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import  {Bars}  from "react-loader-spinner";

export default function Spinner(){
    return(
        <Bars color="#e6e60f" height={60} width={60} />
    )
    // <div className="spinner-border text-primary" role="status">
    //         <span className="visually-hidden">Loading...</span>
    // </div>
}