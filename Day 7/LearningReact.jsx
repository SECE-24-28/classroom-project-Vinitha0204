import Props from "./Props";
import State from "./State";

const LearningReact = () => {
    return (
        <div>
            <h1>Learning React</h1>
            <div>
                <h3>Props Component:</h3>
                <Props hi="Welcome to Props" grade="12" age="17" img="/vite.svg"/>
            </div>
            <div>
                <h3>State Component:</h3>
                <State />
            </div>
        </div>
    )
}
export default LearningReact;