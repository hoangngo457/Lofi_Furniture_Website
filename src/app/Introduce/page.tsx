import { Container } from "@mui/material"
import Breadcrumb_Layout from "../Layout/component/Breadcrumb_Layout";

const Introduce =()=>{
    return (
      <div>
        <Breadcrumb_Layout/>
        <Container>
          <div className="body-introduce">Hello introduce</div>
        </Container>
      </div>
    );
}
export default Introduce;