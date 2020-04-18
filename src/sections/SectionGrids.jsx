import React from 'react'

export const SectionGrids = () => {
    return (
        <div className="section-grid">
            <h1>Grids</h1>

            <h3>Container</h3>
            <ul>
                <li>display: grid</li>
                <li>Set column sizes with grid-template-columns</li>
                <li>Set row sizes with grid-template-rows</li>
            </ul>

            <h5 style={{marginBottom: 0}}>grid-template-columns: '1fr 1fr'</h5>
            <p style={{fontSize: 16, margin: 0}}>2 columns, each taking up same amount of space</p>

            <div className="container even-columns">
                <div className="block">1fr</div>
                <div className="block">1fr</div>
                <div className="block">1fr</div>
                <div className="block">1fr</div>
            </div>

            <h5 style={{marginBottom: 0}}>grid-template-columns: '1fr 2fr'</h5>
            <p style={{fontSize: 16, margin: 0}}>2 columns, first is half the width of the second</p>

            <div className="container uneven-columns">
                <div className="block">1fr</div>
                <div className="block">2fr</div>
                <div className="block">1fr</div>
                <div className="block">2fr</div>
            </div>

            <h5 style={{marginBottom: 0}}>grid-template-rows: '1fr 2fr'</h5>
            <p style={{fontSize: 16, margin: 0}}>2 columns, first is half the width of the second</p>
            <p style={{fontSize: 16, margin: 0}}>THIS REQUIRED grid-template-columns (1fr, 1fr)</p>

            <div className="container uneven-rows">
                <div className="block">1fr</div>
                <div className="block">1fr</div>
                <div className="block">1fr</div>
                <div className="block">1fr</div>
            </div>
        </div>
    )
}