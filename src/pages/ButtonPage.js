import Button from "../components/Button"
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
  return <div>
    <div>
      <Button success rounded outline>
        <GoBell />
        Click me
      </Button>
    </div>
    <div>
      <Button danger outline>
        <GoCloudDownload />
        Buy now
      </Button>
    </div>
    <div>
      <Button warning>
        <GoDatabase />
        See Deal
      </Button>
    </div>
    <div>
      <Button secondary outline>Hide Ads</Button>
    </div>
    <div>
      <Button primary rounded>Something</Button>
    </div>
  </div>
}

export default ButtonPage