import Sidebar from "react-sidebar";
import SideBarContent from './sideBarContent.jsx'




const styles = { 
    sidebar: { 
        background: "white",
        position: "fixed"

    } 
}

const SIDE = ({ sidebarOpen, onSetSidebarOpen }) => {

    

    return (
        <Sidebar
            sidebar={<SideBarContent/>}
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            styles={styles}>
        </Sidebar>
    )
}

export default SIDE
