import { Global } from "@emotion/react"

const Fonts = () => {
  return (
    <Global
      styles={`
        /* scripts */
        @font-face {
          font-family: 'Heart Breath';
          src: url('/fonts/HeartBreath-DEMO.woff') format('woff');
        }
        `}
    />)
}

export default Fonts;
