import {
  AddCircle,
  AddCircleOutline,
  RemoveCircle,
  Circle,
  Help,
  Error,
} from '@mui/icons-material'
import { red, green, blueGrey, orange } from '@mui/material/colors'

export default function EvidenceTableEffectiveness(props: {
  effectiveness: string
}) {
  const { effectiveness } = props
  const altGreen = green[500]
  const altGray = blueGrey[400]

  const component = function (ef: string) {
    switch (ef) {
      case '効果あり':
        return (
          <div>
            <AddCircle sx={{ color: altGreen }} />
          </div>
        )
        break
      case '効果なし':
        return (
          <svg
            style={{ width: '1.7em', height: '1.7em', fill: '#e57373' }}
            width="256px"
            height="256px"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M152,128c0,14.85938-5.05469,40-24,40s-24-25.14062-24-40,5.05469-40,24-40S152,113.14063,152,128Zm80,0A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Zm-64,0c0-27.875-12.36719-56-40-56s-40,28.125-40,56,12.36719,56,40,56S168,155.875,168,128Z" />
          </svg>
        )
        break
      case '不明':
        return (
          <div>
            <Help sx={{ color: altGray }} />
          </div>
        )
        break
      case 'ミックス':
        return (
          <svg
            version="1.1"
            id="layer_2"
            style={{ width: '1.7em', height: '1.7em', fill: '#757575' }}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
          >
            <path
              id="frame"
              d="M128,24C70.7,24,24,70.7,24,128s46.7,104,104,104s104-46.7,104-104S185.3,24,128,24z M118.8,212.9
              C74,210.6,38.2,173.4,38.2,128S74,45.4,118.8,43.1V212.9z M137.2,212.9V43.1c44.8,2.4,80.5,39.5,80.5,84.9S182,210.6,137.2,212.9z"
            />
            <polygon
              id="plus"
              points="183.9,121.8 183.9,99.6 171.1,99.6 171.1,121.8 150.1,121.8 150.1,134.2 171.1,134.2 171.1,156.4 
              183.9,156.4 183.9,134.2 204.9,134.2 204.9,121.8 "
            />
            <rect id="minus" x="51.1" y="124.7" width="54.8" height="12.5" />
          </svg>
        )
        break
      case '副作用':
        return (
          <div>
            <Error sx={{ color: orange }} />
          </div>
        )
        break
      default:
        return <p>failed</p>
    }
  }

  return <>{component(effectiveness)}</>
}
