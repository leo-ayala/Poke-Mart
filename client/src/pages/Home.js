import React from "react";
// import { useStoreContext } from "../utils/GlobalState";
import ItemList from "../components/ItemList";
// import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
// import Backdrop from "../components/Backdrop/Backdrop";

const Home = () => {
  // const [state] = useStoreContext();

  // state.sideDrawerOpen = false

  //  const drawerToggleClickHandler= () => {
  //     this.setState((prevState) => {
  //       return {sideDrawerOpen: !prevState.sideDrawerOpen}
  //     })
  // };

  // const backdropClickHandler = () => {
  //   this.setState({sideDrawerOpen: false})
  // };

  // let sideDrawer;
  // let backdrop;

  // if (state.sideDrawerOpen) {
  //   sideDrawer = <CategoryMenu />
  //   backdrop = <Backdrop click={backdropClickHandler}/>
  // }

  return (
    <div className="container ">
      <Nav
      // drawerClickHandler= {drawerToggleClickHandler}
      />
      {/* <CategoryMenu />
        <Backdrop />  */}
      <ItemList />
    </div>
  );
};

export default Home;
