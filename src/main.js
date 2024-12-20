import { Card, CardsCointainer } from "./component/Card";
import { Form } from "./component/Form";
import { Title } from "./component/Title";
import { FormController } from "./controller/FormController";
import "./style.css";

document.querySelector("#app").innerHTML = `
    ${Title("CRUD Vanilla 2")}
    ${Form()}
    ${CardsCointainer()}
`;

const formInstance = new FormController();
formInstance.submitForm();
