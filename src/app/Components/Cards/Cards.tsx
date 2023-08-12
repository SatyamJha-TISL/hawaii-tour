
import Image from "next/image";
import styles from "./Cards.module.scss";


type Data = {
    data: {
        image: string,
        title: string,
        description: string
    }
}
export default function Cards({ data }: Data) {
    return (
        <div className={styles.container}>
            <div className={styles.imagewrap} ><Image src={data?.image ?? ""} alt="image" width="300" height="300" loading="lazy" placeholder="blur" blurDataURL={data?.image} /></div>

            <div className={styles.detailwrap} >
                <div className={styles.heading}>{data.title}</div>
                <div className={styles.subheading}>{data.description}</div>
            </div>

        </div>
    )
}

