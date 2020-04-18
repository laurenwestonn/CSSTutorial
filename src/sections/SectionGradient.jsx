import React from 'react'

export const SectionGradient = () => {

    return (
        <> 
            <h1>Gradient</h1>
            <p>Gradient direction is dependent on block proportion</p>
            <div className="container">
            <div className="colour-snippet gradient thin">to top right</div>
            <div className="colour-snippet gradient wide">to top right</div>
            </div>

            <p>Set them to be a particular per cent, e.g. 45deg</p>
            <div className="container">
            <div className="colour-snippet gradient-45deg thin">45deg</div>
            <div className="colour-snippet gradient-45deg wide">45deg</div>
            </div>

            <p>Gradients can have as many colours as you like</p>
            <p>Specify how much each colour takes up by putting a per cent at the end</p>
            <p>If you have three colours, the default is</p>
            <ul>
            <li>0%</li>
            <li>50%</li>
            <li>100%</li>
            </ul>
            <div className="colour-snippet three-gradient">0%, 50%, 100%</div>

            <p>Here's a different distribution of colours</p>
            <ul>
            <li>30%</li>
            <li>40%</li>
            <li>90%</li>
            </ul>
            <div className="colour-snippet uneven-gradient">30%, 40%, 90%</div>
        </>
    )
}