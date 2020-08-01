import db from "../Firebase/config";
//Function to Add Column details in Firstore
export const addColumn = async (column) => {
    try {
      const columnRef = await db.collection("columnDetails").add(column);
      return columnRef.id;
    } catch (error) {
      return error;
    }
  };
  //Function to get all columns details from FireStore(Like API CALL)
export const getColumns = async (boardId) => {
    try {
      const snapshot = await db
        .collection("columnDetails")
        .where("boardId", "==", boardId)
        .get();
      const boards = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
      return boards;
    } catch (error) {
      return [];
    }
  };
  //UPDATE FUNCTIONS
//
export const updateColumn = async (id, column) => {
    try 
    {
      await db.collection('columnDetails').doc(id).update(column);
      return true;
    } 
    catch (error)
    {
      return error;
    }
  };
  //Function to delete Column from FireStore Database

  export const deleteColumn=async(id)=>{
    try{
        await db.collection('columnDetails').doc(id).delete();
        return true;
    }
    catch(error){
        return error;

    }
}
export const con2 = obj => JSON.parse(JSON.stringify(obj));