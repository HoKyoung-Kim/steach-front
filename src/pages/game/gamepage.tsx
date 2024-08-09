import React from "react";
import { Link } from "react-router-dom";


const GamePage: React.FC = () => {
  return (
    <div className="grid grid-cols-11 gap-4 h-screen items-center">
      <div className="col-span-1"></div>
      <div className="col-span-3">
        <Link to={"/game/cat"}>
          <img src="http://steach.ssafy.io:8082/img-upload/display/my/hzlxtcxooigo.jpg" alt="" />  
        </Link>
      </div>
      <div className="col-span-3">
        <Link to={"/game/man"}>
          <img src="http://steach.ssafy.io:8082/img-upload/display/my/kfhjuhnvplman.jpg" alt="" />  
        </Link>
      </div>
      <div className="col-span-3">
        <Link to={"/game/reva"}>
          <img src="http://steach.ssafy.io:8082/img-upload/display/my/ifnnltrozgreva.jpg" alt="" />  
        </Link>
      </div>
      <div className="col-span-1"></div>
      </div>
  )
}
export default GamePage;