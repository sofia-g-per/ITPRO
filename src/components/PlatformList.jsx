import React from 'react'
import '../css/platform-list.css'

export default function PlatformList({platforms}) {
  return (
    <div className='platform-list'>
        <span>Платформы: </span>
        {
            platforms.map((platform) => 
                {
                    {<img src={platform.icon} alt={platform.title} />}
                }
            )
        }
    </div>
  )
}