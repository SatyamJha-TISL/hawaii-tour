
import Image from "next/image";
import Button from "../Components/Button/Button";
import { getCategories } from "../services/services";
import styles from "./CategoriesSection.module.scss"
// import { lazy } from "react";


export default async function CategoriesSection() {


    type Category = [];
    type dataVal = {
        name: string,
        activities: Array<string>

    }

    let data: Category = await getCategories()
    return (
        <div className={styles.container}>
            <div className={styles.categories}>
                <div className={styles.heading}>Categories</div>
                {
                    data.map((item: dataVal) => <div className={styles.category}> <div>{item.name} </div> <div> <Image src="/images/arrow_forward.svg" loading="lazy" alt='logo' width={16} height={16} /></div> </div>)}
            </div>
            <div>
                <div className={styles.heading}>Travel Guide</div>
                <div className={styles.contact}>
                    <div className={styles.primary}>
                        <div>
                            <div className={styles.contactheading}>Hadwin Malone</div>
                            <div className={styles.contactsub} >Guide since 2012</div>
                        </div>
                        <Button title="Contact" type="primary" />
                    </div>
                    <div>
                        <Image src="/images/profile.svg" alt="profile-image" width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}
