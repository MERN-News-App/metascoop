import Sidebar from "react-sidebar";
import SideBarContent from './sideBarContent.jsx'
import './fix.scss'




const styles = { 
    sidebar: { 
        position: "fixed",
        background: "white"
    },
    root: {
        position: "undefined"
    },
    content: {
        position: "undefined",
        top: "undefined",
        left: "undefined",
        right: "undefined",
        bottom: "undefined"
    }
}

const SIDE = ({ sidebarOpen, onSetSidebarOpen }) => {

    

    return (
        <Sidebar
            sidebar={<SideBarContent/>}
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            styles={styles}
            >
                <></>
        </Sidebar>
    )
}

export default SIDE
