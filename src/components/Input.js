import React from 'react'

const Input = props => {
  const {handleChange, name, team, placeholder, conference, type, value, shot_profile} = props
    return (
      <>
        <label htmlFor={team}>{conference}</label>
        <input
            name={name}
          id={shot_profile}
          shot_profile={shot_profile}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    )
}

export default Input