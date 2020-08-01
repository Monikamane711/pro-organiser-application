import db from "../Firebase/config";
//Function to Add board details in Firestore
export const addBoard = async (board) => {
    try {
      await db.collection("boardDetails").add(board);
      return true;
    } catch (error) {
      return error;
    }
  };
  //Function to get all getBoards Details from FireStore(Like API CALL)
export const getBoards = async (email) => {
    try {
      const snapshot = await db.collection("boardDetails")
      .where('user', '==', email)
      .get();
      const boards = snapshot.docs.map((x) =>({ ...x.data(), id: x.id }));
      return boards;
    } catch (error) {
      return [];
    }
  };
  
  //Function to single board using board id from FireStore(Like API CALL)
  export const getBoard = async (id) => {
    try {
      const board = await db.collection("boardsDetails").doc(id).get();
      return { ...board.data(), id: board.id };
    } catch (error) {
      return error;
    }
  };
  //Function to Delete Board from FireStore Database
export const deleteBoard = async (id) => {
    try {
      await db.collection("boardDetails").doc(id).delete();
      return true;
    } catch (error) {
      return error;
    }
  };
  export const con1 = obj => JSON.parse(JSON.stringify(obj));