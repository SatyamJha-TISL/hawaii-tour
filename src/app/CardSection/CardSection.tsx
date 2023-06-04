import { getHighLights } from "../services/services";
import Cards from "../Components/Cards/Cards";
import styles from "./CardSection.module.scss";
import { type } from "os";

type HighLights = [];
type dataVal = {

    title: string,
    description: string,
    image: string

}

export default async function CardSection(): Promise<JSX.Element> {

    let data: HighLights = await getHighLights()


    return (
        <div className={styles.cardwrap}>{data.map((data: dataVal) => {
            return <Cards data={data} />
        })}</div>
    )
}
