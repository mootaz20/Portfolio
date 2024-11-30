import './SkillsProgress.css'

const SkillsProgress = ({skill,icon}) => {
  return (
    <div className="skill-card text-center mb-4">
    <div className="icon-container d-flex align-items-center justify-content-center mx-auto">
      {icon}
    </div>
    <h5 className="text-uppercase mt-3 text-white fw-bold">{skill}</h5>
  </div>

  )
}

export default SkillsProgress