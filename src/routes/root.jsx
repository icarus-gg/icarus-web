import { Outlet } from "react-router-dom"

import './css/App.css'

export default function Root() {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>

      <div className="centered">
        <Footer />
      </div>
    </>
  );
}
