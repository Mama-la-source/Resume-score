import React from 'react'
import styles from './Dashboard.module.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import  Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
        <div className={styles.DashboardLeft}>
            <div className={styles.DashboardHeader}>
                <div className={styles.DashboardHeaderTitle}>Smart Resume Screening </div> 
                <div className={styles.DashboardHeaderLargeTitle}>Resume Match Score </div>
            </div>
            <div className={styles.alertInfo}>
                <div> 🔔Important Instructions: </div>
                <div className={styles.dashboardInstruction}>
                <div>📃Please paste the complete job description in the "Job Description" field before submitting.</div>
                <div>📎only pdf format(.pdt) resumes are accepted .</div>
    
                </div>
        </div>
        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardResumeBlock}>
            Upload your Resume
            </div>
            <div className={styles.DashboardInputField}>
              <label htmlFor='inputField'className={styles.analyzeAIBtn}>Upload Resume </label>
              <input type='file' accept='.pdf' id='inputField' />
            </div>
        </div>
        <div className={styles.jobDesc}>
          <textarea className={styles.textArea} placeholder='Paste the Job Description here...'rows={10} cols={50}></textarea>
          <div className={styles.AnalyzeBtn}>Analyze</div>
            </div>

    </div>
    <div className={styles.DashboardRight}>
      <div className={styles.DashboardRightTopCard}>
        <div> Analyze with AI </div>
        <img className={styles.profileImg} src='https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png' alt='ai'/>
        <h2> Coding Hunger </h2>
        </div>
      {/*  <div className={styles.DashboardRightTopCard}>
        <div> Result </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap:20}}>
        <h1> 75% </h1>
        <CreditScoreIcon sx={{fontsize:22}}/>
        </div>
        <div className={styles.feedback}>
          <h3> Feedback </h3>
          <p> Your resume matches 75% of the job description. To improve your match score, consider adding more relevant keywords and experiences that align with the job requirements. Tailoring your resume to highlight specific skills and accomplishments mentioned in the job description can significantly enhance your chances of getting noticed by recruiters. Keep refining your resume to better fit the roles you are applying for! </p>
        </div>
        
        </div>*/}
        <Skeleton variant='rectangular' sx = {{ borderRadius: " 20px" }} width={280} height={280}/>
    </div>
    </div>
    
  )
}

export default WithAuthHOC(Dashboard)
