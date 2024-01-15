import React from 'react'

const Card = () => {
  return (
    <div className='container mt-10px'>
    <div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title">The excel sheet</h5>
    <h6 className="card-subtitle mb-2 text-muted">Sample Sheet</h6>
    <p className="card-text">Learned this thing, thanks to God :)</p>
    <a href="https://docs.google.com/spreadsheets/d/1L8wRFadnTdjHbqBIrwpqqwkw1d7puyWxXIvJnomq5Dw/edit?pli=1#gid=0"
    className="card-link"
    target="_blank"
    rel="noopener noreferrer"
    >Sheet link</a>
  </div>
</div>
    </div>
  )
}

export default Card