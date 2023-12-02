import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

type jobDataType = {
    title: string;
    description : string;
}

export const fetchJobData = async () : Promise<jobDataType[]> =>{
    try {
        const data : jobDataType[] = []
        const q = query(collection(db, "cities"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc : any) => {
            const documentData = doc.data() as jobDataType;
            data.push(documentData);
        })

        return data;
    } catch (error) {
        console.log("Error fetching data",error);
        throw error;
    }

}
