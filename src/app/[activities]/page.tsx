import Image from "next/image";
import { type } from "os";
import { getActivities } from "../services/services";
import styles from "./page.module.scss";

type Params = {
    params: {
        activities: string
    }
}

type Item = {
    name: string
}

type data = {
    name: string,
    image: string,
    description: string,
    activities: []
}

export default async function Activities({ params }: Params) {
    const data: data = await getActivities(params.activities);

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={data?.image ?? ""} />
            </div>

            <div className={styles.other}>
                <div className={styles.name}>{data?.name}</div>

                <div className={styles.description}>{data?.description}</div>
                <div className={styles.activities}>
                    {(data || []).activities.map((item: Item, index: number) => {
                        return <div key={index} className={styles.item}> {item.name}</div>;
                    })}
                </div>
            </div>
        </div>
    );
}
