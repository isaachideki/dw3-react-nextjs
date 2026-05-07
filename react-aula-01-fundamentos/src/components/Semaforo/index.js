//IMPORTANDO O CSS MODULES (CSS EXTERNO)
import styles from '@/components/Semaforo/Semaforo.module.css'

const Semaforo = () => {
    return(
        <>
    {/*CONTAINER*/}
    {/*CSS inline*/}
        <div style={
            {
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                marginTop:"30px"
            }
        }>
            <h3 style={
                {
                    marginTop:"30px"
                }
            }>Semáforo em React</h3>
        </div>
        <br />
        {/*LUZES SEMÁFORO*/}
        <div className={styles.luz} ></div>
        <br />
        <div className={styles.luz} ></div>
        <br />
        <div className={styles.luz} ></div>
        </>
    )
}
export default Semaforo;