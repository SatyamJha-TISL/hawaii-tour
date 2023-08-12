
"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../Button/Button';
import styles from "./Navigation.module.scss"


export default function Navigation() {

    const [clicked, setClicked] = useState(false)
    const [active, setActive] = useState("Home");

    const router = useRouter();


    return (

        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}> <Image src="/images/Aloha.svg" alt='logo' width={94} height={35} /></div>

                <div className={styles.linkwrap}>
                    <div className={styles.navs}>
                        <div onClick={() => router.push("/")} >Home</div>
                        <div onClick={() => router.push("Surfing")} > Surfing</div>
                        <div onClick={() => router.push("Traditional Festivals")}>Hula</div>
                        <div onClick={() => router.push("Volcanoes")}>Vulcano</div>
                    </div>
                    <div className={styles.button}>
                        <Button title='Book a trip' type='secondary' />
                    </div>

                    <div className={styles.hamburg} onClick={() => setClicked(true)} ><Image src="/images/menu.svg" alt='logo' width={30} height={20} /> </div>
                </div>
            </div>


            {clicked && <section>
                <div className={styles.sidebar}>

                    <div className={styles.options}>
                        <div className={styles.cross} onClick={() => { setClicked(false) }} >
                            <Image src="/images/cross.svg" alt='logo' width={30} height={20} />
                        </div>

                        <div>
                            <div className={styles.links} >Home</div>
                            <div className={styles.links} >Surfing</div>
                            <div className={styles.links} >Hula</div>
                            <div className={styles.links} >Vulcano</div>
                        </div>
                        <div>
                            <Button title='Book a trip' type='secondary' />
                        </div>
                    </div>

                </div>
            </section>}
        </div>

    )
}
