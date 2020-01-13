import React from "react"
import { Spring } from "react-spring/renderprops"
import "../styles/svg.scss"

const Svg = () => {
  return (
    <>
      <Spring
        from={{
          backgroundColor: `#1a2736`,
          opacity: 1,
        }}
        to={{
          backgroundColor: `transparent`,
          opacity: 0,
        }}
        config={{ delay: 3500, duration: 1700 }}
      >
        {props => (
          <div style={props} className="wrapper">
            <Spring
              from={{ fill: `transparent` }}
              to={{ fill: `#fff` }}
              config={{ delay: 2500, duration: 500 }}
            >
              {fill => (
                <svg
                  style={fill}
                  id="logo"
                  width="219"
                  height="109"
                  viewBox="0 0 219 109"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Spring
                    from={{
                      strokeDashoffset: 448,
                      transform: `translate3d(0px, 0, 0)`,
                    }}
                    to={{
                      strokeDashoffset: 0,
                      transform: `translate3d(-18px, 0, 0)`,
                    }}
                    config={{ delay: 400, duration: 2000 }}
                  >
                    {props => (
                      <path
                        style={props}
                        className="path"
                        d="M146.101 3.33039L145.781 2.25999H144.664H115H112.842L113.594 4.28277L151.61 106.523L151.973 107.5H153.016H176.344H177.391L177.752 106.518L215.336 4.27754L216.078 2.25999H213.928H184.408H183.286L182.969 3.33607L164.67 65.4478L146.101 3.33039Z"
                        stroke="black"
                        strokeWidth="3"
                      />
                    )}
                  </Spring>
                  <Spring
                    from={{
                      strokeDashoffset: 448,
                      transform: `translate3d(0px, 0, 0)`,
                    }}
                    to={{
                      strokeDashoffset: 0,
                      transform: `translate3d(18px, 0, 0)`,
                    }}
                    config={{ duration: 2000 }}
                  >
                    {props => (
                      <path
                        style={props}
                        className="path"
                        d="M36.1012 3.33039L35.7812 2.25999H34.664H5H2.84192L3.59405 4.28277L41.6101 106.523L41.9734 107.5H43.016H66.344H67.3907L67.7519 106.518L105.336 4.27754L106.078 2.25999H103.928H74.408H73.2862L72.9692 3.33607L54.6696 65.4478L36.1012 3.33039Z"
                        stroke="black"
                        strokeWidth="3"
                      />
                    )}
                  </Spring>
                </svg>
              )}
            </Spring>
          </div>
        )}
      </Spring>
    </>
  )
}

export default Svg
