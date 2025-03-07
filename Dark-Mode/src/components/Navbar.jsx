import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/theme-context.jsx'

const Navbar = () => {
  const {theme,themToggle} = useTheme()
  console.log(theme)
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
      <span>logo</span>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/blog'>Blog</Link>
          {/* theme toggle switch */}
        <div>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            {/* <span style={{ marginRight: '0.5rem' }}>Dark Mode</span> */}
            <div style={{ position: 'relative' }}>
              <input 
                type="checkbox" 
                // checked={theme === 'dark'}
                onChange={() => themToggle()}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40px',
                height: '20px',
                backgroundColor: theme === 'dark' ? 'blue' : '#CCC',
                borderRadius: '20px',
                transition: '0.4s'
              }}></span>
              <span style={{
                position: 'absolute',
                top: '2px',
                left: theme === 'dark' ? '22px' : '2px',
                width: '16px',
                height: '16px',
                backgroundColor: 'white',
                borderRadius: '50%',
                transition: '0.4s'
              }}></span>
            </div>
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
