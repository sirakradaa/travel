import * as React from "react";
import Grid from "@mui/material/Grid";
import TitleBarImageListComponent from "./../../Components/TitleBarImageList/index";
import { db } from "../../firebase";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";

const data = async () => {
  const dbRef = collection(db, "users");

  onSnapshot(dbRef, (docsSnap) => {
    docsSnap.forEach((doc) => {
      console.log(doc.data());
    });
  });

  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
};

const HomePage = () => {
  data();

  // const users = collection(db, "users");
  // const docSnap = getDocs(users);

  // console.log("test", docSnap);

  return (
    <>
      <Grid container justifyContent={"center"} padding={1}>
        <TitleBarImageListComponent />
      </Grid>
    </>
  );
};

export default HomePage;
