import React from 'react'
import styles from './Admin.module.css'
import  Skeleton from '@mui/material/Skeleton';

const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>
         <Skeleton
              variant="rectangular"
              width={266}
              height={200}
              sx={{ borderRadius: "20px" }}
            />
        <div className={styles.AdminCard}>
          <h2> Coding Hunger</h2>
          <p style ={{ color:"blue"}}>mamathagaje835@gmail.com </p>
          <h3> score : 50% </h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus facilis delectus molestias. Distinctio, eos minima deserunt suscipit quidem sit voluptatibus corporis. Necessitatibus, repellat labore? Quaerat, aut. Eveniet, consequatur voluptatibus.</p>
      </div>
       <div className={styles.AdminCard}>
          <h2> Coding Hunger</h2>
          <p style ={{ color:"blue"}}>mamathagaje835@gmail.com </p>
          <h3> score : 50% </h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus facilis delectus molestias. Distinctio, eos minima deserunt suscipit quidem sit voluptatibus corporis. Necessitatibus, repellat labore? Quaerat, aut. Eveniet, consequatur voluptatibus.</p>
      </div>
         <div className={styles.AdminCard}>
          <h2> Coding Hunger</h2>
          <p style ={{ color:"blue"}}>mamathagaje835@gmail.com </p>
          <h3> score : 50% </h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus facilis delectus molestias. Distinctio, eos minima deserunt suscipit quidem sit voluptatibus corporis. Necessitatibus, repellat labore? Quaerat, aut. Eveniet, consequatur voluptatibus.</p>
      </div>
           <div className={styles.AdminCard}>
          <h2> Coding Hunger</h2>
          <p style ={{ color:"blue"}}>mamathagaje835@gmail.com </p>
          <h3> score : 50% </h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus facilis delectus molestias. Distinctio, eos minima deserunt suscipit quidem sit voluptatibus corporis. Necessitatibus, repellat labore? Quaerat, aut. Eveniet, consequatur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident molestiae maxime magni error iusto qui facilis? Sint iure at cupiditate perferendis qui incidunt, iusto reprehenderit nesciunt, repudiandae libero nostrum!</p>
      </div>
           <div className={styles.AdminCard}>
          <h2> Coding Hunger</h2>
          <p style ={{ color:"blue"}}>mamathagaje835@gmail.com </p>
          <h3> score : 50% </h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus facilis delectus molestias. Distinctio, eos minima deserunt suscipit quidem sit voluptatibus corporis. Necessitatibus, repellat labore? Quaerat, aut. Eveniet, consequatur voluptatibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ad, dolore in dolorum sunt debitis perspiciatis cupiditate suscipit quia? Officia consequuntur dolorum consectetur, inventore sequi ipsum animi perferendis voluptatum? Quis!
          </p>
      </div>
      </div>
    </div>
  )
}

export default Admin
