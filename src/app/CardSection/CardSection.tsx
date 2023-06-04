import { getHighLights } from "../services/services";
import Cards from "../Components/Cards/Cards";
import styles from "./CardSection.module.scss";
import { type } from "os";

type HighLights = [];
type data = {

    title: String,
    description: String,
    image: String

}

export default async function CardSection(): Promise<JSX.Element> {

    let data: HighLights = await getHighLights()


    return (
        <div className={styles.cardwrap}>{data.map((data: data) => {
            return <Cards data={data} />
        })}</div>
    )
}
