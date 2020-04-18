import React from 'react'

export const SectionGrids = () => {
    return (
        <div className="section-grid">
            <h1>Grids</h1>

            <h3>Container</h3>

            <p>Set these in the container:</p>
            <div className='gridq' style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr',
                gridColumnGap: 15
            }}>
                {/* <div className={'header'}>Set these in the container</div> */}
                <div className={'info'}>Use grids layout</div>
                <div className={'info-code'}>>display: grid</div>
                <div className={'info'}>Set column sizes</div>
                <div className={'info-code'}>>grid-template-columns</div>
                <div className={'info'}>Set row sizes</div>
                <div className={'info-code'}>>grid-template-rows</div>
            </div>

            <h3>grid-template-columns</h3>

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
                <div className="block">1 high</div>
                <div className="block">1 high</div>
                <div className="block">2 high</div>
                <div className="block">2 high</div>
            </div>
        </div>
    )
}